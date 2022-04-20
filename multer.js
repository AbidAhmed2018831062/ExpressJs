const express=require("express");
const multer = require("multer");
const handle=require("./handle");



const uplo="G:/Express/uploads";

var up=multer({
    dest:uplo,
    limits:100000,
    fileFilter:(req,file,cb)=>{
        console.log(file);
        if(file.fieldname==="avatar")
        {
            if(file.mimetype==="image/jpg"||file.mimetype==="image/jpeg"||file.mimetype==="image/png")
            {
                cb(null,true);
            }
            else
            cb(new Error("Only jpg, jpeg, and png format allowed"))
        }
        else
        {
            if(file.mimetype==="application/pdf")
            {
                cb(null,true);
            }
            else
            cb(new Error("Only pdf format allowed"))
        }
    }
});
const app=express();
admin=express();
//single file
/*app.post("/",up.single("avatar"),(req,res)=>{
    res.send("annyeong");
});
//multiple file
app.post("/",up.array("avatar",3),(req,res)=>{
    res.send("annyeong");
})*/
//multiple fields
app.post("/",up.fields([
    {name:"avatar",maxCount:2},
    {name:"resume",maxCount:3}
]),(req,res)=>{
    res.send("annyeong");
})

app.use((err,req,res,next)=>{
    if(err){
    if(err instanceof multer.MulterError)
    res.status(500).send(err.message);
    else{
        res.status(500).send(err.message);
    }
}
else
res.send("Successful")
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
});