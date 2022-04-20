const express=require("express");
const multer = require("multer");
const handle=require("./handle");



const uplo="G:/Express/uploads";

var up=multer({
    dest:uplo
});
const app=express();
admin=express();
app.post("/",up.single("avatar"),(req,res)=>{
    res.send("annyeong");
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
});