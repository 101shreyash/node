import http from "http"
import fs from "fs"
import info from "./utils.js"



const myserver = http.createServer ((req , res) =>{

 const log = `${Date.now()} --- "Request Received" \n`

fs.appendFile("./log.txt" , log , (err)=>{

    if (err) {

        console.log(err);
        
        
    }
})  

if (req.url === "/") {

res.end("Hey youre on the HomePage hit /me for my info")
    
}

else if(req.url === "/me"){

res.end(`${info}`)

}

else{
    res.end("404 Not Found")
}


})

myserver.listen("8001")


// basic manual routing using nodejs


//  Routing means choosing what response to send based on the request path (URL) and sometimes method.

// like here /me shows my info
// sometimes /product shows the product page
// /login → login page
