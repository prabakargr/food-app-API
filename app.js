var express=require('express');

var mongoose=require('mongoose');

var bodyParser=require('body-parser');

var db=mongoose.connect("mongodb://food:app@ds251598.mlab.com:51598/foodapp");

var usersRouting=require('./users/usersRouting');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/users',usersRouting);

var port=process.env.PORT || 9000;

app.listen(port, () => console.log(`Running on localhost:9000`));
