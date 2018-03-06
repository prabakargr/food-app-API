var express=require('express');

var cooksController=require('./cooksController');

var cooksRouting=express.Router();

cooksRouting.route('/cookdetails')
  .post(cooksController.cookDetails);

module.exports=cooksRouting;