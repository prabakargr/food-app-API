var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var cookModel=new Schema({
   experiance:String,
   dayjob:String,
   post:String,
   contactno:Number 
});

module.exports=mongoose.model('cookDetail',cookModel);
