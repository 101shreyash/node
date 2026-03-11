import express, { json } from "express"
import students from './students.json' with {type : "json"}
import fs from "fs"

const port = 8000
const app = express()

// MiddleWare - assume it as a pluggin for now 
app.use(express.urlencoded({extended : true})) ; 

app.route("/api/students").get((req,res) =>{

    res.send(students)
})

.post((req,res) =>{

 // Create user
  const reqbody = req.body;

   students.push({ // record records userinfo
  id: reqbody.id,
  first_name: reqbody.first_name,
  last_name: reqbody.last_name,
  email: reqbody.email
});

fs.writeFile("./students.json" , JSON.stringify(students, null, 2), (err)=>{

    if (err) {

        console.log(err);
        
        
    }
})



//  console.log( "reqbody" , reqbody);
  

    res.send({json :"pending"})
})


app.route("/api/students/:rollno")

.get((req,res) =>{

    const reqRollNo = Number(req.params.rollno)
   const foundID =  students.find((std) => std.id === reqRollNo)
   res.send(foundID)
})

.patch((req,res) =>{

    // Update user
   res.send({json :"pending"})

})

.delete((req,res) =>{

    // Delete user
   res.send({json :"pending"})

})


app.listen(port)