const http= require('http');
const fs= require('fs');
const { error } = require('console');
const localhost=2111;
const server= http.createServer((req,res)=>{

    console.log(req.headers);
    const date= `${Date.now()}:New  req recieved`
    fs.appendFile('log.txt',date,(err,data)=>{
        res.end(`Ram Ram  bhaiyo`);
    })
    
})
server.listen(localhost,()=>{
    console.log("server is started at 2111")
});