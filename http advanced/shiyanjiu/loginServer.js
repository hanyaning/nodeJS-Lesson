const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req,res)=>{
    var urlPath = url.parse(req.url);
    var urlPathName = urlPath.pathname;
    if(urlPathName == '/login' && req.method == 'GET'){
        showLogin(req,res);
    }else if(urlPathName == '/login' && req.method == 'POST'){
        loginIn(req,res);
    }
}).listen(8081);

function showLogin(req,res){
    var htmlPath = path.join(__dirname,'login.html');
    var htmlContent = fs.readFileSync(htmlPath);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(htmlContent);  
}
function loginIn(req,res){
    var formData = '';
    req.on('data',function(chunk){
        formData += chunk;
    })
    req.on('end',function(){
        var formObj = querystring.parse(formData);
        if(formObj.username == 'zhangsan' && formObj.pwd == '123'){
            // res.setHeader('Set-Cookie','username=zhangsan;max-age=24*60*60*30');
            var count = getCookie(req,res,'logincount');
            res.writeHead(200,{"Content-Type":'text/plain;charset="utf8"'})
            res.end('zhangsan这是您第'+count +'次登录');
        }else{
            res.writeHead(200,{"Content-Type":'text/plain;charset="utf8"'})
            res.end('用户名或者密码错误');
        }
    })
}

function setCookie(res,key,value){
    var cookiestr = key + '=' +value;
    var cookies = cookiestr+';max-age='+24*60*60*30;
    res.setHeader('Set-Cookie',cookies);
}

function getCookie(req,res,key){
    //console.log(req.headers['cookie']);
    if(req.headers['cookie'] == undefined){
        setCookie(res,key,1);
        return 1;
    }else{
        var cookie_count_message = req.headers['cookie'].split('=')[1];
        var cookie_count = parseInt(cookie_count_message)+1;
        setCookie(res,key,cookie_count);
        return cookie_count;
    }
}

console.log('server is listening 8081');