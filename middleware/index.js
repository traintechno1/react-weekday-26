const express = require('express');
const app = express();

app.get('/getMessage', (req, res)=>{
    res.send("Good Morning!!");
})

// the below method creates a server with base URL: http://localhost:4000
app.listen(4000, ()=>{
    console.log('The Express JS application is running on port 4000');
})