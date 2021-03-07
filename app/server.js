let express = require("express");
let app = express();
let converter = require("./converter")

app.get("/rgbToHex", function (req, res) {

    let red = parseInt(req.query.red, 10)
    let green = parseInt(req.query.green, 10)
    let blue = parseInt(req.query.blue, 10)

    let hex = converter.rgbToHex(red, green, blue);

    res.send(hex);
});

app.get("/hexToRgb", function (req,res) {

    let hex = req.query.hex;
    let hexa = req.query.hexa;
    let rgb = converter.hexToRgb(hex);

    res.send(JSON.stringify(rgb));
});

app.listen(3000)
console.log(`Running server on port ${3000}`)