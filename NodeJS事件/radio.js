const events = require("events");
const util = require("util");
const EventEmitter = events.EventEmitter;
function Radio(station){
    EventEmitter.call(this);
    var that = this;
    setTimeout(() => {
        that.emit('open',station);
    }, 0);
    setTimeout(()=>{
        that.emit('close',station);
    },2000);
}
util.inherits(Radio, EventEmitter);
module.exports = Radio;