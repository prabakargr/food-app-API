var Cook=require('./cookModel');

// var cookDetails=function(req,res){
//     var cook=new Cook(req.body);
//     console.log(cook);
//     cook.save(function(err,details){
//         if(!err){
//             res.status(200).send('post successfully');
//         }else{
//             res.status(500).send('details');
//         }
//     })
// }


var cookDetails=function(req,res){
    var cook=new Cook(req.body);
  if(!req.files){
      res.status(500).send('cannot upload');
  }
  let photos=req.files.photos;
console.log(photos);
  photos.mv('../imgs/Koala.jpg',function(err){
      if(!err){
          res.send('done')
      }else{
          res.send('err')
      }
  })
}
module.exports={
    cookDetails:cookDetails
}