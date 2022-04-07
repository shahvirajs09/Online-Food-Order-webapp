//Displaying past orders on User Dashboard
import React from 'react'; 
import './UserDashboard.scss';

export default function PastOrder(props){

  const items=
  props.orderItems.forEach(
    element =>
    <li>{element.items}</li>
  )
    return(
        <div>
        <h1 className="p-title-dash textCenter">Welcome Abhishek!</h1>  
        <div className="cardOrder">
          <div className='visible'> 
            <p className='p-taskTitle menu-column'>Restaurant Name:</p> 
            <p className='p-tasksubTitle menu-column'>{props.userOrders.oId}</p>
          </div>
          <div className='visible'>
            <p className='p-taskTitle menu-column'>Order ID:</p> 
            <p className='p-tasksubTitle menu-column'>{props.userOrders.oId}</p>
          </div>
          <div className='visible'>
            <p className='p-taskTitle menu-column'>Items:</p> 
            <p className='p-tasksubTitle menu-column'>
              
              <ul className='bullets'>
              {items}
              </ul>
            </p>
          </div>
          <div className='visible '>
            <p className='p-taskTitle menu-column'>Order Total:</p> 
            <p className='p-tasksubTitle menu-column'>{props.userOrders.orderTotal}</p>
          </div>
          <div className='visible'>
            <p className='p-taskTitle menu-column'>Time:</p> 
            <p className='p-tasksubTitle menu-column'>{props.userOrders.orderTime}</p>
          </div>
          <div className='visible'>
            <p className='p-taskTitle menu-column'>Paid?</p> 
            <p className='p-tasksubTitle menu-column'>{props.userOrders.isComplete}</p>
          </div>
        </div>
  
       
        </div>
    );
}