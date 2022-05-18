const express = require('express');
const path = require('path');
const app = express();


app.get('',(req,resp)=>{
    resp.send("welcome to homepage")
});

app.set('view engine','ejs'); //Setting up ejs 

app.get('/profile',(req,resp)=>{
    // resp.send("welcome to about page")
    const user = {
        name : 'Ashutosh',
        Age : '30',
        work : 'developer'
        
    }
    resp.render('profile',{user}); //passing object to profile page where it can be resuned using ejs

});

app.listen(4600);
