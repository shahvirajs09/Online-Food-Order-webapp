//import React from 'react'; 
import LeftoverItem from './LeftoverItem.js';
import React, { useEffect, useRef, useState } from 'react';

//export default class Leftover extends React.Component {
    export default function Leftover (props){
    
   // render() {

        //mapping menu items to leftover menu
        const menuElements=props.leftover
        .map((c,i)=>    
        <LeftoverItem toggleToy={props.toggleToy} key={i} menuItems={c} rId={props.rId}>{c}</LeftoverItem>); 
        //hooks
        const [descVisible,setdescVisible]=useState(false);
        const [lId,setlId]=useState(Math.floor(Math.random() * 101)); 
        const [items,setItems]=useState(''); 
        const [postedTime,setPostedTime]=useState(''); 
        const [quantity,setQuantity]=useState(''); 
        const [reducedPrice,setReducedPrice]=useState(''); 
        const addLeftoverItemHandler=()=>{
            console.log("add");
            props.toggleToy();
            const request={'lId':lId,'items':items,'postedTime':postedTime,'quantity':quantity,'reducedPrice':reducedPrice,"rId":props.rId};
            console.log(request);
            const uri='http://localhost:7000/leftovers/addnew';
            //Feteching through API
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(request)
          };
          fetch(uri, requestOptions)
              .then(response => response.json());
              // .then(data => this.setState({ postId: data.id }));
         }

         const toggleDescVisibility=()=>{
           
             setdescVisible(!descVisible);
            
         }
 

        return (
            
            <div>
            {/* displaying leftover menu headings */}
<div className='card' >
            <div className='visible' >
            <div className='menu-column--small'>
            <p className='p-taskTitle'>ID</p> 
      
            </div>
            
            <div className='menu-column'>
            <p className='p-taskTitle'>ITEM</p>
            </div>
            <div className='menu-column'>
            <p className='p-taskTitle'>POSTED</p> 
            </div>

            <div className='menu-column'>
            <p className='p-taskTitle'>QTY</p> 
            </div>

            <div className='menu-column'>
            <p className='p-taskTitle'>PRICE</p> 
            </div>
           

            </div>

        </div>
  <div >{menuElements}</div>
                <div>
                    <div className='card' onClick={()=>{toggleDescVisibility()}}>
                        <p className='p-taskTitle-2'>ADD NEW ITEM</p>
                     </div>
                </div>

            {descVisible?<div className="collapsed flex">
                 <div className='menu-column'>
                <label className='p-taskTitle'>Item:</label>
                <input type="text" value={items} onChange={(e)=>{setItems(e.target.value)} }></input>
            </div>
            <div className='menu-column'>
            <label className='p-taskTitle'>POSTED:</label>
            <input type="text" value={postedTime} onChange={(e)=>{setPostedTime(e.target.value)} }></input>
            </div>
            <div className='menu-column'>
                <label className='p-taskTitle'>QTY:</label>
                <input type="number" value={quantity} onChange={(e)=>{setQuantity(e.target.value)} }></input>
            </div>
            <div className='menu-column'>
                <label className='p-taskTitle'>PRICE:</label>
                <input type="number" value={reducedPrice} onChange={(e)=>{setReducedPrice(e.target.value)} }></input>
            </div>
            
            <div className='menu-column'>
                <input className="btn" type="submit" onClick={()=>{addLeftoverItemHandler()}} ></input>
            </div>
       
       
       </div>:null } 
 
            </div>
              

        )
    //}
}
