let express = require('express');
let app = express();

//console.log("Hello World")

app.get("/", function(req, res){
    res.sendFile("/views/indes.html");
})


































 module.exports = app;
