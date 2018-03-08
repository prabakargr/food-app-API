
var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var customerModel=new Schema({
    foodtypes:{
        andra:String,
        kerala:String,
        briyani:String,
        cafeDesertsBakery:String,
        chettinad:String,
        northIndian:String,
        location:String,
    }
})

module.exports=mongoose.model('customerPreferenceFood',customerModel);