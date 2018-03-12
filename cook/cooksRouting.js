var express=require('express');

var cooksController=require('./cooksController');
// var multer  = require('multer')
// var upload = multer({ dest: '../imgs/uploads/' })


var cooksRouting=express.Router();

cooksRouting.route('/cookdetails')
  .post(cooksController.cookDetails);

// cooksRouting.route('/picupload')
//    .post(upload.single('filet'),function(req,res,next){
//      res.send({"s":"s"});
//      console.log(req.file);
//    })  

module.exports=cooksRouting;