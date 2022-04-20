const express=require("express");
const adminRouter = require("./adminrouter");

const publicRouter=express.Router();

const log=(req,res,next)=>{
    console.log("Hey You are in middleware log");

    next();
}

//publicRouter.all('*',log);//* will work on every url and the log middleware will call the next matched path

publicRouter.get("/",(req,res)=>{
    res.send("Hello I am Abid");
});

/*publicRouter.param("id",(req,res,next,id)=>{///this param method function will get called once even if more than one method matches with this function
    req.user={
        name:"Ahmed Abid",
        University:"Sust",
        Roll:"2018831062"
    }
    next();
})
/*publicRouter.get("/:id",(req,res,next)=>{
   console.log("Hello i am another one");
   next();
    });*/



    //when we need to send a argument in the param function

/*publicRouter.param((param,option)=>{
    return (req,res,next,id)=>{
        console.log("Hey");
        if(id===option)
        next();
        else
        res.send("Hey the value did not match");
    }
});

publicRouter.param("id","2018831062");
publicRouter.use((req,res,next)=>{
    console.log("Goblin: The Great and Lonely God");
    next();
});

publicRouter.use(adminRouter);*/

publicRouter.get("/:id",(req,res)=>{
res.send(req.user);
});

module.exports=publicRouter;