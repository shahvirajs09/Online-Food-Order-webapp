//Displays each menu item in the Menu 
import react from 'react';
import './CartItem.scss';


export default function CartItem(props){
     
return(
    <div style={{display:"flex",flexDirection:"row"}}>
        <p className="p-item">{props.order.items.itemName}</p>
        <p className="p-item">x</p>
        <p className="p-item">  {props.order.qty}</p>
    </div>
   
)
}