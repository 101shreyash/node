import express from "express"
import fs from "fs"
import students from "./students.json" with {type : "json"}

const port = 8001;
const app = express()

app.use(express.urlencoded({ extended: true }))
app.route("/api/students")

.get((req,res) => {

    res.send(students)
})

.post((req,res) =>{

    
     const newuser = {

        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        gender : req.body.gender,
        id : students.length+1,
     }

     students.push(newuser)
 
     fs.writeFile("./students.json" , JSON.stringify(students , null , 2) , (err) =>{

      if (err) {

        console.log(err);
        
      }
      else{
        
      res.send("Sucessfully Registered")

      }
         
     })
 
})

app.route("/api/students/:id")


.get((req,res) =>{

    const reqid = Number(req.params.id)
   const foundid =  students.find((std) => std.id === reqid)
   res.send(foundid)
    // res.send()
})

.patch((req,res) =>{

    // Operation Pending
})

.delete((req,res) =>{

    // Operation pending
})


app.listen(port)




