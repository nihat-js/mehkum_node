const express = require("express");

const app = express()

app.get("/test",function(req,res){
  res.send("test")
});


app.listen(process.env.PORT || 3000,()=>{
  console.log("Server started");
})