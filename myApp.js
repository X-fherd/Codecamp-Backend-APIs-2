require('dotenv').config()
let express = require('express');
let app = express();
app.use(express.static("/public"))
app.use("/public", express.static(absolutePath = __dirname + "/public"));

//console.log("Hello World")

app.get("/", function(req, res){
    res.sendFile(absolutePath = __dirname + "/views/index.html");
})

app.get("/json", function(req, res){
    if (process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message": "HELLO JSON"})
    }
    res.json({"message": "Hello json"});
})


































 module.exports = app;
