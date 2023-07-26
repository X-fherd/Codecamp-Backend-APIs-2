let express = require('express');
let app = express();
app.use(express.static("/public"))
app.use("/public", express.static(absolutePath = _dirname + "/public/style.css"));

//console.log("Hello World")

app.get("/", function(req, res){
    res.sendFile(absolutePath = __dirname + "/views/index.html");
})


































 module.exports = app;
