const express=require('express');
const leaderRouter=express.Router();

leaderRouter.get('/',(req,res)=>{
    
    res.json({
        message:'Welcome to LeaderRouter.This will display all the data'
    });

}).post('/',(req,res)=>{
    
    res.json({
        
        message:'Welcome to LeaderRouter.This will add the data'
    });
}).delete('/',(req,res)=>{
    
    res.json({
        message:'Welcome to LeaderRouter.This will delete the data'
    });
})

leaderRouter.get('/:leaderId',(req,res)=>{
    
    res.json({
        leaderId:req.params.leaderId,
        leaderName:'leaderName'
    });
}).delete('/:leaderId',(req,res)=>{
    res.json({
        leaderId:req.params.leaderId,
        leaderName:'leaderName',
        message:'Delete Leader'
    });
}).put('/:leaderId',(req,res)=>{
    res.json({
        leaderId:req.params.leaderId,
        leaderName:'leaderName',
        message:'Update Leader'
    });
})
module.exports=leaderRouter;