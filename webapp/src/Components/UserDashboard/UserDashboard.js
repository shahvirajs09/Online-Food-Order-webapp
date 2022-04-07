import React from 'react'; 
import './UserDashboard.scss';
import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import RemoveUser from '../Assets/RemoveUser.png';
import { useState } from 'react';
import ResOrders from '../Assets/resOrders.png';
import NavbarSimple from '../Common Elements/SimpleNavbar/SimpleNavbar';
import cartLogo from '../Assets/cart.png';
import CartItem from '../Customer/CartItem.js'

export default function UserDashboard(props){
  //hooks
  const loc=useLocation(); const nav=useNavigate();
  const [view,setView]=useState('current');

  const toggleView=(view)=>{
     
      switch(view){
        case 'current':return(<div>
          <div className="card-cart">
          <div style={{display:"flex",flexDirection:"row"}}>
          <img className="logo" src={cartLogo} alt="Logo" />
           <p className="card_title">CART</p>
  
           </div>

             <div>
           {loc.state.currentOrder.map(c => <CartItem  order={c} />)}
              </div>





          </div>
            <div className="button-checkout" onClick={()=>{confirmOrder()}}> <p className="p-button">CHECKOUT</p></div>

           </div>)
           case 'past': return(<h1>Work in Progress!  </h1>)
           case 'signOut':(nav('/login',{replace: true}))
           break;
           default:
      }
  }
  const onClick=(val)=>{setView(val); toggleView(val)}
  const confirmOrder=()=>{
    const order={
      "oId":Math.floor(Math.random() * 9999),
      "orderItems":loc.state.currentOrder,
      "orderTime":Date.now(),
      "orderTotal":9999,
      "customerName":loc.state.user.userName,
      "customerContactNo":999999,
      "customerEmail":"aa@aa.com",
      "isComplete":false
    }
    const uri="http://localhost:7000/orders/addnew/"+loc.state.rId; //adding new orders through API call
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
  };
  fetch(uri, requestOptions)
      .then(response => response.json())
      .then( alert("Order Placed"));
   
  }
    return(
      <div>
       
            <NavbarSimple/>
            <br/><br/>
       <div style={{display:"flex",flexDirection:"row"}}>

         <div>
         <div  className="card-dash-resto" onClick={()=>onClick('current')} >
              <img className="photo" src={ResOrders} alt=""></img>

              <p className="p-title-dash">Current Order</p>
          </div>
          <div  className="card-dash-resto"  onClick={()=>onClick('past')}  >
              <img className="photo" src={ResOrders} alt=""></img>

              <p className="p-title-dash">View Past Orders</p>
          </div>
          <div  className="card-dash-resto" onClick={()=>{onClick('signOut')}}>
              <img className="photo" src={RemoveUser} alt=""></img>

              <p className="p-title-dash">Sign Out</p>
          </div>
         </div>
                {toggleView(view)}
                   </div>


           
         </div>
    );
  }
