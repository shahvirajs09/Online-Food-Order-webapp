import React from 'react';
//import { restaurantData} from '../../LandingPage/LandingPage';
import './Card.scss'    

const Card=(props)=>
{
    const onClick=()=>{
        
        props.onClick(props.restaurantData);  //passing restaurant Data to landing page
        
        }
    return (
        <div className="card-res">
            <div style={{display:"flex",flexDirection:"row"}}>
            <div className="card_image">
                    <img className="card_img_res" src={props.restaurantData.restaurantImage}></img>

           </div>
           <div style={{marginTop:"10px"}}>
           <div className="card_body_res">{props.restaurantData.restaurantName}</div>
           <div className="card_title_res">{props.restaurantData.restaurantLocation} </div>
        
            </div>
            
            </div>
           
           <br/>
              
           <div className="card_button_res">
           <button onClick={()=>{onClick()}} className="order_button_res" >Order</button> 
           </div>
        </div>
    )
}

export default Card;
// onClick. passed as a prop to this method