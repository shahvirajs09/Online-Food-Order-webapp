import './MenuItem.scss';
import React, { useEffect, useRef, useState } from 'react';

export default function MenuItem (props){

   const [visible,setVisible]=useState(false);
   const inputEl = useRef(null);
   const [descVisible,setdescVisible]=useState(false); 
   const [qty,setQty]=useState(1);
  
  /**
  * Add Menu Item
  */
   const addButton=()=>{
       let order={
           'items':props.menuItems,
           'qty':qty
       }
    props.addButton(order);
  }

   const onTaskClick=(title)=>{
      //  alert(title);
    }

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
     const toggleTaskStatus=(id)=>{
        inputEl.current.innerText==='DONE'?  inputEl.current.innerText='PENDING':inputEl.current.innerText='DONE';
        // props.task.isComplete==='true'?props.toggleTaskComplete(false,id):props.toggleTaskComplete(true,id); ;
         if(inputEl.current.innerText==='DONE'){
                const task={
                    'isComplete':'true',
                };
                props.toggleTaskComplete(task,id);
         }
         else{
 const task={
                    'isComplete':'false',
                };
                props.toggleTaskComplete(task,id);
         }

       
      
    }
//Menu items displayed 

    return(
        <div>
 <div className='card' >
            <div className='visible'  >
            <div className='menu-column-small'>
            {/* {props.menuItems.itemIsVegetarian?<div className="isVeg"></div>:<div className="isNonVeg"></div>} 
       */}
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
            <p className='p-tasksubH'>{props.menuItems.itemCalories}
            </p> 
            
            </div>
            <div>
            <input className="input-quantity" type="number" value={qty} onChange={(e)=>{setQty(e.target.value)}} ></input>
            </div>
            <div className='menu-column'>
            <button style={{marginLeft:"20px"}} className="add_button" onClick={()=>{addButton()}}>Add</button>     
            </div>



            </div>

            
            
            {/* <div className='cardTitle' onClick={(e)=>{toggleDescVisibility()}} >
           
            {props.menuItems.itemIsVegetarian?<div className="isVeg"></div>:<div className="isNonVeg"></div>} 
      
        <div className='flek'>
           <p className='p-tasksubH'>{props.menuItems.mId}</p> 
      
           </div>
           <p className='p-taskTitle'>{props.menuItems.itemName}</p>
           <div className='flek'>   <p className='p-tasksubH'>$1.99</p> </div>
       
           <div className='flek'> 
    
            <p className='p-tasksubH'>{props.menuItems.itemDescription}</p> 
            </div>
       
           <p className='p-tasksubH'>{props.menuItems.itemName}</p>
       
      
             <p className='p-tasksubH'>{props.menuItems.itemCalories}</p> 
   
           
           
            </div> */}
           {/* <div className='div-taskStatus'>
           { <p ref={inputEl}  className='p-taskStatus'>{props.task.isComplete?'DONE':'PENDING'}</p>
            }
           </div> */}
{/*             
            <button className='button' onClick={(e)=>{toggleTaskStatus(props.task._id)}}> {props.task.isComplete?'Complete':'Incomplete'}</button>
           {descVisible?<p className='p-taskDescription'>{props.task.description}</p>:null} 
            <button className='button'   onClick={(e)=>{deleteItem(props.task._id)}}>Delete</button>
           <button className='button'  onClick={(e)=>{toggleVisibility()}}> EDIT</button> 
            */}


            
        </div>
   {descVisible?<div className="collapsed flex">
   <div className='menu-column'>
                <label className='p-taskTitle'>Item:</label>
                <input type="text" ></input>
            </div>
            <div className='menu-column'>
            <label className='p-taskTitle'>Description:</label>
            <input type="text" ></input>
            </div>
            <div className='menu-column'>
                <label className='p-taskTitle'>Size:</label>
                <input type="number" ></input>
            </div>
            <div className='menu-column'>
                <label className='p-taskTitle'>Price:</label>
                <input type="number" ></input>
            </div>
            <div className='menu-column'>
                <label className='p-taskTitle'>Calories:</label>
                <input type="number" ></input>
            </div>
            <div className='menu-column'>
                <label className='p-taskTitle'>Calories:</label>
                <input type="checkbox" ></input>
            </div>
            <div className='menu-column'>
                <input className="btn" type="submit" ></input>
            </div>
       
       
       </div>:null }
       </div>
    )
}