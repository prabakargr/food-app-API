
var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var customerModel=new Schema({
    foodtypes:{
        andra:String,
        kerala:String,
        briyani:String,
        cafeDesertsBakery:String,
        chetinad:String,
        northIndian:String
    }
})

module.exports=mongoose.model('customerPreferenceFood',customerModel);