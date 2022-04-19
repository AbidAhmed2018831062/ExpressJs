const express=require("express");
const cookie=require("cookie-parser");
app=express();
admin=express();

app.use("/admin",admin);
app.use(express.json());
app.use(cookie());
//
admin.get("/dashboard",(req,res)=>{
    //console.log(req.baseUrl);
    //console.log(req.originalUrl);
    console.log(req.path);
    res.send("Annyeong");
});
app.get("/users/:id",(req,res)=>{
    // console.log(req.baseUrl);
   // console.log(req.originalUrl);
   // console.log(req.url);
   //console.log(req.params);
   //console.log(req.query)
   console.log(req.cookies)
    res.send("Annyeong");
});

app.post("/users/:id",(req,res)=>{
    console.log(req.body);
    res.send("Annyeong");
})

app.listen(3000,()=> console.log("listening on port 3000"))