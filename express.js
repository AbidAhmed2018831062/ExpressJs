const express=require("express");

app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    console.log(req.body);
    res.end("ok");
});

app.listen(3000);