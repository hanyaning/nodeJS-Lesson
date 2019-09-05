//1.引入原生模块
const http = require('http');
const fs = require('fs');
const path = require('path');
//2.创建服务器
var server = http.createServer(function(req,res){
    var htmlPath = path.join(__dirname,'/view/view.html');
    console.log(htmlPath);
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString('utf8');
    res.writeHead(200,{'content-Type':'text/html'});
    res.write(htmlContent);
    res.end();
});
server.listen(8081);
console.log('server is listening 8081');