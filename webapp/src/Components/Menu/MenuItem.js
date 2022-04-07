import './MenuItem.scss';
import React, { useEffect, useRef, useState } from 'react';

export default function MenuItem (props){

    //hooks 
   const [visible,setVisible]=useState(false);
   const inputEl = useRef(null);
   const [descVisible,setdescVisible]=useState(false); 
 
   const [mId,setMID]=useState(props.menuItems.mId); 
   const [itemName,setItemName]=useState(props.menuItems.itemName); 
   const [itemPrice,setItemPrice]=useState(props.menuItems.itemPrice); 
   const [itemDescription,setItemDescription]=useState(props.menuItems.itemDescription); 
   const [itemImage,setItemImage]=useState(props.menuItems.itemImage); 
   const [itemIsVegetarian,setItemIsVegetarian]=useState(props.menuItems.itemIsVegetarian); 
   const [itemPortionSize,setItemPortionSize]=useState(props.menuItems.itemPortionSize); 
   const [itemCalories,setItemCalories]=useState(props.menuItems.itemCalories); 
   
   /**
    * Show block visiblity
    */
    const toggleDescVisibility=()=>{
        setdescVisible(!descVisible);
        console.log(props.task);
    }


/**
 * Edit Menu Item
 * @param {*} id 
 */
const editMenuItemHandler=(id)=>{
    console.log("edit");
    props.toggleToy();
    const request={'mId':mId,'itemName':itemName,'itemPrice':itemPrice,'itemDescription':itemDescription,'itemImage':itemImage,'itemIsVegetarian':itemIsVegetarian,'itemPortionSize':itemPortionSize,'itemCalories':itemCalories,'rId':props.rId}
    const uri='http://localhost:7000/menuitems/update/'+id;

    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
  };
  fetch(uri, requestOptions)
    .then(response => response.json(),alert("Menu Item Updated")); 
    toggleDescVisibility();

 }
 /**
  * Delete Menu Item
  * @param {*} id 
  */
 const deleteMenuItemHandler=(id)=>{
    console.log("delete"+id);
    props.toggleToy();
    
    const uri='http://localhost:7000/menuitems/delete/'+id+"/"+props.rId;

    fetch(uri, { method: 'DELETE' })
    .then(() => alert("Item deleted"));
      
 }

    return(
        <div>
        <div className='card' >
            <div className='visible' onClick={()=>{toggleDescVisibility()}}>
            <div className='menu-column-small'>
            {props.menuItems.itemIsVegetarian?<div className="isVeg"></div>:<div className="isNonVeg"></div>} 
      
            </div>
            <div className='menu-column--small'>
            <p className='p-tasksubH'>{props.menuItems.mId}</p> 
      
            </div>
            
            <div className='menu-column'>
            <p className='p-taskTitle'>{props.menuItems.itemName}</p>
            </div>
            <div className='menu-column'>
            <p className='p-tasksubH'>{props.menuItems.itemPrice}</p> 
            </div>

            <div className='menu-column'>
            <p className='p-tasksubH'>{props.menuItems.itemDescription}</p> 
            </div>

            <div className='menu-column'>
            <p className='p-tasksubH'>{props.menuItems.itemPortionSize}</p> 
            </div>
            <div className='menu-column'>
            <p className='p-tasksubH'>{props.menuItems.itemCalories}</p> 
            </div>

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
                <input type="number" value={itemPortionSize} onChange={(e)=>{setItemPortionSize(e.target.value)} } ></input>
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
                <input className="btn" type="submit" onClick={()=>{editMenuItemHandler(mId)}}></input>
            </div>
            <div className='menu-column'>
                <input className="btn" type="submit" value="Delete" onClick={()=>{deleteMenuItemHandler(mId)}}></input>
            </div>
       
       </div>:null }
       </div>
    )
}