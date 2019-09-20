// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const process = require("process");


// http.createServer(function(req,res){
//     var file = path.join(__dirname,"/fileReader2.js");
//     var arg = process.argv[2];
//     var filePath = arg || file;
//     console.log(filePath);
//     fs.open(filePath,function(err,fd){
//         if(err){
//             console.log("输入的文件路径有错误!");
//         }
//         else{
//             var buf = Buffer.alloc(50);
//             var len = fs.statSync(filePath).size;
//             console.log(len);
//             fs.read(fd,buf,0,len,0,function(err,byte,buf){
//                 if(err){
//                     console.log("输入的文件路径无法读取!");
//                 }
//                 else{
//                     console.log(buf.toString());
//                     fs.close(fd,function(err){
//                         if(err){
//                             console.log("输入的文件路径无法关闭!");
//                         }
//                     })
//                 }
//             })
//         }
//     })
// }).listen(8081);
// console.log("server is listening 8081");




const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        fs.open(process.argv[1],"r+",function(err,fd){
            var statObj = fs.statSync(process.argv[1]);
            var buf = Buffer.alloc(statObj.size);
            fs.read(fd,buf,0,statObj.size,0,function(err,byte,buff){
                if(err){
                    console.log(err);
                }else{
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            })
        })
    }else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            fs.open(path,"r+",function(err,fd){
                var statObj1 = fs.statSync(pathName);
                var buf = Buffer.alloc(statObj1.size);
                fs.read(fd,buf,0,statObj1.size,0,function(err,byte,buff){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.end(buf.toString());
                        fs.closeSync(fd);
                    }
                })
            })
        }else{
                res.writeHead(200,{"content-Type":'text/html;charset=utf-8'});
                res.end("文件不存在!");
        }
    }
}).listen(8081);
console.log("server is listening 8081");
