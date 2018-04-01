var User=require('./userModel');

//register user

var registerUser=function(req,res){
    var user=new User(req.body);
    user.save(function(err,user){
        console.log(user);
        if(!err){
            res.status(200).send(user);
        }else{
            res.status(500).send('connot register');
        }
    });
};

//login and get the user object

var loginUser=function(req,res){
    var loginDetails={
        emailid:req.body.emailid,
        password:req.body.password
    }
User.find(loginDetails,function(err,user){
    if(err){
        res.status(404).send('cannot match');
    }else{
        res.status(200).send(user);
    }
})

}

module.exports={
    registerUser:registerUser,
    loginUser:loginUser
}