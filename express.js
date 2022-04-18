const express=require("express");

app=express();

app.use(express.json());

app.use(express.static(__dirname+"/public/"));

const router=express.Router();

router.get('/',(req,res)=>{
    console.log(req.body);
    res.end("ok");
});

app.listen(3000,()=>{
    console.log("listening on port 3000")
});