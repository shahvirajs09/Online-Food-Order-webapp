import * as restaurantService from '../services/restaurantService.js'
import Restaurant from  '../models/restaurant.js'

/**
 * get restaurants
 * @param {*} req 
 * @param {*} res 
 */
export const getRestaurants =(req,res)=>{
    const resolve = (restaurants)=>{
        res.status(200)
        res.json(restaurants)
    }
    restaurantService.getRestaurants().then(resolve)
}

/**
 * add restaurant
 * @param {*} req 
 * @param {*} res 
 */
export const addRestaurant =(req,res)=>{
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs)
    }
    const restaurant = new Restaurant({
        rId:req.body.rId,
        restaurantName: req.body.restaurantName,
        restaurantLocation :req.body.restaurantLocation,    
        restaurantStatus: req.body.restaurantStatus,
        restaurantImage: req.body.restaurantImage,
    })
    restaurantService.addRestaurant(restaurant).then(resolve)
}
/**
 * update restaunat
 * @param {*} req 
 * @param {*} res 
 */
export const updateRestaurant=(req,res)=>{
    const resolve = (updatedRestaurant)=>{
        res.status(200)
        res.json(updatedRestaurant)
    }
    
    const restaurant = {
        restaurantName: req.body.restaurantName,
        restaurantLocation :req.body.restaurantLocation,    
        restaurantStatus: req.body.restaurantStatus,
        restaurantImage: req.body.restaurantImage,
    };
    const filterByItemId =  req.params.id
 
    
    restaurantService.updateRestaurant(restaurant,filterByItemId).then(resolve)
}
/**
 * delete restarant
 * @param {*} req 
 * @param {*} res 
 */
export const deleteRestaurant=(req,res)=>{
    const restaurantId = req.params.id
   
    const resolve = (docs)=>{
        res.status(200)
        res.json({"message":"Restaurant deleted successfully"})
    }
    restaurantService.deleteRestaurant(restaurantId).then(resolve)
}
/**
 * get restaurant by id
 * @param {*} req 
 * @param {*} res 
 */
export const getRestaurantDetails=(req,res)=>{
    const restaurantId=req.params.id;

    const resolve = (docs)=>{
        res.status(200)
        res.json(docs);
    }
    restaurantService.getRestaurantDetails(restaurantId).then(resolve)
}
 