const http = require('http');
const url = require('url');
const path = require('path');
const fs  = require('fs');
const responseWay = require('./responseWay.js');


http.createServer((req,res)=>{
    var urlPath = url.parse(req.url,true);
    //console.log(urlPath);
    var urlPathName = urlPath.pathname;
    var urlPathArr = urlPathName.split('/');
    var dataHtml = ['chapterList','chapter','login','list','addChapter','data','user'];
    //判断相应的类型
   //console.log(urlPathArr);
    switch(urlPathArr[1]){
        case '':      
        case 'list': 
            var type = 'html';
            responseWay.responseHtml(urlPathArr,res,dataHtml[0],type);
        break;
        case 'login':
            var type = 'html';
            responseWay.responseHtml(urlPathArr,res,dataHtml[2],type);
        break;
        case 'listmanager':
            var type = 'html';
            responseWay.responseHtml(urlPathArr,res,dataHtml[3],type);
        break;
        case 'addChapter':
            var type = 'html';
            responseWay.responseHtml(urlPathArr,res,dataHtml[4],type);
        break;
        case 'detail':
            var type = 'html';
            responseWay.responseHtml(urlPathArr,res,dataHtml[1],type);
        break;
        case 'css':
            var type = 'css';
            responseWay.responseHtml(urlPathArr,res,dataHtml[1],type);
            break;
        case 'js':
            var type = 'js';
            responseWay.responseHtml(urlPathArr,res,dataHtml[1],type);
            break;
        case 'images':
            var type = 'images';
            responseWay.responseHtml(urlPathArr,res,dataHtml[1],type);
        break;
        case 'getDetail':
            var type = 'json';
            responseWay.responseHtml(urlPathArr,res,dataHtml[5],type);
        break;
        case 'getUser':
            var type = 'json';
            responseWay.responseHtml(urlPathArr,res,dataHtml[6],type);
        break;
        case 'add':
            
            var addChapter = urlPath.query;
            var chapter = new Object();
            chapter.title = decodeURI(decodeURI(addChapter.title));
            chapter.content =decodeURI(decodeURI(addChapter.content));
            var addFilePath = path.join(__dirname,'../addChapter.json');
            var addContent = fs.readFileSync(addFilePath);
            var addContent1 = JSON.parse(addContent);
            addContent1.push(chapter);
            var addStr = JSON.stringify(addContent1);
            fs.writeFileSync(addFilePath,addStr,{"encoding":'utf8'});
        break;
        case 'getChapter':
            var type = 'json';
            responseWay.responseHtml(urlPathArr,res,dataHtml[4],type);
        break;
    }

}).listen(8083);
console.log("server is listening 8083");
