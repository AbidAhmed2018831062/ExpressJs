//App object


const express=require("express");
const handle=require("./handle");

app=express();
admin=express();//admin is a sub app
app.locals.title="Fist Express App";//can be used in every other file of the app
app.use("/admin",admin);
app.set("view engine","ejs")

admin.on("mount",(parent)=>{
    console.log(parent);
})
admin.get("/dashboard",(req,res)=>{
    console.log(admin.mountpath);
    res.send("This is the admin dashboard");
})

app.all("/users",(req,res)=>{
res.send("This path is for ever method like Get, POST, PUT, Delete");
})
app.set("Name","Abid");
//console.log(app.get("Name"));


app.get("/",handle);



//App params

app.param("id",(req,res,next,id)=>{
    req.userDetails={
        id,
        name:"Ahmed Abid"
    }
    next();//means to call the callback function accossiated with the param function
})

app.get("/users/:id",(req,res)=>{
    console.log(req.userDetails);
    res.send("This is the end");
})


app.route("/aboutus").
get((req,res)=>{
    console.log("Hello");
    res.render("about");
}).post((req,res)=>{
    console.log("Hello");
    res.send("I am Abid POST");
});
app.listen(3000,()=>{
    console.log("listening on port 3000")
});