import React from 'react';
import './Order.scss';
import OrderItem from './OrderItem';

export default class Menu extends React.Component {
    
    render() {

     
        const orders=this.props.orderItems
        .map((c,i)=>
        <OrderItem key={i} orderItem={c}>{c}</OrderItem>); 
        return (
            <div >
            
 
             <div className="grid">{orders} </div>
            </div>
                

        )
    }
}
