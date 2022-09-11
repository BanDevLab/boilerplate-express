let express = require('express');
let app = express();
console.log("Hello World");
//sirve archivo html
app.get("/",
       function(req,res){
         //res.send("Hello Express");
         let path=__dirname+"/views/index.html";
         res.sendFile(path);
       });
//servir recursos static
app.use("/public",
       express.static(__dirname+"/public"));
//servimos Json
app.get("/json",
       function(req,res){
              res.json({"message":"Hello json"});
       });

































 module.exports = app;
