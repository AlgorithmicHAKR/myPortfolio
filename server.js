const express=require('express')
const app=express();
const port=process.env.port||4343;
app.use("/",express.static(__dirname+"/public"));
app.listen(port,()=>{
    console.log(`Server started at  http://localhost:${port}`);
})