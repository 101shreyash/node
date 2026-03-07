import http from "http"


const myserver = http.createServer((req,res)=>{

console.log("Request Received");
console.log(req); // req itself is an obj , where info requests info are stored

console.log(req.headers);
res.end("Hello from Nodeserver")
 
})


myserver.listen(8000 , ()=> {console.log("Server Started!");})