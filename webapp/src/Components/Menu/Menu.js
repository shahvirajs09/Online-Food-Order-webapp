//import React from 'react';
import './Menu.scss';

import MenuItem from './MenuItem.js';
import React, { useEffect, useRef, useState } from 'react';

//export default class Menu extends React.Component {
    export default function Menu (props){
       
   
     
        const menuElements=props.menuItems
        .map((c,i)=>
        <MenuItem toggleToy={props.toggleToy} key={i} menuItems={c} rId={props.rId}>{c}</MenuItem>); 
        //hooks
        const [descVisible,setdescVisible]=useState(false); 
        const [mId,setMID]=useState(Math.floor(Math.random() * 101)); 
        const [itemName,setItemName]=useState(''); 
        const [itemPrice,setItemPrice]=useState(''); 
        const [itemDescription,setItemDescription]=useState(''); 
        const [itemImage,setItemImage]=useState(''); 
        const [itemIsVegetarian,setItemIsVegetarian]=useState(false); 
        const [itemPortionSize,setItemPortionSize]=useState(''); 
        const [itemCalories,setItemCalories]=useState(''); 
 //let descVisible=false;
        const toggleDescVisibility=()=>{
           // descVisible=!descVisible;
            setdescVisible(!descVisible);
            //console.log(props.task);
        }

        /**
 * Add Menu Item
 * 
 */ 
        const addMenuItemHandler=()=>{
             let id=props.rId;
             console.log(id);
            
            const request={'mId':mId,'itemName':itemName,'itemPrice':itemPrice,'itemDescription':itemDescription,'itemImage':itemImage,'itemIsVegetarian':itemIsVegetarian,'itemPortionSize':itemPortionSize,'itemCalories':itemCalories,"rId":props.rId};
            console.log(request);
            const uri='http://localhost:7000/menuitems/addnew';
      
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(request)
          };
          fetch(uri, requestOptions) 
              .then(response => response.json()).then(props.toggleToy());
              
              // .then(data => this.setState({ postId: data.id }));
         }
      
        return (
            <div>
            

<div className='card' >
            <div className='visible' >
            
            <div className='menu-column'>
            <p className='p-taskTitle'>ID</p>
            </div>
            <div className='menu-column'>
            <p className='p-taskTitle'>ITEM</p> 
            </div>

            <div className='menu-column'>
            <p className='p-taskTitle'>PRICE</p> 
            </div>

            <div className='menu-column'>
            <p className='p-taskTitle'>DESC</p> 
            </div>
            <div className='menu-column'>
            <p className='p-taskTitle'>SIZE</p> 
            </div>
            <div className='menu-column'>
            <p className='p-taskTitle'>CAL</p> 
            </div>
            </div>
             </div>
             <div >{menuElements} </div>
             <div>
             <div className='card' onClick={()=>{toggleDescVisibility()}}>
                <p className='p-taskTitle-2'>ADD NEW ITEM</p>
                </div>
            </div>



            {descVisible?<div className="collapsed flex">
   <div className='menu-column'>
                <label className='p-taskTitle'>Item:</label>
                <input type="text" value={itemName} onChange={(e)=>{setItemName(e.target.value)} }></input>
            </div>
            <div className='menu-column'>
            <label className='p-taskTitle'>Description:</label>
            <input type="text" value={itemDescription} onChange={(e)=>{setItemDescription(e.target.value)} }></input>
            </div>
            <div className='menu-column'>
                <label className='p-taskTitle'>Size:</label>
                <input type="text" value={itemPortionSize} onChange={(e)=>{setItemPortionSize(e.target.value)} } ></input>
            </div>
            <div className='menu-column'>
                <label className='p-taskTitle'>Price:</label>
                <input type="number" value={itemPrice} onChange={(e)=>{setItemPrice(e.target.value)} }></input>
            </div>
            <div className='menu-column'>
                <label className='p-taskTitle'>Calories:</label>
                <input type="number" value={itemCalories} onChange={(e)=>{setItemCalories(e.target.value)} }></input>
            </div>
            <div className='menu-column'>
            <label className='p-taskTitle'>Veg\?:</label>
                <select value={itemIsVegetarian} onChange={(e)=>{setItemIsVegetarian(e.target.value)} }>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </div>
            <div className='menu-column'>
                <input className="btn" type="submit" onClick={()=>{addMenuItemHandler()}} ></input>
            </div>
       
       
       </div>:null } 
                </div>

        )
    
}
