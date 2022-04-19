
const express=require("express");
const handle=require("./handle");

app=express();
admin=express.Router();

//App level middleware

const logger=(req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleDateString()}-${req.originalUrl}`);
    next();
}
//Sub App Level Middleware && built in middleware is cookie parse and express.json() types
const subLogger=(req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleDateString()}-${req.originalUrl}`);
    next();
}
//app.use(logger);

//Error middleware

const annyeong=(req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleDateString()}-${req.originalUrl}`);
    throw new Error("Hi, I am an error");
}

const erro=(err,req,res,next)=>{
    console.log(err.message);
    res.end();
}
//Configurable middleware
const fu=(options)=>{
     return (function (req,res,next){
        if(options.data){
        console.log(`${new Date(Date.now()).toLocaleDateString()}-${req.originalUrl}`);
        next();
        }
        else
        throw new error("Hi there is no data");
});
}
app.set("view engine","ejs");

app.use("/admin",admin);
//admin.use(annyeong);
admin.use(fu({data:true}));

app.route("/aboutus").
get((req,res)=>{
    console.log("Hello");
    res.render("about",{
        name:"Bangladesh"
    });
}).post((req,res)=>{
    console.log("Hello");
    res.send("I am Abid POST");
});
admin.get("/dashboard",(req,res)=>{
    console.log(admin.mountpath);
    res.send("This is the admin dashboard");
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
});