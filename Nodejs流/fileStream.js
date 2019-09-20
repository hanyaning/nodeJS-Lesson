const fs = require("fs");
const path = require("path");

var readPath = path.join(__dirname,"/from.txt");
var writePath = path.join(__dirname,"/to.txt");
var reader = fs.createReadStream(readPath);
// var reader1 = reader.toUpperCase();
var writer = fs.createWriteStream(writePath);
reader.pipe(writer);