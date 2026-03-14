import express, { urlencoded } from "express";
import students from "./students.json" with { type: "json" };
import fs from "fs";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  fs.appendFile(
    "./log.txt",
    `${Date.now()} , ${req.ip} , ${req.method} \n`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        next();
      }
    },
  );
});

const port = 8001;

app
  .route("/students")

  .get((req, res) => {
    res.send(students);
  })

  .post((req, res) => {
    const newuser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      email: req.body.email,
      id: students.length + 1,
    };

    students.push(newuser);
    fs.writeFile("./students.json", JSON.stringify(students), (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("User Created");
      }
    });
  });

app
  .route("/students/:id")

  .get((req, res) => {
    const reqid = Number(req.params.id);
    const foundid = students.find((std) => std.id === reqid);
    res.send(foundid);
  })

  .patch((req, res) => {
    const reqid = Number(req.params.id);
    const foundid = students.find((std) => std.id === reqid);

    foundid.first_name = req.body.first_name;
    foundid.last_name = req.body.last_name;
    foundid.gender = req.body.gender;
    foundid.email = req.body.email;

    fs.writeFile("./students.json", JSON.stringify(students), (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("User Modified");
      }
    });
  });

app.listen(port);
