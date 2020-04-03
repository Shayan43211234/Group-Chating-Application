var express = require('express');
var route = express();




/*app.post('/user/getusername', function(req, res, next) {
  console.log("-=--=======m F shayan====");
  //res.render('index', { title: 'Express' });

  let user = {'name':'shayan','password':'password'};
  res.json(user);
});*/
route.post('/user/getusername',function(req,res,next){

  console.log("====Shayan====");
  console.log(req.body); 
  res.json(req.body);
  
});

module.exports = route;
