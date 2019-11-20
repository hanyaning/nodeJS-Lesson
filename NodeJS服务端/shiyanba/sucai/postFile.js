const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var urlPath = urlObj.pathname;
    if(urlPath == '/'){
        var htmlPath = path.join(__dirname,'index.html');
        var htmlContent = fs.readFileSync(htmlPath);
        res.writeHead(200,{'content-Type':'text/html'});
        res.end(htmlContent);
    }else if(urlPath == '/upload' && req.method == 'POST'){
        var strData = '';
        req.setEncoding('binary');
        req.on('data',function(chunk){
            strData += chunk;
        })
        req.on('end',function(){
            var dataArr = strData.split("\r\n");
            //console.log(dataArr);
            var fileData = dataArr.slice(4,dataArr.length-2);
            fileData = fileData.join('\r\n');
            var buf = Buffer.from(fileData,"binary");
            var timer = (new Date()).getTime();
            fs.writeFileSync("./upload/"+timer+'.png',buf,{"encoding":"binary"});
            res.writeHead(200,{"content-Type":"text/plain charset='utf8'"});
            res.end('提交成功!');
        })
    }else if(urlPath == '/list'){
        var htmlPath1 = path.join(__dirname,'list.html');
        var htmlContent1 = fs.readFileSync(htmlPath1);
        res.writeHead(200,{'content-Type':'text/html'});
        res.end(htmlContent1);
        // var imgPath = path.join(__dirname,'upload');
        // // console.log(imgPath);
        // var imgContent = fs.readdirSync(imgPath);
        // res.writeHead(200,{"Content-Type":"image/png"});
        // res.end(imgContent);
    }else if(urlPath == '/image.jpg'){
        var imgPath_back = path.join(__dirname,'./image.jpg');
        var imgContent_back = fs.readFileSync(imgPath_back);
        res.writeHead(200,{'content-Type':'image/jepg'});
        res.end(imgContent_back);
    }else if(urlPath.indexOf('upload')>=0 && req.method == 'GET'){
        var imgSrc = path.join(__dirname,urlPath);
        var imgContent = fs.readFileSync(imgSrc);
        res.writeHead(200,{'content-Type':'image/png'});
        res.end(imgContent);
    }else if(urlPath == '/getlist'){
        var files = fs.readdirSync(__dirname+'/upload');
        var fileStr = JSON.stringify(files);
        res.end(fileStr);
    }
}).listen(8081);
console.log("server is listening 8081");

