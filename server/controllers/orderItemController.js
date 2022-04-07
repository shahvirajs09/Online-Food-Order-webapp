import * as OrderService from '../services/orderService.js'
import Order from  '../models/order.js'

/**
 * get all orders
 * @param {*} req 
 * @param {*} res 
 */
export const getOrders =(req,res)=>{
    const resolve = (tasks)=>{
        res.status(200)
        res.json(tasks)
    }
    OrderService.getOrders().then(resolve)
}

/**
 * add all orders
 * @param {*} req 
 * @param {*} res 
 */
export const addOrder =(req,res)=>{
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs)
    }
    const rId=req.params.rId;
    const order = new Order({
        oId: req.body.oId,
        orderItems :req.body.orderItems,    
        orderTime: req.body.orderTime,
        orderTotal: req.body.orderTotal,
        customerName:req.body.customerName,
        customerContactNo:req.body.customerContactNo,
        customerEmail: req.body.customerEmail,
        isComplete: req.body.isComplete
    })
    OrderService.addOrder(order,rId).then(resolve)
}

/**
 * update all orders
 * @param {*} req 
 * @param {*} res 
 */
export const updateOrder=(req,res)=>{
    const resolve = (updatedOrder)=>{
        res.status(200)
        res.json(updatedOrder)
    }
    var orderItems=req.body;
    
    const filterByItemId = req.body.oId;
   
    OrderService.updateOrder(orderItems,filterByItemId).then(resolve)
}

/**
 * delete order
 * @param {*} req 
 * @param {*} res 
 */
export const deleteOrder=(req,res)=>{
    const orderId = req.params.id
   
    const resolve = (docs)=>{
        res.status(200)
        res.json({"message":"Order deleted successfully"})
    }
    OrderService.deleteOrder(orderId).then(resolve)
}

/**
 * get details by id
 * @param {*} req 
 * @param {*} res 
 */
export const getOrderDetails=(req,res)=>{
    const orderId=req.params.id;

    const resolve = (docs)=>{
        res.status(200)
        res.json(docs);
    }
    OrderService.getOrderDetails(orderId).then(resolve)
}
/**
 * update order status
 * @param {*} req 
 * @param {*} res 
 */
export const updateOrderStatus=(req,res)=>{
    const resolve = (updatedOrder)=>{
        res.status(200)
        res.json(updatedOrder)
    }
    const filterByItemId = req.body.oId;
    const isComplete=req.body.isComplete;

    OrderService.updateOrderStatus(isComplete,filterByItemId).then(resolve)
}