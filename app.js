// const http = require('http');
const path=require('path');
const express = require('express');
const bodyParser=require('body-parser');
const errorController=require('./controllers/error')
const app = express();

app.set('view engine','ejs');
app.set('views','view');
const adminRoutes=require('./route/admin');
const shopRoutes=require('./route/shop');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000,()=>{
    console.log("SERVER RUNNING AT PORT 3000!!");
});