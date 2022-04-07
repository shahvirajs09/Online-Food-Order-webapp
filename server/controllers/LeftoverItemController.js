import * as leftOverItemService from '../services/leftoverItemService.js'
import LeftOverItem from  '../models/leftoverItem.js'

/**
 * Get leftover items
 * @param {*} req 
 * @param {*} res 
 */
export const getLeftoverItems =(req,res)=>{
    console.log('TEST');

    const resolve = (tasks)=>{
        res.status(200)
        res.json(tasks)
    }

    const reject = (err) => {
        res.sendStatus(400);
    }
    leftOverItemService.getLeftoverItems().then(resolve).catch(reject)
}

/**
 * add leftover item
 * @param {*} req 
 * @param {*} res 
 */
export const addLeftover =(req,res)=>{
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs)
    }
    const rId=req.body.rId;
    console.log(req.body.items);
    const leftover = new LeftOverItem({
        
        lId:req.body.lId,
        items: req.body.items,
        postedTime :req.body.postedTime,    
        quantity: req.body.quantity,
        reducedPrice: req.body.reducedPrice,
    })
    leftOverItemService.addLeftover(leftover,rId).then(resolve)
}

/**
 * Update leftover
 * @param {*} req 
 * @param {*} res 
 */
export const updateLeftover=(req,res)=>{
    const resolve = (updatedOrder)=>{
        res.status(200)
        res.json(updatedOrder)
    }
  
    const leftover = new LeftOverItem({
        
        lId:req.body.lId,
        items: req.body.items,
        postedTime :req.body.postedTime,    
        quantity: req.body.quantity,
        reducedPrice: req.body.reducedPrice,
    })
    
    const filterByItemId = req.body.rId;
 
    
    leftOverItemService.updateLeftover(leftover,filterByItemId).then(resolve)
}

/**
 * delete leftover
 * @param {*} req 
 * @param {*} res 
 */
export const deleteLeftover=(req,res)=>{
    const leftoverId = req.params.id;
    const rId= req.params.rId;
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs);
    }
    leftOverItemService.deleteLeftover(leftoverId,rId).then(resolve)
}

/**
 * get details by id
 * @param {*} req 
 * @param {*} res 
 */
export const getLeftoverDetails=(req,res)=>{
    const leftoverId=req.params.id;

    const resolve = (docs)=>{
        res.status(200)
        res.json(docs);
    }
    leftOverItemService.getLeftoverDetails(leftoverId).then(resolve)
}
 