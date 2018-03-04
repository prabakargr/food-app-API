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
        email:req.body.email,
        password:req.body.password
    }
User.find(loginDetails,function(err,user){
    if(!err){
        res.status(200).send(user);
    }else{
        res.status(500).send('connot find match');
    }
})

}

module.exports={
    registerUser:registerUser,
    loginUser:loginUser
}