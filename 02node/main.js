// sending json response with manual routing
 

import http from "http"
import data from "./example.json" with {type :"json"}

const myserver = http.createServer((req,res)=>{

    if (req.url === "/") {

  res.end("Youre on the homepage make sure to check /json path for required jsonfiles")
        
    }
    
    else if (req.url === "/json"){

     res.setHeader("Content-Type", "application/json");
       res.end(JSON.stringify(data))

    }
    else{
        res.end("404 Not found make sure to check root path or /json for more info")
    }
})

myserver.listen(8000)