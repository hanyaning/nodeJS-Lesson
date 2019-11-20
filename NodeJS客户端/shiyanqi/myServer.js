const http = require('http');
const querystring = require("querystring");
const path = require('path');
const fs = require("fs");

http.createServer(function(req,res){
    var strData = '';
    req.on('data',function(chunk){
        strData += chunk;
    })
    req.on('end',function(){
        var filePath = path.join(__dirname,"data.json");
        var fileContent = fs.readFileSync(filePath);
        var fileStr = fileContent.toString('utf8');
        var fileObj = JSON.parse(fileStr);
        var dataObj = querystring.parse(strData); 
        var tag = false;
        for(var i =0;i<fileObj.length;i++){
            if(fileObj[i].username == dataObj.username && fileObj[i].password == dataObj.password){
                tag = true;
            }
        } 
        if(tag == true){
            console.log("登录成功!");
        }else{
            console.log("输入的用户名或者密码错误!");
        }
    })
}).listen(8081);
console.log("server is listening 8081");