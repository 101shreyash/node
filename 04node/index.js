// creating a simple http server in express

import express from "express"

const app = express() //  variable app has nothing to do with code its just an naming convention 


app.get('/' , (req , res)=>{

    res.send("Youre on the homepage Make sure to check /enroll path for more features")
})

app.get('/enroll' , (req , res ) =>{

    res.send("Youre just one step behind make sure to login/Signup for more features")
})

app.post('/enroll' , (req , res) =>{

    // DB Queryy..

    res.send("Login Sucessfull")
})

app.listen(8000)