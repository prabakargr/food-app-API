var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userModel=new Schema({
    name:String,
    email:String,
    pass:String,
    dob:String,
    location:String
});

module.exports=mongoose.model("user",userModel);