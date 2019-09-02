const http = require('http');

var server = http.createServer(function(req,res){
    res.write('hello world');
    res.end();
});

server.listen(8081);
console.log('sever is listening 8081');

/* 
    shift+鼠标右键 点击打开power shell窗口
    编译node.js文件 + 文件名（当前目录下）
    每次修改js文件后，需要重新执行node + 文件名
    在谷歌浏览器中输入http://localhost:8081
    在node中的js文件，必须经过编译才可以执行
    webStorm对于node支持更好
*/