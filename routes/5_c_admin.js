const express=require('express');
const Router=express.Router();
router.use()
router.get('/add-product',(req,res,next)=>{
    console.log('In the middleware!');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')//Allows the request to continue to next middleware in line
    //next();

});
router.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
});
module.exports=router;