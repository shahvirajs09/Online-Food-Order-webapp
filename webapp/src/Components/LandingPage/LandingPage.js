import React from 'react';
import { Link } from 'react-router-dom';
import logo_light from '../Assets/Logo-light.png'
import logo_dark from '../Assets/Logo-dark.png'
import bg_photo from '../Assets/youhungry.png'
import './LandingPage.scss';
import Card from '../Common Elements/Card/Card';
import LeftoverCard from './LeftoverCard.js';
import {useState, useEffect} from 'react';
import Customer_Menu from '../Customer/Customer_Menu.js'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  
  const [restaurants, setRestaurants]=useState([]);
  const [leftovers,setLeftovers]=useState([]);
// const getMenuItems=()=>{
//   fetch("http://localhost:7000/restaurants").then((response) =>response.json()).then((m)=>{
//     //invoke method to use m menu
//   })
// }

const navigate = useNavigate();
let tempArr=[];
const parseLeftover=(restaurants)=>{
restaurants.forEach((restaurant)=>{
  restaurant.leftover.forEach(element=>{
       
    tempArr.push(element[0]);
    //Fetching elements and pushing into an array to display restaurants
    
  })
  console.log(tempArr);
  setLeftovers(tempArr);
})
}
  useEffect(() => {
    (async()=>{
      let restaurantData;
      try {
        const response=await fetch("http://localhost:7000/restaurants");
        restaurantData=(await response.json());
        
      } catch (error) {
        console.log(error);
        restaurantData=[];
      }

      parseLeftover(restaurantData);
      setRestaurants(restaurantData);
    })();
  
  },[]);

  const onClick=(restaurant)=>{ 

    const uri='http://localhost:7000/restaurants/getdetails/'+restaurant.rId;//fetching through API 

    fetch(uri).then((response) =>response.json())
    .then((m)=>{
       
      parse(m);
    });

    //restaurantData.onClick();
   // alert(restaurant.restaurantName);
    }

    const parse=(restaurant)=>{
      let tempArr=[];
      let leftoverArray=[];
      const name=restaurant.restaurantName;
      const rId=restaurant.rId;
      
      restaurant.menu.forEach(element=>{
       
        tempArr.push(element[0]);

        
      })
      restaurant.leftover.forEach(element=>{
        leftoverArray.push(element[0]);
      })
      console.log(tempArr);
      console.log(name);
      navigate("/customerMenu",{state:{menu:tempArr,leftover:leftoverArray, name, rId}},{ replace: true })
     
    }

     
    return (
      <div>
      <div className="Nav">
          
          <img className="logo-container" src={logo_dark} alt="Logo" />
          
          <Link to="/login" style={{ textDecoration: 'none'}}>
          <button className="login-button"> Log in</button>
          </Link>
        </div>
        <br></br><br></br><br></br><br></br>
        <div className="bg-photo-div">
          <img className="bg-photo" src={bg_photo} alt="bg-photo" />
        </div>
        <h2 className="h2_restaurants">Restaurants</h2>
        <div  className="restaurant_cards">
          {restaurants.map((restaurant,index)=>
          <Card onClick={onClick} restaurantData={restaurant} key={index}/>
          )}
        
        </div>
  
        
        </div>


          
      
    );
  }
  
  export default LandingPage;
  //get request from db, map to 