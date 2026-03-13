import express from "express";
import fs from "fs";
import students from "./students.json" with { type: "json" };

const port = 8001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app
  .route("/students")
  .get((req, res) => {
    res.send(students);
  })

  .post((req, res) => {
    const newusers = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      email: req.body.email,
      id: students.length + 1,
    };

    students.push(newusers);

    fs.writeFile(
      "./students.json",
      JSON.stringify(students, null, 2),
      (err) => {
        if (err) {
          console.log(err);
        } else {
          res.send("UserAdded");
        }
      },
    );
  });

app
  .route("/students/:id")

  .get((req, res) => {
    const reqid = Number(req.params.id);
    const foundid = students.find((std) => std.id === reqid);
    if (!foundid) {
return res.status(404).send("Not Found");
    }
    res.send(foundid);
  })

  .delete((req,res) =>{

    const reqid = Number(req.params.id);

    const index = students.findIndex((std) => std.id === reqid);
 if (index === -1) return res.status(404).send("Not Found");

students.splice(index, 1);
  fs.writeFile("./students.json" , JSON.stringify(students , null , 2) , (err) =>{

 if (err) {
  console.log(err);
  
 }
 else{

  res.send("UserDeleted")
 }

  })

    
  })


  .patch((req, res) => {
    const reqid = Number(req.params.id);
    const foundid = students.find((std) => std.id === reqid);

    if (!foundid) {
return res.status(404).send("Not Found");
    }

    foundid.first_name = req.body.first_name;
    foundid.last_name = req.body.last_name;
    foundid.email = req.body.email;
    foundid.gender = req.body.gender;

    fs.writeFile("./students.json", JSON.stringify(students, null, 2), (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("UserModified");
      }
    });
  });

app.listen(port);
