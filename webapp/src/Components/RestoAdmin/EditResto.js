import react from 'react';
import { useState } from 'react';
//Editing Restaurant Infotmation and performing an Update operation through API
export default function EditResto(props){

    const [restoName,setRestoName]=useState(props.restaurant.restaurantName);

    const [restoLocation,setrestoLocation]=useState(props.restaurant.restaurantLocation);
  const  onClick=()=>{
    const uri='http://localhost:7000/restaurants/update/'+props.restaurant.rId;
    const update={
        "restaurantName": restoName,
        "restaurantLocation":restoLocation,
        "restaurantStatus":true,
        "restaurantImage":"aa"
    };
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(update)
    };
    fetch(uri, requestOptions)
        .then(response => response.json()).then(alert("success"));
   
    }
    return(
        <div>
            <p className='p-taskStatus-1'>Restaurant Name</p>
                 <input  className='input-text' type="text" value={restoName} onChange={(e)=>{setRestoName(e.target.value)} } />
       
                 <p className='p-taskStatus-1'>Restaurant Location</p>
                 <input  className='input-text' type="text" value={restoLocation} onChange={(e)=>{setrestoLocation(e.target.value)} } />
        <button onClick={()=>{onClick()}} >Submit</button>
        </div>
    )
}