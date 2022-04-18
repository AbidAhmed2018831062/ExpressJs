handle=(req,res)=>{
    console.log(req.app.locals.title);
    res.send("ok");
}
module.exports=handle;