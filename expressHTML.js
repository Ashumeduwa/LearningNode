const express = require('express');
const app = express();

const reqFilter =(req,resp,next)=>{
    if(!req.query.age){ //checking if parameter is blank
        resp.send('Query should not be blank'); //This will be printed
    }

    else if(req.query.age<20){
        resp.send('You cant access this page'); //This will be printed if age is less than 20
    }
    else{
        next(); //if nothing works, it will pass to next 
    }
    
}
app.use (reqFilter); //Calling our custom function here

app.get('/',(req,resp)=>{
resp.send('Welcome to homespage');
})
app.listen(4500);
