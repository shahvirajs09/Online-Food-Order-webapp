import * as userService from '../services/userService.js'
import User from  '../models/user.js'
/**
 * get all users
 * @param {*} req 
 * @param {*} res 
 */
export const getUsers =(req,res)=>{
    const resolve = (tasks)=>{
        res.status(200)
        res.json(tasks)
    }
    userService.getUsers().then(resolve)
}
/**
 * add users
 * @param {*} req 
 * @param {*} res 
 */
export const addUser =(req,res)=>{
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs)
    }
    const user = new User({
        uId:req.body.uId,
        userName: req.body.userName,
        userAlias :req.body.userAlias,    
        userPassword: req.body.userPassword, 
        userType:req.body.userType,
    });

    userService.addUser(user).then(resolve)
}
/**
 * update users
 * @param {*} req 
 * @param {*} res 
 */
export const updateUser=(req,res)=>{
    const resolve = (updatedOrder)=>{
        res.status(200)
        res.json(updatedOrder)
    }
    var user=req.body;
  
    const filterByItemId = {id:req.body.uId}
 
    
    userService.updateUser(user,filterByItemId).then(resolve)
}
/**
 * delte user
 * @param {*} req 
 * @param {*} res 
 */
export const deleteUser=(req,res)=>{
    
    const userId = req.params.id;
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs);
    }
    userService.deleteUser(userId).then(resolve)
}
/**
 * get id
 * @param {*} req 
 * @param {*} res 
 */
export const getUserDetails=(req,res)=>{
  
    const userName=req.params.userName;
    const userPassword=req.params.userPassword;
    
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs);
    }
    userService.getUserDetails(userName,userPassword).then(resolve)
}
 