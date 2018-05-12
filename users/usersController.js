var User=require('./userModel');

var express=require('express');

var app=express();

var morgan      = require('morgan');

var jwt    = require('jsonwebtoken');

var config = require('../config');

app.set('superSecret', config.secret);

//register user


var registerUser = function(req, res){
  var token = req.headers['auth-token'];

  if (token) {

      // verifies secret and checks exp
      jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          // if everything is good, save to request for use in other routes
          // req.decoded = decoded;    
          // next();
         
          var user=new User(req.body);
    user.save(function(err,user){
        console.log(user);
        if(!err){
            res.status(200).send(user);
        }else{
            res.status(500).send('connot register');
        }
    });
        }
      });
  
    } else {
  
      // if there is no token
      // return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });


  };
  
}

// var registerUser=function(req,res){
//     var user=new User(req.body);
//     user.save(function(err,user){
//         console.log(user);
//         if(!err){
//             res.status(200).send(user);
//         }else{
//             res.status(500).send('connot register');
//         }
//     });
// };

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
        user:user

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