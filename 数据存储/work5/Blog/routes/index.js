var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/login',(req,res,next)=>{
  var username = req.body.username;
  var pwd = req.body.pwd;
  fs.readFile('./data.json','utf8',(err,data)=>{
    if(err){
      console.log(err);
    }else{
      var data_message = JSON.parse(data);
      var user_message = data_message.users;
      var userName = user_message[0].username;
      var password = user_message[0].password;
      var chapter = data_message.chapterList;
      if(username == userName && pwd == password){
        res.render('list',{chapterlist:chapter});
      }else{
        res.writeHead(200,{'Content-Type':'text/plain;charset="utf8"'})
        res.end("用户名或者密码错误");
      }
    }
  })
})

module.exports = router;
