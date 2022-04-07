import  MenuItem from '../models/menuItem.js';
import mongoose from 'mongoose';

/**
 * connect to db
 */
const db=mongoose.connection;

/**
 * Get all menu items
 * @param {*} rId 
 * @returns 
 */
export const  getMenuItems = async(rId)=>{ //METHOD TO GET TASKS FROM DATABASE
    try {
        const restaurant = await db.collection('restaurants').findOne({"rId":rId});
        const menu=restaurant.menu;
        let e=[];
        menu.forEach(element=>{
           e.push(element);
        });
        return e;
         
    } catch (error) {
        console.log(error);
        return err;
    }


}


/**
 * Test description
 * @param {MenuItem} menuItem 
 * @returns 
 */
export const addnewItem= async(menuItem,rId)=>{ //METHOD TO POST TASKS INTO DATABASE
    try{
        const filter={"rId":rId};
        const update={ $push: { menu: menuItem } };
        const restaurant=await db.collection('restaurants').findOneAndUpdate(filter, update, {
            new: true
          });
      
        
        return restaurant;
       
    }catch(err){
        console.log(err);
        return err;

    }
}

/**
 * Update Item
 * @param {*} update 
 * @param {*} id 
 * @returns 
 */
export const updateItem=async (update,id)=>{ //METHOD TO GET UPDATE INTO DATABASE
    try
    {
        const filterMenu={"menu._id":"61a71eea3bf03a749ad82751"};
        const restaurant= await db.collection('restaurants').findOneAndUpdate({"rId":update.rId,"menu.mId":id}
        ,{
        $set:{
            "menu.$.itemName":update.itemName,
            "menu.$.itemPrice":update.itemPrice,
            "menu.$.itemDescription":update.itemDescription,
            "menu.$.itemImage":update.itemImage,
            "menu.$.itemIsVegetarian":update.itemIsVegetarian,
            "menu.$.itemPortionSize":update.itemPortionSize,
            "menu.$.itemCalories":update.itemCalories,
        }
    }
        ,{new:true});

return restaurant;
}
catch(err){console.log(err);
    return err;
}

}

/**
 * Delete item
 * @param {*} id 
 * @param {*} rId 
 * @returns 
 */
export const deleteItem=async(id,rId)=>{ 
    try{ 
        const restaurant= await db.collection('restaurants').findOneAndUpdate({"rId":rId,"menu.mId":id}
        ,
            { $pull: { menu: { mId: id } } }
        ,{new:true});


        return restaurant;
        
       // const menu= await MenuItem.MenuItem.findOneAndRemove(id) //findOneAndRemove IS A MONGOOSE METHOD TO DELETE ITEM IN DB
    }catch(err){
        console.log(err);
return err;
    }
 
    }

    /**
     * Get item by id
     * @param {*} id 
     * @param {*} rId 
     * @returns 
     */
    export const getMenuItemDetails=async(id,rId)=>{
        try{
            const restaurant = await db.collection('restaurants').findOne({"rId":rId});
            const menu=restaurant.menu;
            let e={};
            menu.forEach(element=>{
                if(element.mId===id){
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