var express = require('express');
var User = require('../models/user');
var Message = require('../models/message');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//getuser
router.get('/getuser',async function(req,res,next){
  let users= await User.find();
  let listUser={"users":users};
  res.json(listUser);
});

//adduser
router.post('/adduser',async function(req,res,next){
  let usersduplicate=await User.find({ username: req.body.Name } );
  if(usersduplicate.length){
    let _id="65";
    let respdata={'status':'unsuccess','userDetails':_id};
    res.json(respdata);
  }else{
    var userObj = new User({
      username: req.body.Name,
    });
    // call the built-in save method to save to the database
    userObj.save(function(err,userDetails) {
    if (err) throw err;
    let respdata= {'status':'success','userDetails':userDetails};
    res.json(respdata); 
  });
  }
});

//getmessage
router.get('/getmessage', async function(req,res,next)
{
  let messages = await Message.find();
  let users = await User.find();
  let respmessage=[];
  for(let i=0;i<=users.length-1;i++)
  {
    for(let j=0;j<=messages.length-1;j++)
    {
      var data = {
        name:null,
        message:null,
        userid:null
      };   
      if(users[i]._id==messages[j].userid)
      {
        data.name=users[i].username;
        data.message = messages[j].message;
        data.userid = messages[j].userid;
      }
      if(data.name!=null)
      respmessage.push(data);  
    }
  }
  let listMessage={"message":respmessage};
  res.json(listMessage);  
});

//addmessage
router.post('/addmessage',function(req,res,next){
  var messageObj=new Message({
    message: req.body.message,
    userid: req.body.userid,
  });
  messageObj.save(function(err){
  if(err) throw err;
  let respdata={'status':'success','data':messageObj};
  res.json(respdata);
  });
});
  
module.exports = router;
