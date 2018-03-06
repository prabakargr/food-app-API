var Cook=require('./cookModel');

var cookDetails=function(req,res){
    var cook=new Cook(req.body);
    cook.save(function(err,details){
        if(!err){
            res.status(200).send('post successfully');
        }else{
            res.status(500).send('details');
        }
    })
}

module.exports={
    cookDetails:cookDetails,
}