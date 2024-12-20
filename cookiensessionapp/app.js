const express = require('express');
const cookieParser =require("cookie-parser");
const session= require("express-session");


const app = express();

app.use(cookieParser());
app.use(session(
    {
        secret:'ABCDEF',
        resave: true,
        saveUninitialized:true
    }));

app.get('/',(req,res)=>{
 let count = req.session.count || 0;
 res.cookie('username','bill');
 req.session.count=++count;
 res.send(`Hello ${req.cookies.username}, you have visited this page ${count} times `);
})


app.listen(3000,()=>{
    console.log('Server started on port 3000');
})