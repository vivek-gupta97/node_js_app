/*--------Node js basics----------//
const http = require('http');
//function reqListener(req,res){

//}
//http.createServer(reqListener);
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);
server.listen(3000);
*/


//------above code using Express js--------------//

const express = require('express');

const app = express();
const path= require('path');

const adminData= require('./routes/admin');
const shopRoutes= require('./routes/shop');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

// app.use(adminRoutes);----->when routes are different
// app.use(shopRoutes);

app.use('/admin',adminData.routes);// when routesrs path start with same segment 
app.use(shopRoutes);

// app.use('/product', (req, res, next) => {});-----> it executes for both POST & GET request or method.

//app.get('/product', (req, res, next) => {});---->filter or work for get request
//app.post('/product', (req, res, next) => {});---->filter for post request

app.use('/favicon', (req, res, next) => {});

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000); 
