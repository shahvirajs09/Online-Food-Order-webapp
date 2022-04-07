//System Admin Dashboard
import React from 'react'; 
import './SysAdminDashboard.scss';
import AddResto from '../Assets/AddResto.png';
import AddUser from '../Assets/AddUser.png';
import RemoveResto from '../Assets/RemoveResto.png';
import { useNavigate } from 'react-router-dom';
import NavbarSimple from '../Common Elements/SimpleNavbar/SimpleNavbar';
import RemoveUser from '../Assets/RemoveUser.png';
import { useState } from 'react';

export default function SysAdminDashboard(props){
    const [selector,SetSelector]=useState('addResto')
    const nav=useNavigate();
    // add resto hooks
    const [name,setName]=useState('');
    const [location,setLocation]=useState('');
    const [image,setImage]=useState('');
    const [restaurantId,setRestaurantId]=useState(Math.floor(Math.random() * 101));
    
    // add user hooks
    const [username,setUsername]=useState('');
    const [uname,setUname]=useState('');
    const [alias,setAlias]=useState('');
    const [password,setPassword]=useState('');
    const [type,setType]=useState('');
    const [userId,setUserId]=useState(Math.floor(Math.random() * 101));
    //remove user
    const [uID,setUID]=useState('');
     //remove restaurant
     const [rID,setRID]=useState('');


    
    
    
    const onClick=(val)=>{SetSelector(val); renderForm(val)}

    const addRestaurantHandler=()=>{
      
      const restaurantRequest={'rId':restaurantId,'restaurantName':name,'restaurantLocation':location,'restaurantStatus':true,'restaurantImage':image}
      const uri='http://localhost:7000/restaurants/addnew/';

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(restaurantRequest)
    };
    fetch(uri, requestOptions)
        .then(response => response.json());
        // .then(data => this.setState({ postId: data.id }));
   }

   const addUserHandler=()=>{
    const request={'uId':userId,'userName':username,'userAlias':alias,'userPassword':password,'userType':{'type':type,'rId':rID}};
    const uri='http://localhost:7000/users/addnew/';

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
  };
  fetch(uri, requestOptions)
      .then(response => response.json());
      // .then(data => this.setState({ postId: data.id }));
 }

   const removeRestaurantHandler=(id)=>{
     
    const uri='http://localhost:7000/restaurants/delete/'+id;

    fetch(uri, { method: 'DELETE' })
  .then(() => this.setState({ status: 'Delete successful' }));
  

   //fetch(uri).then((response) =>response.json()).then((u)=>{ handleUserFlow(u);});
  
 
 }

 const removeUserHandler=(id)=>{
   console.log("iii");
     console.log(id);
  const uri='http://localhost:7000/users/delete/'+id;

  
  fetch(uri, { method: 'DELETE' })
  .then(() => this.setState({ status: 'Delete successful' }));
  

 //fetch(uri).then((response) =>response.json()).then((u)=>{ handleUserFlow(u);});


}
    const  renderForm=(form)=>{
switch (form){
  //Add user
    case 'addUser':return(  <div className="card-wide">
            
    <form >
    <p className='p-taskStatus-1'>User ID:</p>
     <input 
     className='input-text'
       type="text" 
       value={userId} onChange={(e)=>{setUserId(e.target.value)} }
     />
      <p className='p-taskStatus-1'>Add User Name</p>
     <input 
     className='input-text'
       type="text" 
       value={username} onChange={(e)=>{setUsername(e.target.value)} }
     />
   
   <p className='p-taskStatus-1'>Enter Restaurant Name of the User</p>
     <input 
       className='input-text'
       type="text" 
       value={uname} onChange={(e)=>{setUname(e.target.value)} }
     />
     <p className='p-taskStatus-1'>Alias Name</p>
     <input 
       className='input-text'
       type="text" 
       value={alias} onChange={(e)=>{setAlias(e.target.value)} }
     />
     <p className='p-taskStatus-1'>Password</p>
     <input 
       className='input-text'
       type="text" 
       value={password} onChange={(e)=>{setPassword(e.target.value)} }
     />
   <p className='p-taskStatus-1'>User Type</p>
   <select className="dropdown"    value={type} onChange={(e)=>{setType(e.target.value)} }>
     <option value=""></option>
     <option value="systemAdmin">System Admin</option>
     <option value="resAdmin">Restaurant Admin</option>
     <option value="user">User</option>
   </select>
     {/* <input 
       className='input-text'
       type="text" 
       value={type} onChange={(e)=>{setType(e.target.value)} }
     /> */}
   
 </form>
 <br/>
 <button className='userSubmit' onClick={()=>{addUserHandler()}} >SUBMIT</button>
         </div>);
        break;
        //remove user
    case 'remUser':return(  <div className="card-wide">
            
    <form >
      <p className='p-taskStatus-1'>Enter ID of the User</p>
     <input 
     className='input-text'
       type="text" 
       value={uID} onChange={(e)=>{setUID(e.target.value)} }
     />
   
    
   <button className='button'  onClick={()=>{removeUserHandler(uID)}}>SUBMIT</button>
   
 </form>
         </div>);
            break;
            //add restaurant
    case 'addResto':return(  <div className="card-wide">
            
    <form >
    <p className='p-taskStatus-1'> Restaurant Id:</p>
     <input 
     className='input-text'
       type="text" 
       value={restaurantId} onChange={(e)=>{setRestaurantId(e.target.value)} }
     />
      <p className='p-taskStatus-1'>Enter Restaurant Name</p>
     <input 
     className='input-text'
       type="text" 
       value={name} onChange={(e)=>{setName(e.target.value)} }
     />
   
   <p className='p-taskStatus-1'>Enter Location</p>
     <input 
       className='input-text'
       type="text"
       value={location} onChange={(e)=>{setLocation(e.target.value)} }
     />
     <p className='p-taskStatus-1'>Enter Image URl</p>
     <input 
       className='input-text'
       type="text" 
       value={image} onChange={(e)=>{setImage(e.target.value)} }
     />
     
   <button className='button' onClick={()=>{addRestaurantHandler()}} >SUBMIT</button>
   
 </form>
         </div>);
                break;
                //remove restaurant
    case 'remResto':return(  <div className="card-wide">
            
    <form >
      <p className='p-taskStatus-1'>Enter ID of the Restaurant to Remove</p>
     <input 
     className='input-text'
       type="text" 
       value={rID} onChange={(e)=>{setRID(e.target.value)} }
     />
   
    
   <button className='button' onClick={()=>{removeRestaurantHandler(rID)}} >SUBMIT</button>
   
 </form>
         </div>);
                    break;
    case 'signOut':(nav('/login',{replace: true}))
        default:
}
    }
    return(
        <div> 
          <NavbarSimple/>
        <br/><br/>
               <p className="p-title-">Admin Control Panel</p>
               <div className="container">
            <div style={{flex: 1, margin:"10px"}}>
                
           
          <div  className="card-dash"  onClick={()=>{onClick('addResto')}}>
             
              <img className="photo" src={AddResto} alt=""></img>
              <p className="p-title-dash">Add New Restaurant</p>
          </div>
          
    <div  className="card-dash" onClick={()=>{onClick('addUser')}}>
             
              <img  className="photo" src={AddUser} alt=""></img>
              <p className="p-title-dash">Add New User</p>
          </div> 
          <div  className="card-dash" onClick={()=>{onClick('remResto')}}>
           
              <img className="photo" src={RemoveResto} alt=""></img>
              <p className="p-title-dash">Revoke Restaurant Access</p>
          </div>
          
    <div  className="card-dash" onClick={()=>{onClick('remUser')}}>
              <img className="photo" src={RemoveUser} alt=""></img>

              <p className="p-title-dash">Revoke User Access</p>
          </div>

          <div  className="card-dash" onClick={()=>{onClick('signOut')}}>
              <img className="photo" src={RemoveUser} alt=""></img>

              <p className="p-title-dash">Sign Out</p>
          </div>   
          
      </div>
      <div style={{flex: 3, margin:"10px"}}>
      {renderForm(selector)}
            </div>
        </div>
        </div>
       
      
    );
}