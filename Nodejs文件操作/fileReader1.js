const http = require("http");
const fs = require("fs");
const path = require("path");
const process = require("process");


http.createServer(function(req,res){
    var filePath = path.join(__dirname,"/fileReader1.js");
    // console.log(filePath);
    var arg = process.argv[2];
    var file = arg || filePath;
    fs.readFile(file,function(err,data){
        if(err){
            console.log("输入的文件路径不存在!");
            // alert("输入的文件路径不存在！");
        }else{
            // console.log(data.toString());
            var fileContent = fs.readFileSync(file);
            res.end(fileContent);
        }
    })
}).listen(8081);

console.log("server is listening 8081");




// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// var fileName = process.argv[2];

// //注意proces.argv[1]是当前文件路径，process.argv[0]是Node环境下的安装路径
// http.createServer(function(req,res){
//     if(fileName == undefined){
//         var str = '';     
//         fs.readFile(process.argv[1],function(err,data){
//             if(err){
//                 console.log(err);
//             }else{
//                str = data.toString();
//                res.end(str);
//             }
//         })
//         // res.end(str);
//         //此时为异步执行，读取文件为操作系统执行，程序继续向下进行运行，在浏览器输出str所代表的内容。应放在函数里，读取完再执行
//     }else{
//         var pathName = path.join(__dirname,fileName);
//         if(fs.existsSync(pathName)){
//             fs.readFile(pathName,function(err,data){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     res.end(data.toString());
//                 }
//             })
//         }else{
//             res.writeHead(200,{"content-Type":'text/html;charset=utf-8'});
//             res.end("文件不存在!");
//         }
//     }
// }).listen(8081);