const Radio = require("./radio");
const station = {
    name:"music",
    FM:"106.7"
}
var radio = new Radio(station);
radio.on('open',(station)=>{
    console.log("%s Fm %s opened",station.name,station.FM);
    setTimeout(()=>{
        console.log("lalala")
    })
})
radio.on('close',(station)=>{
    console.log("%s Fm %s closed",station.name,station.FM);
})
