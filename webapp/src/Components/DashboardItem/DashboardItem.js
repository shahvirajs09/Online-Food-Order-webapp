//Dashboard Items displayed
import React, { Component } from 'react';
import './DashboardItem.scss';
import logo_light from '../Assets/Logo-light.png';
import Sidebar from '../Sidebar/Sidebar.js';
import Lander from '../Assets/lander.jpg';
export default function DashboardItem(props){
return(
    
    <div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{flexDirection: 'column' }}>
            <p className="p-welcome">Welcome Back!</p>
                <div style={{height: '300px;'}}>
                <br></br>
                <br></br>   <br></br>
                </div>
                 <div className="dashboard-item">
                      <p className="p-cardTitle-s">Orders Pending</p>
                      <p className="p-insight">{props.orderCount}</p>
                      
                 </div>
                 <div className="dashboard-item">
                 <p className="p-cardTitle-s">Leftover items</p>
                 <p className="p-insight">{props.leftoverItemCount}</p>
                      
                 </div>
                 {/* <div className="dashboard-item">
                 <p className="p-cardTitle-s">Revenue    <br></br></p>
                 <p className="p-insight">$350</p>
                 </div> */}
            </div>
      
        <img className="photo-2" src={Lander} alt=""></img>
        
        </div>

  
  
            </div>
);
}