const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        var reader = fs.createReadStream(process.argv[1]);
        reader.pipe(res);
        //可读流.pipe(可以写入的数据流)
    }else{
        if(fs.existsSync(fileName)){
            var filePath = path.join(__dirname,fileName);
            var reader1 = fs.createReadStream(filePath);
            reader1.pipe(res);
        }else{
            res.writeHead(200,{"content-Type":'text/html;charset=utf8'});
            res.end("文件不存在!");
        }
    }
}).listen(8081);
console.log("server is listening 8081");