import  LeftOverItem from '../models/leftoverItem.js';
import mongoose from 'mongoose';

/**
 * Connect to db
 */
const db=mongoose.connection;

/**
 * Get lefftover items
 * @returns 
 */
export const  getLeftoverItems = async()=>{ //METHOD TO GET TASKS FROM DATABASE
    try {
        const leftOverDetails = await db.collection('restaurants').findOne({"restaurantName":"PR"});
        const menu=leftOverDetails.leftover;
        let e=[];
        menu.forEach(element=>{
           e.push(element);
        });
        return e;
         
    } catch (error) {
        
    }
}

/**
 * Test description
 * @param {MenuItem} menuItem 
 * @returns 
 */
export const addLeftover= async(leftoverItem,rId)=>{ //METHOD TO POST Leftover INTO DATABASE
    try{
        const filter={"rId":rId};
console.log(leftoverItem.lId);
        const update={ $push: { leftover: leftoverItem } };
        const restaurant=await db.collection('restaurants').findOneAndUpdate(filter, update, {
            new: true
          });
       // console.log(restaurant);
        
        return restaurant;

        //res.status(201).json(newTask)
    }catch(err){
        console.log(err);return err;
    }
}
/**
 * Update item
 * @param {*} update 
 * @param {*} rId 
 * @returns 
 */
export const updateLeftover=async (update,rId)=>{ //METHOD TO GET UPDATE INTO DATABASE
    try
    {
        const filter={"rId":rId};
        const restaurant= await db.collection('restaurants').findOneAndUpdate({"rId":rId,"leftover.lId":update.lId}
        ,{
        $set:{
            "leftover.$.items":update.items,
            "leftover.$.postedTime":update.postedTime,
            "leftover.$.quantity":update.quantity,
            "leftover.$.reducedPrice":update.reducedPrice,
          
        }
    }
        ,{new:true});

return restaurant;
}
catch(err){
console.log(err);
    return err;
}

}
/**
 * delete item
 * @param {*} id 
 * @param {*} rId 
 * @returns 
 */
export const deleteLeftover=async(id,rId)=>{//METHOD TO GET DELETE INTO DATABASE
    try{
        const restaurant= await db.collection('restaurants').findOneAndUpdate({"rId":rId,"leftover.lId":id}
        ,
            { $pull: { leftover: { lId: id } } }
        ,{new:true});


        return restaurant;
       
    }catch(err){
        return err;
    }
 
    }

/**
 * Get item by id
 * @param {*} id 
 * @returns 
 */
export const getLeftoverDetails=async(id)=>{
    try{
        const leftOverDetails = await db.collection('restaurants').findOne({"restaurantName":"PR"});
        const menu=leftOverDetails.leftover;
        let e={};
        menu.forEach(element=>{
            console.log(""+element.lId+""+id);
            if(element.lId===id){
                console.log(element);
                    e=element;
                  
            }
        });
        return e;
         
    }
    catch(e){
        console.log(e);
return e;
    }
}