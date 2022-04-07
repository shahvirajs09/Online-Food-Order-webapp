import './OrderItem.scss';
import CartItem from '../Customer/CartItem.js'
import React, { useEffect, useRef, useState } from 'react';

export default function OrderItem (props){
    //hooks
   const [visible,setVisible]=useState(false);
   const inputEl = useRef(null);
   const [descVisible,setdescVisible]=useState(false); 
 
   const onTaskClick=(title)=>{
      //  alert(title);
    }
        /**
 * Delete Order
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


    return(
        <div className="order">
            <p className="p-order">
          Order ID : {props.orderItem.oId}
            </p>
            <p className="p-order">
           Customer :   {props.orderItem.customerName}
            </p>
            <p className="p-order">
           Items :
            </p>
            <p>
            {props.orderItem.orderItems.map(c => <CartItem  order={c} />)}
            </p>
       </div>//to
    )
}


// <div className='card' >
// <div className='visible'  >

// <div className='menu-column--small'>
// <p className='p-tasksubH'>{props.orderItem.oId}</p> 

// </div>

// <div className='menu-column'>
// <p className='p-taskTitle'>{props.orderItem.orderTime}</p>
// </div>
// <div className='menu-column'>
// <p className='p-tasksubH'>{props.orderItem.orderTotal}</p> 
// </div>

// <div className='menu-column'>
// <p className='p-tasksubH'>{props.orderItem.customerName}</p> 
// </div>

// <div className='menu-column'>
// <p className='p-tasksubH'>{props.orderItem.customerEmail}</p> 
// </div>
// <div className='menu-column'>
// <p className='p-tasksubH'>{props.orderItem.isComplete}</p> 
// </div>

// </div>



// </div>