const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
//Set view engine to EJS
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//Then we have to define out routes for Home Page and About Us page

//Middleware function
const logRequest = (req,res,next)=>{
    console.log(`Received a ${req.method} request from ${req.ip}`);
    next();
};

//Use the middleware function 
app.use(logRequest);//Middleware function logRequest is applied globally means to all the requests
//Middleware function to parse the data submitted from form and makes it available to req.body
app.use(bodyParser.urlencoded({extended: false})); //urlencoded function is used to parse data submitted in a form using a POST method
app.use(bodyParser.json());//JSON function is used to parse JSON data

//Create the MySQL connection pool
const pool = mysql.createPool(
    {
        connectionLimit:10,
        host:'localhost',
        user:'root',
        password:'password',
        database: 'bankdb'
    }
);
//Create a route to handle the form submit
//http://localhost:3000/adduser
app.post('/adduser',(req,res)=>{
    //const formData = req.body;
    //console.log(formData);
    const data ={
        title:'Success Page',
        message:'Form Data Submitted successfully'

    };
    const {username,email} =req.body;
    pool.query('insert into users SET ?',{username,email},(err,results)=>{
        if(err){
            console.log(err);
            console.error('Error creating user : ',err);
            res.status(500).send('Error Creating an users');
        }else{
                     
            res.render('userformsuccess',{data});
        }
    });
});
//User form page route
app.get('/userform',(req,res)=>{
    res.render('userform');
})


//Home Page route
app.get('/home',(req,res)=>{
    res.render('index');
})
//About Page route
app.get('/about',(req,res)=>{
    res.render('about');
})

//Retrieve all users data from users table
// http://localhost:3000/users
app.get('/users',(req,res)=>{

    const data ={
        title:'Users Page',
        message:'Welcome to Users Page',
        users:[]
    };
    pool.query('SELECT * FROM users',(error,results)=>{
        if(error){
            console.log(error);
        }else if(results == null || results == ''){
            //res.status(404).json({error:"Unable to get data"});
            res.status(404);
        }
        else{
            //res.status(200).json(results);
            //console.log('***********************')
            //console.log(results[0]);
            data.users.push(results);
            //console.log(data.users);
            //console.log(data.users[0][0].username);
            res.render('users',{data});
        }
    })
});

//Route handler
app.get('/hello',(req,res)=>{
    res.send("Hello All");
})
//http://localhost:3000/users/Prabhat
app.get('/users/:name',(req,res)=>{
    res.send("Hello "+req.params.name);
})
app.listen(port,()=>{
    console.log(`Express Mysql App listening on port ${port}`);
})
