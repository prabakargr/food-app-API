var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userModel=new Schema({
    username:String,
    email:String,
    dob:String,
    location:String
});

module.exports=mongoose.model("user",userModel);