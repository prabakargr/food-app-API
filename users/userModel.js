var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userModel=new Schema({
    username:String,
    emailid:String,
    password:String
});

module.exports=mongoose.model("user",userModel);