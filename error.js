//By default express handles the synchrnus code errors!!
const express=require("express");
const handle=require("./handle");

app=express();
admin=express();




app.get("/",(req,res)=>{
   for(i=0;i<10;i++)
   {
       if(i==5)
     next("Error");
       else
       res.write("Abid");//one it has been written on the response it cannot be override headers cannot be sent twice

   }
})
app.post((req,res)=>{
    console.log("Hello");
    res.send("I am Abid POST");
});
//if no such route if found then after every route set there should be a middleware handling that error.
app.use((req,res,next)=>{
    console.log("Hey that was an error")
    next("There was an error");
})

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