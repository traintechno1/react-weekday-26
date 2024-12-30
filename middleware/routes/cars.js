const express = require('express');
const route = express.Router();

// this will give me all the cars
route.get('', (req, res)=>{
    res.json({
        message: 'Get Cars API is called'
    })
})

// this will give me specific car by ID
route.get('/:id', (req, res)=>{
    const reqId = req.params.id; 
    res.json({
        message: `Get Car by id API is called with id ${reqId}`
    })
})

// To add new car
route.post('', (req, res)=>{
    const data = req.body;
    res.json({
        message: 'Post API called',
        data: data
    })
})

// To Delete a car
route.delete('/:id', (req, res)=>{
    const id = req.params.id;
    res.json({
        message: `Delete Car by id API is called with id ${id}`
    })
})

// To Update a car
route.put('/:id', (req,res)=>{
    const id = req.params.id;
    const body = req.body;
    res.json({
        message: `Update req with id ${id}`,
        body: body
    })
})



module.exports = route;