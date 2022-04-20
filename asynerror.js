const express=require("express");
const handle=require("./handle");
const fs=require("fs");

app=express();
admin=express();



app.get("/",[(req,res,next)=>{
  fs.readFile("/writefike",(err,data)=>{
console.log(data);
next(err);
  })
},(req,res,next)=>{
    console.log(data.pro);
}])
app.use((err,req,res,next)=>{//there should be no middleware after the end of error middleware
    if(res.headersSent)
    {
        console.log("res")
        next(err);
    }
    else
    res.status(500).send("There was an error");
})
app.listen(3000,()=>{
    console.log("listening on port 3000")
});