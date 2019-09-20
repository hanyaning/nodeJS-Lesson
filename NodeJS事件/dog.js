const events = require("events");
const EventEmitter = events.EventEmitter;
function Dog(name,energy){
    this.name = name;
    this.energy = energy;
    var that = this;
    EventEmitter.call(this);
    var time = setInterval(() =>{
        if(that.energy >=0){
            that.emit("bark");
            that.energy--;
        }else{
            clearInterval(time)
        }
    },1000)
}
Dog.prototype.__proto__= EventEmitter.prototype;
module.exports = Dog;


//原生模块，核心模块
// const events = require("events");
// const EventEmitter = events.EventEmitter;
// function Dog(name,energy){
//     this.name = name;
//     this.energy = energy;
//     var that = this;
//     EventEmitter.call(this);
// }
// Dog.prototype.__proto__ = EventEmitter.prototype;
// module.exports = Dog;