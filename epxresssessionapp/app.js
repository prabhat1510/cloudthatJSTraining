const express = require('express');
const session = require('express-session');

const port= 3000;
const app=express();
//Middleware session -- express-session is configured below
app.use(session({
    secret : 'TGIF',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));


//Set and Read session data in our application
//Set
app.get('/set-session',(req,res)=>{
    req.session.username = 'john';
    res.send('Session data has been set');
});


//Get
app.get('/get-session',(req,res)=>{
    const username = req.session.username;
    res.send(`The value of username session variable is ${username}`);
});



app.listen(port,()=>{
    console.log(`Express Mysql App listening on port ${port}`);
})