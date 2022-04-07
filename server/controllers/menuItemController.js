import * as menuItemService from '../services/menuItemService.js'
import MenuItem from  '../models/menuItem.js'

/**
 * get all items
 * @param {*} req 
 * @param {*} res 
 */
export const getMenuItems =(req,res)=>{
    const rId=req.query.rId;
    const resolve = (tasks)=>{
        res.status(200)
        res.json(tasks)
    }
    menuItemService.getMenuItems(rId).then(resolve)
}
/**
 * add item
 * @param {*} req 
 * @param {*} res 
 */
export const addMenuItem =(req,res)=>{
    const resolve = (newTask)=>{
        res.status(200)
        res.json(newTask)
    }
    const rId=req.body.rId;
    const item = new MenuItem({
        mId: req.body.mId,
        itemName :req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemDescription: req.body.itemDescription,
        itemImage:req.body.itemImage,
        itemIsVegetarian:req.body.itemIsVegetarian,
        itemPortionSize: req.body.itemPortionSize,
        itemCalories: req.body.itemCalories
    })
    menuItemService.addnewItem(item,rId).then(resolve)
}

/**
 * update item
 * @param {*} req 
 * @param {*} res 
 */
export const updateMenuItem=(req,res)=>{
    const resolve = (updatedTask)=>{
        res.status(200)
        res.json(updatedTask)
    }
    
    const filterByItemId = req.body.mId;

    const update={
        rId:req.body.rId,
        itemName :req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemDescription: req.body.itemDescription,
        itemImage:req.body.itemImage,
        itemIsVegetarian:req.body.itemIsVegetarian,
        itemPortionSize: req.body.itemPortionSize,
        itemCalories: req.body.itemCalories
    }
console.log("update"+update);
    menuItemService.updateItem(update,filterByItemId).then(resolve)
}

/**
 * delete menu item
 * @param {*} req 
 * @param {*} res 
 */
export const deleteMenuItem=(req,res)=>{
    const deleteByItemId = req.params.id;
    const rId= req.params.rId;
    const resolve = (docs)=>{
        res.status(200);
        res.json({docs});
    }
    menuItemService.deleteItem(deleteByItemId,rId).then(resolve)
}
/**
 * get details by id
 * @param {*} req 
 * @param {*} res 
 */
export const getMenuItemDetails=(req,res)=>{
    const rId=req.params.rId;
    const id=req.params.id;
    const resolve = (docs)=>{
        res.status(200);
        res.json({docs});
    }
    menuItemService.getMenuItemDetails(id,rId).then(resolve)
}