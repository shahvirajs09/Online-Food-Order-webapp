//Menu that is displayed to Customer. Data is fetched from Database

import react from 'react';
import {useLocation} from 'react-router-dom';
import './Customer_Menu.scss';
import MenuItem from './MenuItem.js';
import LeftoverMenuItem from './LeftoverMenuItem.js';
import  './MenuItem.scss';
import CartItem from './CartItem.js';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import cartLogo from '../Assets/cart.png';
import NavbarSimple from '../Common Elements/SimpleNavbar/SimpleNavbar';


//hooks
export default function Customer_Menu(props){
    const [cart,setcart]=useState([]);
    const location = useLocation();
    const nav=useNavigate();
   const toLoginPage=()=>{
    
    nav('/login',{state:{cart:cart,rId:location.state.rId}},{replace: true});//navigates to login page
   }

   //adds item to cart

   const addButton=(order)=>{
       
    setcart(cart => [...cart, order]);
   
      // cart.push(menuItem.itemName);
       console.log("cart:"+cart );
    alert("Item added");
  }
   
    
    return (
        <div>
            <NavbarSimple/>
            <br/><br/>
            <h2 className="restaurantName1" style={{margin:"20px"}}>{location.state.name}</h2>
        

        <div style={{display:"flex",flexDirection:"row", margin:"20px"}}>

            <div style={{flex:"3"}}>
            <div className="menu-bg">
            <div className='menu-headings' >
            <div className='visible' >
            
            <div className='menu-heading-column'>
            <p className='p-taskTitle'>ID</p>
            </div>
            <div className='menu-heading-column'>
            <p className='p-taskTitle'>ITEM</p> 
            </div>

            <div className='menu-heading-column'>
            <p className='p-taskTitle'>PRICE</p> 
            </div>

            <div className='menu-heading-column'>
            <p className='p-taskTitle'>DESC</p> 
            </div>

            <div className='menu-heading-column'>
            <p className='p-taskTitle'>SIZE</p> 
            </div>
            
            <div className='menu-heading-column'>
            <p className='p-taskTitle'>CAL</p> 
            </div>
            <div className='menu-heading-column'>
            <p className='p-taskTitle'>QUANTITY</p> 
            </div>

            
            </div>
             </div>
             </div>

            {/* leftover menu */}

                 {location.state.menu.map(c => <MenuItem  menuItems={c} addButton={addButton}/>)}
                <div style={{margin:"20px"}}>
                <p className='p-menu-headings'>Explore our Leftover Menu</p>
                 
                </div>
                 {location.state.leftover.map(c => <LeftoverMenuItem  menuItems={c} addButton={addButton}/>)}
             </div>
             <div style={{flex:"1"}}>
             <div className="card-cart">
                 <div style={{display:"flex",flexDirection:"row"}}>
                 <img className="logo" src={cartLogo} alt="Logo" />
                 <p className="card_title">CART</p>
                 
                 </div>
            
             <div>
              {cart.map(c => <CartItem  order={c} />)}
             </div>
       
       
       
       
       
        </div>
        <div className="button-checkout" onClick={()=>{toLoginPage()}}> <p className="p-button">CHECKOUT</p></div>
        </div>
        </div>
        </div>
        
        );

}