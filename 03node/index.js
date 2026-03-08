import http from "http";
import fs from "fs";


const myserver = http.createServer((req, res) => {
  fs.appendFile(
    "./log.txt",
    ` rd : ${Date.now()} --  rqm : ${req.method} -- rqurl : ${req.url} \n`,
    (err) => {
      if (err) console.log(err);
    }
  );

  if (req.url === "/") {
    res.end("Welcome to our platform , hit /loginpage for more features access");
  } 
  else if (req.method === "GET" && req.url === "/loginpage") {
    res.end("Youre on the login page right now make sure to signup for more info");
  } 
  else if (req.method === "POST" && req.url === "/loginpage") {
    // Db Query
    res.end("Logged in Sucessfully");
  } 
  else {
    res.end("404 not found make sure to check root path or loginpage path for more info");
  }
});

myserver.listen(8000)