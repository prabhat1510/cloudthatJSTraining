const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const fs = require("fs");//to read a data from a file
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors);
//Parse the requests of content-type 'application/json'
app.use(bodyParser.json());
//express js middleware function static 
app.use(express.static('assets'));

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
//Retrieve all users data from users table
// http://localhost:3000/users
app.get('/users',(req,res)=>{
    pool.query('SELECT * FROM users',(error,results)=>{
        if(error){
            console.log(error);
        }else if(results == null || results == ''){
            res.status(404).json({error:"Unable to get data"});
        }
        else{
            res.status(200).json(results);
        }
    })
});

//POST - Create an user
//http://localhost:3000/adduser
app.post('/adduser',(req,res)=>{
    const {username,email} =req.body;
    pool.query('insert into users SET ?',{username,email},(err,results)=>{
        if(err){
            console.log(err);
            console.error('Error creating user : ',err);
            res.status(500).send('Error Creating an users');
        }else{
            res.send(results);
        }
    });
});

//PUT - Update an existing user
//http://localhost:3000/updateuser/1
app.put('/updateuser/:id',(req,res)=>{
    const userid = req.params.id;
    const {username,email} =req.body;
    pool.query("update users SET username = ?,email = ? where userid = ?",[username,email,userid],(err,results)=>{
        if(err){
            console.log(err);
            console.error('Error updating user : ',err);
            res.status(500).send('Error updating an users');
        }else{
            res.send(results);
        }
    });
});

//Delete - delete an existing user
//http://localhost:3000/deleteuser/4
app.delete('/deleteuser/:id',(req,res)=>{
    const userid = req.params.id;
   
    pool.query("delete from users where userid = ?",userid,(err,results)=>{
        if(err){
            console.log(err);
            console.error('Error deleteing user : ',err);
            res.status(500).send('Error deleting an users');
        }else{
            res.send(results);
        }
    });
});

//Get an specify user by id 
//http://localhost:3000/user/2
app.get('/user/:id',(req,res)=>{
    const userid = req.params.id;
   
    pool.query("select * from users where userid = ?",userid,(err,results)=>{
        if(err){
            console.log(err);
            console.error('Error getting user : ',err);
            res.status(500).send('Error getting an user with user id '+userid);
        }else{
            res.send(results);
        }
    });
});

//Get an specify user by byname 
//http://localhost:3000/userbyname
app.get('/userbyname',(req,res)=>{
    const {username} = req.body;
   
    pool.query("select * from users where username = ?",username,(err,results)=>{
        if(err){
            console.log(err);
            console.error('Error getting user : ',err);
            res.status(500).send('Error getting an user with user name '+username);
        }else{
            res.send(results);
        }
    });
});

//Get an specify user by byname 
//http://localhost:3000/userbyemail?email=bob@martini.com
app.get('/userbyemail',(req,res)=>{
    const email = req.query.email;
   
    pool.query("select * from users where email = ?",email,(err,results)=>{
        if(err){
            console.log(err);
            console.error('Error getting user : ',err);
            res.status(500).send('Error getting an user with user email '+email);
        }else{
            res.send(results);
        }
    });
});
//Read data from json
//http://localhost:3000/usersfromjson
app.get('/usersfromjson',(req,res)=>{
    //Logic to read the JSON data from a customer.json
    //Read json file using fs module readFile method
    fs.readFile("D:\\cloudthatJSTraining\\day8_other\\users.json",function(err,data){
        if(err){
            throw err;
        }else{
            console.log(data);
            res.send(data);
        }


    });
});
//Get an image with full name
//http://localhost:3000/image/pushpa2.jpg
app.get('/image/:name',(req,res)=>{
    const imageFileName = req.params.name;
    res.sendFile(path.join(__dirname, 'assets', imageFileName));
    res.status(200);
});

//To get an pdf file
//Get -- Basic Spring 5.0 - Lesson 01- Introduction.pdf
//http://localhost:3000/lesson01
app.get('/lesson01',(req,res)=>{
    res.sendFile(path.join(__dirname,'assets',"Basic Spring 5.0 - Lesson 01- Introduction.pdf"));
    res.status(200);
});

app.listen(port,()=>{
    console.log(`Express Mysql App listening on port ${port}`);
})