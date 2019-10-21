const path = require('path');
const fs  = require('fs');
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');


function responseHtml(urlPathArr,res,dataHtml,type){
    //图片片段的检验
    var imgType = urlPathArr[2];
    var isImg = true;
    if(imgType == 'img'){
        var imgTypes = urlPathArr[3].split('.');
        var img_type = imgTypes[1];
        var img_name = imgTypes[0];
    }else if(imgType != undefined){
        var imgTypes = urlPathArr[2].split('.');
        var img_type = imgTypes[1];
        var img_name = imgTypes[0];
        var isImg = false;
    }
    switch(type){
        case 'html':
            var htmlPath = path.join(__dirname,'../'+dataHtml+'.html');
            var htmlContent = fs.readFileSync(htmlPath);
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(htmlContent);
        break;
        case 'css':
           
                var cssPath = path.join(__dirname,'../css/'+urlPathArr[2]);
                var cssContent = fs.readFileSync(cssPath);
                res.writeHead(200,{'content-Type':'text/css'});
                res.end(cssContent);
            
        break;
        case 'images':
            if(isImg){
                var imgPath = path.join(__dirname,'../images/img/'+img_name+'.'+img_type);
                var imgContent = fs.readFileSync(imgPath);
                res.writeHead(200,{'content_Type':'image/'+img_type});
                res.end(imgContent);
            }else{
                var imgPath = path.join(__dirname,'../images/'+img_name+'.'+img_type);
                var imgContent = fs.readFileSync(imgPath);
                res.writeHead(200,{'content_Type':'image/'+img_type});
                res.end(imgContent);
            }
        break;
        case 'js':
                var jsPath = path.join(__dirname,'../js/'+urlPathArr[2]);
                var jsContent = fs.readFileSync(jsPath);
                res.writeHead(200,{'content-Type':'text/javaScript'});
                res.end(jsContent);
        break;
        case 'json':
                var jsPath = path.join(__dirname,'../'+dataHtml+'.json');
                var jsContent = fs.readFileSync(jsPath);
                var jsonStr = decoder.write(jsContent);
                res.writeHead(200,{'content-Type':'text/plain'});
                res.end(jsonStr);
        break;

    }
}

exports.responseHtml = responseHtml;
