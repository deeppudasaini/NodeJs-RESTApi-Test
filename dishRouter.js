const express=require('express');
const dishRouter=express.Router();

dishRouter.get('/',(req,res)=>{
    
    res.json({
        message:'Welcome to DishRouter.This will display all the data'
    });

}).post('/',(req,res)=>{
    
    res.json({
        
        message:'Welcome to DishRouter.This will add the data'
    });
}).delete('/',(req,res)=>{
    
    res.json({
        message:'Welcome to DishRouter.This will delete the data'
    });
})

dishRouter.get('/:dishId',(req,res)=>{
    
    res.json({
        dishId:req.params.dishId,
        dishName:'dishName'
    });
}).delete('/:dishId',(req,res)=>{
    res.json({
        dishId:req.params.dishId,
        dishName:'dishName',
        message:'Delete Dish'
    });
}).put('/:dishId',(req,res)=>{
    res.json({
        dishId:req.params.dishId,
        dishName:'dishName',
        message:'Update Dish'
    });
})
module.exports=dishRouter;