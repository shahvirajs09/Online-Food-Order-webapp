import React from 'react';
import './App.css';
import {useEffect} from 'react';
import Login from './Components/LoginPage/LoginPage';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import RestaurantAdminDashboard from './Components/RestaurantAdminDashboard/RestaurantAdminDashboard';
import ManageMenu from './Components/ManageMenu/ManageMenu';
import LandingPage from './Components/LandingPage/LandingPage';
import SysAdminDashboard from './Components/SysAdminDashBoard/SysAdminDashBoard.js';
import UserDashboard from './Components/UserDashboard/UserDashboard.js';
import Sidebar from './Components/Sidebar/Sidebar.js';
import DashboardItem from './Components/DashboardItem/DashboardItem.js';
import Leftover from './Components/Leftover/Leftover.js';
import CustomerMenu from './Components/Customer/Customer_Menu';
import Menu from './Components/Menu/Menu';
import RestoAdmin from './Components/RestoAdmin/RestoAdmin.js';
import MenuItem from './Components/Customer/MenuItem';
import Cart from './Components/Cart/Cart';

function App() {
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

  return (

    
     <div>
        <Router>  <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/r_admin" element={<RestaurantAdminDashboard />} />
        <Route path="/menu" element={<ManageMenu />} />
        <Route path="/dashboard" element={<DashboardItem />} />
        <Route path="/manageMenu" element={<ManageMenu />} />
        <Route path="/restaurantAdmin" element={<ManageMenu />} />
        <Route path="/systemAdmin" element={<SysAdminDashboard />} />
        <Route path="/customer" element={<UserDashboard />} />
        <Route path="/leftover" element={<Leftover leftover={leftover} />} />
        <Route path="/resto" element={<RestoAdmin />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route path="/customerMenu" element={<Menu />} /> */}
        {/* <Menu menuItems={menu}></Menu> */}

        <Route path="/customerMenu" element={<CustomerMenu></CustomerMenu>}/>

        
        {/* <Route path="/leftOverItems" element={<Leftover />} /> */}
     </Routes></Router>
    
        
     
     </div>
  
  
    
  );
}

export default App;

