const mongoose= require('mongoose');
const schema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})
const usermodel= mongoose.model("users1",schema);
module.exports= usermodel;