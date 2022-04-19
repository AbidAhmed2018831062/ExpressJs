
const express=require("express");
const handle=require("./handle");

app=express();
admin=express();

app.set("view engine","ejs");
app.get("/aboutus",(req,res)=>{
    res.send("Hi this is aboutus ")
})
app.get("/about",(req,res)=>{
  //  res.sendStatus(200);

 /* res.render("about",{
      name:"Bangladesh",
  });
*/
//res.json({name:"Bangladesh"});//will return anything on json format

/*res.format({
    "text/plain":()=>{
        res.send("HI textplain here");
    },
"text/html":()=>{
    res.render("about",{
        name:"Bangladesh",
    });
},
"application/json":()=>{
    res.json({
        name:"bangladehs"
    })
},
default:()=>{
    res.sendStatus(403);
}
  
});*/

//res.cookie("language","english");

res.redirect("/aboutus")
res.end();
});

app.listen(3000,()=>{
    console.log("listening on port 3000")
});