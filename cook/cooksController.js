var Cook=require('./cookModel');

var bodyParser=require('body-parser')

var express=require('express');

var app=express();

var jwt    = require('jsonwebtoken');

var config = require('../config');

app.set('superSecret', config.secret);

var cookDetails = function(req, res){
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
           
            var cook=new Cook(req.body);
            console.log(cook);
            cook.save(function(err,details){
            if(!err){
               res.status(200).send('post successfully');
            }else{
                res.status(500).send('details');
        }
    })
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

// var cookDetails=function(req,res){
//     var cook=new Cook(req.body);
//   if(!req.files){
//       res.status(500).send('cannot upload');
//   }
//   let photos=req.files.photos;
// console.log(photos);
//   photos.mv('../imgs',function(err){
    //   cook.save(photos,function(err,photo){
        //   console.log(photos);
    //     let json = JSON.stringify(photos);
    //       console.log(json)
    // if(!err){
    //     res.send('json')
    // }else{
    //     res.send('err')
    // }
    //   })
      
//   })
// }


module.exports={
    cookDetails:cookDetails
}