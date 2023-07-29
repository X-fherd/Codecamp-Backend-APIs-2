require('dotenv').config()
let express = require('express');
let app = express();
app.use(express.static("/public"))
app.use("/public", express.static(absolutePath = __dirname + "/public"));
app.use((req, res, next)=> {
    console.log(req.method + " " + req.path + " - " + req.ip)
    next();
} )

//console.log("Hello World")

app.get("/", function(req, res){
    res.sendFile(absolutePath = __dirname + "/views/index.html");
})

app.get("/json", function(req, res){
    if (process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"});
    }
    
})

function getCurrentTime(){
    return new Date().toString();
}

app.get("/now", (req, res, next) => {
    req.time = getCurrentTime();
    next();
},(req, res) =>{
    res.json({"time": req.time});
});


































 module.exports = app;
