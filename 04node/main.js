import express from "express"

const server = express()

server.get("/" , (req,res) =>{

res.send("Youre on the homepage make sure to check /login or /info path for more stuff")

})

server.get("/login" , (req,res)=>{

    res.sendFile("login.html" , {root:"."})
})

server.get("/info" , (req,res)=>{

    res.send("You must Login For the Required Action check /login path")

}) 


server.post("/login" , (req,res) =>{

    res.send("Youre logged in Sucessfully")
})


server.listen(8001)