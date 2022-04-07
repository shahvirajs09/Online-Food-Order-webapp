import React, { Component } from 'react';
import './ManageMenu.scss';
import logo_light from '../Assets/Logo-light.png';
import Sidebar from '../Sidebar/Sidebar.js';

export default function ManageMenu() {

    return (
  
        <div>
        
        <div className="Nav">
  
        <img className="logo-container" src={logo_light} alt="Logo" />
        </div>
        <Sidebar />
            </div>
            
         );

}