const express = require('express');
const route = express.Router();
const creditCards = require('../static-data/credit-cards');

route.get('/message', (req, res)=>{
    res.send("Good Morning!!");
});

route.get('/credit-card', (req, res)=>{
    let cc = {
        cardNumber: 896812017129,
        expiryMonth: 4,
        expiryYear: 2027,
        cvv: 234,
        holderName: 'Jalim Chakma'
    }; 
    res.json(cc);
})

route.get('/credit-cards', (req, res)=>{
    res.json(creditCards);
})

route.get('/payload', (req, res)=>{
    res.json({
        status: 200,
        message: 'Api called successfuly',
        data: {
            id: 100,
            city: 'pune'
        }
    })
})


module.exports = route;