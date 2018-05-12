var customerModel=require('./customerModel');



var custPreference = function(req, res){
    var token = req.headers['auth-token'];

    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
          if (err) {
            return res.json({ success: false, message: 'Failed to authenticate token.' });    
          } else {
            // if everything is good, save to request for use in other routes
            // req.decoded = decoded;    
            // next();
           
            var custsPref=new customerModel(req.body);
    custsPref.save(function(err,pref){
        if(!err){
            res.status(200).send(pref)
        }else{
            res.status(500).send('cannot send');
        }
    })
          }
        });
    
      } else {
    
        // if there is no token
        // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });

 
    };
    
  }
// var custPreference=function(req,res){
//     var custsPref=new customerModel(req.body);
//     custsPref.save(function(err,pref){
//         if(!err){
//             res.status(200).send(pref)
//         }else{
//             res.status(500).send('cannot send');
//         }
//     })
// }

module.exports={
    custPreference:custPreference,
}