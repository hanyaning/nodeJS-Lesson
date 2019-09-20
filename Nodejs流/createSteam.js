const Readable = require("stream").Readable;

var letter = 'a'.charCodeAt(0); 

var myReadable = function(){
    Readable.call(this);
}

myReadable.prototype.__proto__ = Readable.prototype;
myReadable.prototype._read = function(){
    this.push(String.fromCharCode(letter++));
    if(letter > 'z'.charCodeAt(0)){
        this.push(null);
    }
}

var reader1 = new myReadable();
reader1.pipe(process.stdout);
