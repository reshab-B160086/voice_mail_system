
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mong = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var session = require('express-session');
var path = require('path');
const db = require('./db');
const fs = require('fs')

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(express.static(__dirname + '/public'));

app.get('/home',(req,res)=>{
    res.render('index')
})

app.get('/inbox',(req,res)=>{
    var I = 0     
    db.get().collection('inbox').find({username:"manish"}).toArray((err,result)=>{
        if (err) throw err;
        res.render("inbox",{details:result,i:I})
    }) 
    
})

app.get('/sentmail',(req,res)=>{
    res.render('sentmail');
})

app.get('/important',(req,res)=>{
    res.render('important');
})

app.get('/folders',(req,res)=>{
    res.render('folders');
})


db.connect(() =>{
app.listen(3000,() => {
    console.log('listening port 3000');
});
});