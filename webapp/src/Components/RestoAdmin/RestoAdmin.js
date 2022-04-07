import react from "react";
import { useState,useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './RestoAdmin.scss'; 
import ResMenu from '../Assets/resMenu.png';
import NavbarSimple from '../Common Elements/SimpleNavbar/SimpleNavbar';
import ResLeft from '../Assets/resLeft.png';
import EditResto from '../Assets/editResto.png';
import ResDashboard from '../Assets/resDashboard.png';
import ResOrders from '../Assets/resOrders.png';
import RemoveUser from '../Assets/RemoveUser.png';
import Dashboard from '../DashboardItem/DashboardItem.js';
import Leftover from '../Leftover/Leftover.js';
import Menu from '../Menu/Menu.js';
import Order from '../Order/Order.js';
import EditRestaurant from './EditResto.js';


export default function RestoAdmin(props){
  //hooks
const [toy,setToy]=useState(false);
const [rOrder,setRorder]=useState([]);
const [rLeftover,setRleftover]=useState([]);
const [rMenu,setRmenu]=useState([]);
const loc=useLocation();
const navigate=useNavigate();
const parse=(restaurant)=>{
  let tempArr=[];
  restaurant.menu.forEach(element=>{
   
    tempArr.push(element[0]);

    
  })
  return tempArr;
  
}
const toggleToy=()=>{
setToy(!toy);
}
const parseLeftover=(restaurant)=>{
  let tempArr=[];
  restaurant.leftover.forEach(element=>{
    tempArr.push(element[0]);
  })
  return tempArr;
}

const parseOrder=(restaurant)=>{
  let tempArr=[];
  restaurant.orders.forEach(element=>{
    tempArr.push(element[0]);
  })
  return tempArr;
}

// const rMenu=parse(loc.state.restaurant);
// const rLeftoverMenu=parseLeftover(loc.state.restaurant);
// const rOrders=parseOrder(loc.state.restaurant);
console.log(loc.state.restaurant);
const rId=loc.state.restaurant.rId;
    const menu=[
        {
        "mId":"1",
        "itemName" :"Croissant",
        "itemPrice": 220,
        "itemDescription": "Badia",
        "itemImage":"imageURLNew",
        "itemIsVegetarian":false,
        "itemPortionSize": "BIGGG",
        "itemCalories": 200
      },{
        "mId":"2",
        "itemName" :"Coffee",
        "itemPrice": 220,
        "itemDescription": "Badia",
        "itemImage":"imageURLNew",
        "itemIsVegetarian":true,
        "itemPortionSize": "BIGGG",
        "itemCalories": 200
      },{
        "mId":"3",
        "itemName" :"Cookies",
        "itemPrice": 220,
        "itemDescription": "Badia",
        "itemImage":"imageURLNew",
        "itemIsVegetarian":false,
        "itemPortionSize": "BIGGG",
        "itemCalories": 200
      },{
        "mId":"4",
        "itemName" :"Almond Shake",
        "itemPrice": 220,
        "itemDescription": "Badia",
        "itemImage":"imageURLNew",
        "itemIsVegetarian":false,
        "itemPortionSize": "BIGGG",
        "itemCalories": 200
      },{
        "mId":"5",
        "itemName" :"Pasta",
        "itemPrice": 220,
        "itemDescription": "Badia",
        "itemImage":"imageURLNew",
        "itemIsVegetarian":false,
        "itemPortionSize": "BIGGG",
        "itemCalories": 200
      },{
        "mId":"6",
        "itemName" :"Spaghetti",
        "itemPrice": 220,
        "itemDescription": "Badia",
        "itemImage":"imageURLNew",
        "itemIsVegetarian":true,
        "itemPortionSize": "BIGGG",
        "itemCalories": 200
      },{
        "mId":"7",
        "itemName" :"Kebabs",
        "itemPrice": 220,
        "itemDescription": "Badia",
        "itemImage":"imageURLNew",
        "itemIsVegetarian":true,
        "itemPortionSize": "BIGGG",
        "itemCalories": 200
      },{
        "mId":"8",
        "itemName" :"Falafel",
        "itemPrice": 220,
        "itemDescription": "Badia",
        "itemImage":"imageURLNew",
        "itemIsVegetarian":false,
        "itemPortionSize": "BIGGG",
        "itemCalories": 200
      },{
        "mId":"9",
        "itemName" :"Shawarma",
        "itemPrice": 220,
        "itemDescription": "Badia",
        "itemImage":"imageURLNew",
        "itemIsVegetarian":false,
        "itemPortionSize": "BIGGG",
        "itemCalories": 200
      },
    ]
const leftover=[{
    "lId":"001",
    "items":"Coffee",
    "postedTime":"22:00",
    "quantity":"10",
    "reducedPrice":"200"
  },
  {
    "lId":"002",
    "items":"Coffee",
    "postedTime":"12:00",
    "quantity":"12",
    "reducedPrice":"200"
  },
  {
    "lId":"003",
    "items":"Brownie",
    "postedTime":"21:00",
    "quantity":"10",
    "reducedPrice":"200"
  },
  {
    "lId":"004",
    "items":"Fries",
    "postedTime":"21:00",
    "quantity":"10",
    "reducedPrice":"200"
  },
  {
    "lId":"005",
    "items":"Tortilla",
    "postedTime":"21:00",
    "quantity":"10",
    "reducedPrice":"200"
  },
  {
    "lId":"006",
    "items":"Rice",
    "postedTime":"21:00",
    "quantity":"10",
    "reducedPrice":"200"
  }]
  const orders=[{
 "oId": "002",
  "orderItems": [
  {
  "item": "updatedItem"
  }
  ],
  "orderTime": "22/10/10",
  "orderTotal": 100,
  "customerName": "Jacob",
  "customerContactNo": 10010101010101,
  "customerEmail": "a@m.com",
  "isComplete": true,
  "_id": "61a7cac0de2101232c002d3c"
  },{
    "oId": "003",
     "orderItems": [
     {
     "item": "updatedItem"
     }
     ],
     "orderTime": "22/10/10",
     "orderTotal": 100,
     "customerName": "Jacob",
     "customerContactNo": 10010101010101,
     "customerEmail": "a@m.com",
     "isComplete": true,
     "_id": "61a7cac0de2101232c002d3c"
     },{
        "oId": "005",
         "orderItems": [
         {
         "item": "updatedItem"
         }
         ],
         "orderTime": "22/10/10",
         "orderTotal": 100,
         "customerName": "Jacob",
         "customerContactNo": 10010101010101,
         "customerEmail": "a@m.com",
         "isComplete": true,
         "_id": "61a7cac0de2101232c002d3c"
         },]

//Switch Case for Restaurant Admin Dashboard. According to the option selected, a submenu is shown on the right
    const [selector,SetSelector]=useState('dashboard')
    const  renderForm=(form)=>{
 switch(form){
     case 'dashboard': {return(<Dashboard toggleToy={toggleToy} orderCount={rOrder.length} leftoverItemCount={rLeftover.length}> </Dashboard>)}
         
     case 'leftovers': return(<Leftover toggleToy={toggleToy}  leftover={rLeftover} rId={rId} ></Leftover>)
        
     case 'menu':return(<Menu toggleToy={toggleToy}  menuItems={rMenu} rId={rId} ></Menu>)
   
     case 'orders': return(<Order orderItems={rOrder}></Order>)
     case 'editResto':return(<EditRestaurant restaurant={loc.state.restaurant}/>)
     case 'signOut': navigate("/login", { replace: true })
  
     default:
 }
    }
    const onClick=(val)=>{SetSelector(val); renderForm(val)}







    useEffect(()=>{
      const uri='http://localhost:7000/restaurants/getdetails/'+loc.state.restaurant.rId;
      console.log(uri);
      fetch(uri).then((response) =>response.json())
      .then((m)=>{
        setRorder(parseOrder(m));
        setRmenu(parse(m));
        setRleftover(parseLeftover(m));
     //pass into respective arrays
    })},[toy])



    return(
        <div>
            <NavbarSimple/>
        <br/><br/>
               <p className="p-title-">Restaurant Admin Control Panel</p>
               <div className="container">
            <div style={{flex: 1, margin:"10px"}}>
                
           
          <div  className="card-dash-resto"  onClick={()=>{onClick('dashboard')}}>
             
              <img className="photo" src={ResDashboard} alt=""></img>
              <p className="p-title-dash">Dashboard</p>
          </div>
          
    <div  className="card-dash-resto" onClick={()=>{onClick('menu')}}>
             
              <img  className="photo" src={ResMenu} alt=""></img>
              <p className="p-title-dash">Manage Menu</p>
          </div> 
          <div  className="card-dash-resto" onClick={()=>{onClick('leftovers')}}>
           
              <img className="photo" src={ResLeft} alt=""></img>
              <p className="p-title-dash">Manage Leftover Menu</p>
          </div>
          
    <div  className="card-dash-resto" onClick={()=>{onClick('orders')}}>
              <img className="photo" src={ResOrders} alt=""></img>

              <p className="p-title-dash">Manage Orders</p>
          </div>
          <div  className="card-dash-resto" onClick={()=>{onClick('editResto')}}>
              <img className="photo" src={EditResto} alt=""></img>

              <p className="p-title-dash">Edit Restaurant Data</p>
          </div>
          <div  className="card-dash-resto" onClick={()=>{onClick('signOut')}}>
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