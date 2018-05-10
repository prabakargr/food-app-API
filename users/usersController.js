var User=require('./userModel');

var express=require('express');

var app=express();

var morgan      = require('morgan');

var jwt    = require('jsonwebtoken');

var config = require('../config');

app.set('superSecret', config.secret);

//register user

var registerUser=function(req,res){
    var user=new User(req.body);
    user.save(function(err,user){
        console.log(user);
        if(!err){
            res.status(200).send(user);
        }else{
            res.status(500).send('connot register');
        }
    });
};

//login and get the user object

// var loginUser=function(req,res){
//     var loginDetails={
//         emailid:req.body.emailid,
//         password:req.body.password
//     }
// User.find(loginDetails,function(err,user){
//     if(err){
//         res.status(404).send('cannot match');
//     }else{
//         res.status(200).send(user);
//     }
// })

// }
var loginUser=function(req, res) {

    // find the user
    User.findOne({
      emailid: req.body.emailid
    }, function(err, user) {
  
      if (err) throw err;
  
      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
  
        // check if password matches
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {
  
          // if user is found and password is right
          // create a token with only our given payload
      // we don't want to pass in the entire user since that has the password
      const payload = {
        admin: user.admin 
      };
          var token = jwt.sign(payload, app.get('superSecret'), {
            // expiresInMinutes: 1440 // expires in 24 hours
          });
  
          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }   
  
      }
  
    });
  }

module.exports={
    registerUser:registerUser,
    loginUser:loginUser
}