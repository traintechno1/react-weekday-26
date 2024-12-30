const express = require('express');
const app = express();
const StaticRoute = require('./routes/static');
const CarRoute = require('./routes/cars');
const bodyParser = require('body-parser');

// middleware
app.use(bodyParser.json());
app.use('', StaticRoute);
app.use('/cars', CarRoute);

// the below method creates a server with base URL: http://localhost:4000
app.listen(4000, ()=>{
    console.log('The Express JS application is running on port 4000');
})