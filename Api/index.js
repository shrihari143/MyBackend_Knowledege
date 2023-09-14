const express= require("express");
const mongoose= require('mongoose');
const database = require("./database/database")
const app= express();
const router= require("./router/userRouter")
app.use(express.json());
app.use(router);







app.get("/params/:id/:myid", (req, res)=>{
    console.log(req.params);
    console.log(req.query);

    res.json({
    success:true
    })
})


app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})