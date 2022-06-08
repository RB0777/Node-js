// const path=require('path');
// const express =require('express');
// const router=express.Router();
// router.get('/',(req,res,next)=>{
//     // res.sendFile('./html_views/5_e_shop.html'); wrong way
//     res.sendFile(path.join(__dirname,'/..','html_views','5_e_shop.html'));
//     // console.log('In the another middleware!');
//     // res.send('<h1> Hello from Express!</h1>')
    
// });
// module.exports=router;
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop');
});

module.exports = router;
