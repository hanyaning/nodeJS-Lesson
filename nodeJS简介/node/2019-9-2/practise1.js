/**
 * nodeServer.js
 */

 const http = require('http');   //应用http模块

 var server = new http.Server();
//Server监听客户端的请求
 server.on('request',function(req,res){
    res.end('hello world');
 })     
//server监听端口
 server.listen(8082);
 console.log('server is listening 8082');

 //异步操作，不会阻塞程序的执行
 /**
  * 1.营业厅排队办理业务，应用程序执行的阻塞
  * 2.取号办理业务，应用程序执行的异步操作
  */