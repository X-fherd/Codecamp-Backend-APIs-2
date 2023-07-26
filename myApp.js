let express = require('express');
let app = express();
app.use(express.static(absolutePath = _dirname + "/public"));

//console.log("Hello World")

app.get("/", function(req, res){
    res.sendFile(absolutePath = __dirname + "/views/index.html");
})


































 module.exports = app;
