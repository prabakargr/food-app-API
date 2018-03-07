var customerModel=require('./customerModel');

var custPreference=function(req,res){
    var custsPref=new customerModel(req.body);
    custsPref.save(function(err,pref){
        if(!err){
            res.status(200).send(pref)
        }else{
            res.status(500).send('cannot send');
        }
    })
}

module.exports={
    custPreference:custPreference,
}