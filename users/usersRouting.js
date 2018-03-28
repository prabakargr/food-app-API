var express=require('express');

var usersController=require('./usersController');

var usersRouting=express.Router();


usersRouting.route('/registerUser')
   .post(usersController.registerUser);

usersRouting.route('/login')
   .post(usersController.loginUser);


   
module.exports=usersRouting;