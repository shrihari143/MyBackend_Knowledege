const express = require('express');
const path = require('path');
const app = express();
const mongoose= require('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const port = 5000;
mongoose.connect("mongodb://127.0.0.1:27017").then(()=>{
    console.log("connected succesfully");
}).catch((e)=>{
    console.log(e);
})
const msgSchema = new mongoose.Schema({
    name:String,
    email:String,
    message:String,
    
})
const msg= mongoose.model("backend",msgSchema);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Change 'const users = [];' to 'let users = [];'
let users = [];
const isAuthanticated=(req, res,next)=>{
    const {token} = req.cookies;
if(token){
next ();}

else{
    console.log("cookies expires");
}}

app.get("/hello",isAuthanticated, (req, res) => {
    console.log("gjj");
    res.status(200);
    console.log(path.join(__dirname, "abc.html"));
    res.sendFile(path.join(__dirname, "abc.html"));
});

app.post("/abc",(req, res) => {
    console.log("hhhh9");
    res.send("jai shri ram");
});

app.set("view engine", "ejs");
app.get("/views", (req, res) => {
    console.log("hhhh2");
    
    res.render("abc", { name: "simmi" });
});

app.post("/form",async(req, res) => {
    console.log(req.body);

   const users= await msg.create({name:req.body.name,email:req.body.email, message:req.body.message})
   const token= jwt.sign({_id: users._id},"abc");
   console.log("my token is ", token);
    //users = [...users, req.body]; // Reassign the 'users' array
    res.cookie("token", token,{
        httpOnly:true,
        expires:new Date(Date.now()+20000)
    });

    
    console.log(req.cookies);
    res.json({
        users,
    });
    //res.redirect("/abc")
});

app.listen(port, () => {
    console.log(`run on port ${port}`);
});
