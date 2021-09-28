const express=require('express');
const dishRouter = require('./dishRouter');
const leaderRouter = require('./leaderRouter');
const promoRouter = require('./promoRouter');
const app=express();

app.use('/dishes',dishRouter);
app.use('/leaders',leaderRouter);
app.use('/promotions',promoRouter);
app.use('*',(req,res)=>{
    res.status(404).send('Page Not Found');
});
app.listen(3000);