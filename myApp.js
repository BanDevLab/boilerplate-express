let express = require('express');
let app = express();
console.log("Hello World");

//montando un middleware
app.use(function(req,res,next){
       console.log(req.method+" "+req.path+" - "+req.ip);
       next();
     });
     
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

//Encadenando una funcion middleware

app.get("/now",
       function(req,res,next){
         req.time=new Date().toString();
         next();
       },
       function(req,res){
         res.json({"time":req.time});
       });
//Entrada de parametros
app.get("/:word/echo",
       function(req,res){
         res.json({"echo":req.params.word});
       });



       module.exports = app;