const mongoose= require('mongoose');
const database=mongoose.connect("mongodb://127.0.0.1:27017",{dbname:"BackendApi"}).then(()=>console.log("connected to db"))
.catch((e)=>console.log(e));
module.exports={database}
