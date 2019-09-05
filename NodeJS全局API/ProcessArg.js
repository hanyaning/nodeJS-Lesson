var arg1 = process.argv[2];
if(arg1 == undefined){
    console.log("输出有误");
}else if(arg1 == "-h"){
    console.log("帮助信息：命令行为算术表达式");
}else{
    var result = eval(arg1);
    console.log(arg1 +'=%s',result);
}