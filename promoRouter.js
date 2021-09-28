const express=require('express');
const promoRouter=express.Router();

promoRouter.get('/',(req,res)=>{
    
    res.json({
        message:'Welcome to PromoRouter.This will display all the data'
    });

}).post('/',(req,res)=>{
    
    res.json({
        
        message:'Welcome to PromoRouter.This will add the data'
    });
}).delete('/',(req,res)=>{
    
    res.json({
        message:'Welcome to PromoRouter.This will delete the data'
    });
})

promoRouter.get('/:promoId',(req,res)=>{
    
    res.json({
        promoId:req.params.promoId,
        promoName:'promoName'
    });
}).delete('/:promoId',(req,res)=>{
    res.json({
        promoId:req.params.promoId,
        promoName:'promoName',
        message:'Delete Promo'
    });
}).put('/:promoId',(req,res)=>{
    res.json({
        promoId:req.params.promoId,
        promoName:'promoName',
        message:'Update Promo'
    });
})
module.exports=promoRouter;