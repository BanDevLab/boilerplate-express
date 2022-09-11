let express = require('express');
let app = express();
console.log("Hello World");
app.get("/",
       function(req,res){
         //res.send("Hello Express");
         let path=__dirname+"/views/index.html";
         res.sendFile(path);
       });
app.use("/public",
       express.static(__dirname+"/public"));



































 module.exports = app;
