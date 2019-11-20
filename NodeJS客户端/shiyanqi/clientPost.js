const http = require('http');
const querystring = require("querystring");
var options = {
    host: "localhost",
    port: 8081,
    method: "post"
}
var username = process.argv[2];
var password = process.argv[3];
var postData = {username:username,password:password};
postData = querystring.stringify(postData);
//客户端post只能用request
var req = http.request(options, function(res) {
    
});
req.write(postData);     //实际数据的写入
req.end();