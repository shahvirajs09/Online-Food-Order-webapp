import React from 'react';

import { Link } from 'react-router-dom';
import NavbarSimple from '../Common Elements/SimpleNavbar/SimpleNavbar';
import './LoginPage.scss';
import  { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Login() {
  //hooks
  const[userName,setuserName]=useState();
  const[password,setpassword]=useState();
  const history = useNavigate();
  const loc=useLocation();

  
  const fetchResto=(id)=>{
    //get users restaurant details
    const uri='http://localhost:7000/restaurants/getdetails/'+id;
    
     fetch(uri).then((response) =>response.json())
     .then((m)=>{
      history("/resto",{state:{restaurant:m}},{ replace: true });
       //parse(m);
     });
  }
  const a=(id)=>{alert(id)}
  const parse=(restaurant)=>{
    let tempArr=[];
    restaurant.menu.forEach(element=>{
     
      tempArr.push(element[0]);

      
    })
    console.log(tempArr);
    
  }

  //Switch case for type of user. Accordingly redirected to System Admin Dashboard, Restaurant Admin Dashboard , Customer Dashboard

  const handleUserFlow=(user)=>{
    console.log(user.userType.type);
    switch( user.userType.type)
    {
    case "resAdmin":
      fetchResto(user.userType.rId);
      break;
    case "systemAdmin":
      console.log("systemAdmin :");
      history("/systemAdmin",{ replace: true })
   
      break;
    case "user":
      
      let arr=[];
      arr.push(loc.state.cart);
      console.log("cartLogin"+arr);
      history("/customer",{state:{currentOrder:loc.state.cart,rId:loc.state.rId,user:user}},{replace: true });
    break;
    default:console.error("Invalid user type",{ replace: true });
  }
  }

  //Fetching username password
  const loginHandler=()=>{
     
     const uri='http://localhost:7000/users/getdetails/'+userName+'/'+password;

    fetch(uri).then((response) =>response.json()).then((u)=>{ handleUserFlow(u);});
   
  
  }

    return (
      <div>
         <NavbarSimple/>
      <div className="bgg">
      <div className="form">
       
        <div className="form-inner">
          <h2 className="LoginTitle">Login</h2>
            <div className="form-group">
            <label htmlFor="email">Username:</label>
            <input type="text" name="email"  id="email" value={userName} onChange={(e) => setuserName(e.target.value)}/>
            </div>
            <br></br>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password"  id="password"  value={password} onChange={(e) => setpassword(e.target.value)}/>
            </div>
            <br/>
            <div>
            <button class="Loginpage-button" onClick={()=>{loginHandler()}}>Login</button>
            </div>

           
            <br></br>
            {/* <Link to="/r_admin" style={{ textDecoration: 'none'}}> */}
           
            {/* </Link> */}
          </div>

           
         
          </div> 
          </div>
          
          </div>

    );
  }
  
  export default Login;
  