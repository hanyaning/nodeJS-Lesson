var user = {};
var i =1;
var msg = ['Name','Email','QQ','moblie'];
console.log(msg[0]+":");
process.stdin.on('data',function(data){
    user[msg[i-1]]=data.slice(0,data.length-1).toString('utf8');
    if( i == 4){
        console.log(user);
        process.exit();
    }
    else{
        console.log(msg[i++]+":");
    }
})
