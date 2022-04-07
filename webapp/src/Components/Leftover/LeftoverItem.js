import './LeftoverItem.scss';
import React, { useEffect, useRef, useState } from 'react';

export default function LeftoverItem (props){
   const [visible,setVisible]=useState(false);
   const inputEl = useRef(null);
   const [descVisible,setdescVisible]=useState(false); 
   const [lId,setlId]=useState(props.menuItems.lId); 
   const [items,setItems]=useState(props.menuItems.items); 
   const [postedTime,setPostedTime]=useState(props.menuItems.postedTime); 
   const [quantity,setQuantity]=useState(props.menuItems.quantity); 
   const [reducedPrice,setReducedPrice]=useState(props.menuItems.reducedPrice); 
 
   /**
 * Delete Menu Item
 * @param {*} id 
 */
    const deleteItem=(id)=>{
        props.deleteHandler(id);
    }

    const updateTaskHandler=(id,task)=>{
        
        props.updateTaskHandler(id,task);
    }
    const toggleVisibility=()=>{
        setVisible(!visible);
    }   

     const toggleDescVisibility=()=>{
        setdescVisible(!descVisible);
        console.log(props.task);
    }
    /**
     * Edit item
     * @param {*} id 
     */
    const editLeftoverItemHandler=(id)=>{
        props.toggleToy();
        console.log("edit");
        const request={'lId':lId,'items':items,'postedTime':postedTime,'quantity':quantity,'reducedPrice':reducedPrice,"rId":props.rId};
        console.log(request);
        const uri='http://localhost:7000/leftovers/update/'+id;
    
        const requestOptions = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(request)
      };
      fetch(uri, requestOptions)
        .then(response => response.json()); 
        toggleDescVisibility();
     }

      /**
  * Delete Menu Item
  * @param {*} id 
  */
 const deleteLeftoverItemHandler=(id)=>{
    console.log("delete"+id);
    props.toggleToy();
    
    const uri='http://localhost:7000/leftovers/delete/'+id+"/"+props.rId;

    fetch(uri, { method: 'DELETE' })
    .then(() => alert("Item deleted"));
      
 }

 //Displaing Leftover menu
    
    return(
        <div>
 <div className='card' >
            <div className='visible' onClick={()=>{toggleDescVisibility()}}>
            <div className='menu-column--small'>
            <p className='p-tasksubH'>{props.menuItems.lId}</p> 
      
            </div>
            
            <div className='menu-column'>
            <p className='p-taskTitle'>{props.menuItems.items}</p>
            </div>
            <div className='menu-column'>
            <p className='p-tasksubH'>{props.menuItems.postedTime}</p> 
            </div>

            <div className='menu-column'>
            <p className='p-tasksubH'>{props.menuItems.quantity}</p> 
            </div>

            <div className='menu-column'>
            <p className='p-tasksubH'>{props.menuItems.reducedPrice}</p> 
            </div>
           
            
            </div>
 
        </div>
   {descVisible?<div className="collapsed flex">
   
           <div className='menu-column'>
                <label className='p-taskTitle'>Item:</label>
                <input type="text" value={items} onChange={(e)=>{setItems(e.target.value)} }></input>
            </div>
            <div className='menu-column'>
            <label className='p-taskTitle'>Posted on:</label>
            <input type="text" value={postedTime} onChange={(e)=>{setPostedTime(e.target.value)} }></input>
            </div>
            <div className='menu-column'>
                <label className='p-taskTitle'>Quantity:</label>
                <input type="number" value={quantity} onChange={(e)=>{setQuantity(e.target.value)} }></input>
            </div>
            <div className='menu-column'>
                <label className='p-taskTitle'>Price:</label>
                <input type="number" value={reducedPrice} onChange={(e)=>{setReducedPrice(e.target.value)} }></input>
            </div>
            <div className='menu-column'>
                <input className="btn" type="submit" onClick={()=>{editLeftoverItemHandler(lId)}}></input>
            </div>
            <div className='menu-column'>
                <input className="btn" type="submit" value="Delete" onClick={()=>{deleteLeftoverItemHandler(lId)}}></input>
            </div>
       
   </div>:null }
   
        </div>
       
    )
}