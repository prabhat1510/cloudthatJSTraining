//import or include express module
const express = require('express');
const app =express();//create app constant variable to refer express() function
const port=3000;//variable for port
//Defining the end point or route to process or handle the request
//Below function is handle http get request
//URL-- http://localhost:3000/
app.get('/',(req,res)=>{
    res.send('Hello World !!!');
});

//URL-- http://localhost:3000/home
app.get('/home',(req,res)=>{
    res.send('Welcome to Home Page !!!');
});
/**
 * URL -- http://localhost:3000/greetings?fname=Angela&lname=M
 * ?fname=Angela&lname=M --- querystring
 * fname -- query parameters
 * lname -- query parameters
 */
//URL-- http://localhost:3000/greetings?fname=Angela&lname=M
app.get('/greetings',(req,res)=>{
    let fname = req.query.fname;
    let lname = req.query.lname;
    res.send('Hello '+fname+' '+lname);
});
/**
 * route-- /user/:id
 * :id-- referring to path variable
 */
//URL-- http://localhost:3000/user/1
app.get('/user/:id',(req,res)=>{
    let userId=req.params.id;
    //Write  a logic to retrieve data from database 
    //For example for user id 1 we need to get data from table in database
    res.send('User with id  '+userId+ ' may or may not exist');
});


app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})