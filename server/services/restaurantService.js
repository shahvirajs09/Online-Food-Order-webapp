import  Restaurant from '../models/restaurant.js';

export const  getRestaurants = async()=>{ //METHOD TO GET TASKS FROM DATABASE
    const restaurants= await Restaurant.find() 
    return restaurants;
}

/**
 * 
 * @param {*} restaurant 
 * @returns 
 */
export const addRestaurant= async(restaurant)=>{ //METHOD TO POST restaurant INTO DATABASE
    try{
        const  newRestaurant = await restaurant.save()// save IS A MONGOOSE METHOD TO POST restaurant INTO DATABASE
        return newRestaurant
        
    }catch(err){
         return err;
    }
}

export const updateRestaurant=async (update,id)=>{ //METHOD TO GET UPDATE INTO DATABASE
    try
    {
        console.log(id);
        const filter={'rId':id};
        const updatedRestaurant= await Restaurant.findOneAndUpdate(filter,update,{
    upsert: true
  })//findOneAndUpdate IS A MONGOOSE METHOD TO UPDATE ITEM IN DB
return updatedRestaurant;
}
catch(err){
    console.log(err);
    return err;
}

}

export const deleteRestaurant=async(id)=>{//METHOD TO GET DELETE INTO DATABASE
    try{
        console.log(id);
        const restaurant= await Restaurant.findOneAndRemove({"rId":id}) //findOneAndRemove IS A MONGOOSE METHOD TO DELETE ITEM IN DB
    }catch(err){
        return err;
    }
 
    }


export const getRestaurantDetails=async(id)=>{
    try{
        const RestaurantDetails = await Restaurant.findOne({"rId":id});
        return RestaurantDetails;
    }
    catch(e){
        return err;
    }
}