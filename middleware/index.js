const express = require('express');
const app = express();
const creditCards = require('./static-data/credit-cards');

app.get('/message', (req, res)=>{
    res.send("Good Morning!!");
});

app.get('/credit-card', (req, res)=>{
    let cc = {
        cardNumber: 896812017129,
        expiryMonth: 4,
        expiryYear: 2027,
        cvv: 234,
        holderName: 'Jalim Chakma'
    }; 
    res.json(cc);
})

app.get('/credit-cards', (req, res)=>{
    res.json(creditCards);
})

app.get('/payload', (req, res)=>{
    res.json({
        status: 200,
        message: 'Api called successfuly',
        data: {
            id: 100,
            city: 'pune'
        }
    })
})

// the below method creates a server with base URL: http://localhost:4000
app.listen(4000, ()=>{
    console.log('The Express JS application is running on port 4000');
})