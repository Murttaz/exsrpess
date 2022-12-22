const express = require('express');
const app = express();
const { resolve }= require('path');

app.use(express.static(resolve('public')))

app.get('/users',(req,res)=>{
    res.json({name:'coco'})
})

app.get ('/index',(req,res)=>{
    res.sendFile(resolve('public','index.html'))
});

app.get ('/contact',(req,res)=>{
    res.sendFile(resolve('public','contact.html'))
});

app.get ('/services',(req,res)=>{
    res.sendFile(resolve('public','services.html'))
});

app.get ('*',(req,res)=>{
    res.sendFile(resolve('public','index.html'))
});
module.exports = app;