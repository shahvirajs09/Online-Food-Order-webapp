import React, { Component } from 'react';
import './RestaurantAdminDashboard.scss';
import { Link } from 'react-router-dom';
import DashboardItem from '../DashboardItem/DashboardItem.js';
import logo_light from '../Assets/Logo-light.png'
import Sidebar from '../Sidebar/Sidebar.js';

function RestaurantAdminDashboard() {
//    const viewOrders=()=>{
//      console.log('View Orders');
//    }
    // const navStyle = {
    //     color: 'black' 
    //   };

    return (
        
            
        <div>
        
        <h1>ResAdmin</h1>

           <div className="Nav">
               
          
           <img className="logo-container" src={logo_light} alt="Logo" />
          
            {/* <h1>RestaurantAdminDashboard Page</h1> */}
            {/* <ul className="nav-links">
              <Link style={navStyle} to="/menu">
                <li>Menu</li>
              </Link>
    
            </ul>  */}
            {/* <p className="p-head">Hi Abhishek! </p>
            <p className="p-head-alt">Here's your Dashboard:</p>
            <DashboardItem title="Pending Orders" count="12" buttonTitle="View" onclick={viewOrders}></DashboardItem>
            <DashboardItem title="Leftover Items" count="10" buttonTitle="View" onclick={viewOrders}></DashboardItem>
            <DashboardItem title="Menu Items" count="26" buttonTitle="View" onclick={viewOrders}></DashboardItem>
            */}
            
            </div>
            <Sidebar />
            </div>
         );

}
export default RestaurantAdminDashboard;
