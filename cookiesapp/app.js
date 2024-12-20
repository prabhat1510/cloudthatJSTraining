const express = require('express');
const cookieParser = require('cookie-parser');

const port= 3000;
const app=express();
//Middleware cookie parser
app.use(cookieParser());

//Start using set and reading the cookies data
//seeting cookies
app.get('/set-cookie',(req,res)=>{
    res.cookie('username','john');
    res.cookie('password','1234');
    res.send('Cookie has been set');
});

//reading cookies
app.get('/get-cookie',(req,res)=>{
    const username = req.cookies.username;
    const password = req.cookies.password;
    //res.send('The value of username cookie is '+username);
    res.send(`The value of username cookie is ${username} - ${password}`);
});

app.listen(port,()=>{
    console.log(`Express Mysql App listening on port ${port}`);
})