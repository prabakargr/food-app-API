var express=require('express');

var customersRouting=express.Router();

var customersController=require('./customersController');

customersRouting.route('/customerPreference').post(customersController.custPreference);


module.exports=customersRouting;