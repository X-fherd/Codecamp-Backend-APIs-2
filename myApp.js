let express = require('express');
let app = express();
app.use(absolutePath = __dirname + "/public", express.static());

//console.log("Hello World")

app.get("/", function(req, res){
    res.sendFile(absolutePath = __dirname + "/views/index.html");
})


































 module.exports = app;
