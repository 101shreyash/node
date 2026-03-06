import fs from "fs"
import crypto from "crypto"

process.env.UV_THREADPOOL_SIZE = 6 // doing this 6 tasks will be run parallelly , cause we have 

// extended the default thread size which was 4 to 10 
// and hence all the password will be executed at the same time 

const starttime = Date.now()

setTimeout(() => {
    
    console.log("Hey Yo Whatsupp Ni");
    
}, 0);


fs.readFile("./index.js" , "utf-8" , ()=>{
    
    console.log("IO polling finish ");

    setTimeout(()=>{console.log("AhamDulillah");
    },1000)

    setTimeout(()=>{

            console.log("God gave me everything");
        
    },3000)

    setImmediate(()=>{console.log("Go Sleep Now");})
    
})


setImmediate(()=>{
    console.log("Hello im set immideite");
    
})


 console.log("Hello from Top Level Code");



 /* +++++++++++ This output itself makes understanding of node architecture much easier

Hello from Top Level Code
Hey Yo Whatsupp Ni
Hello im set immideite
IO polling finish 
Go Sleep Now
AhamDulillah
God gave me everything


*/





crypto.pbkdf2("password1" , "salt1" , 1000000 , 1024 , "sha512" , ()=>{

    console.log(`${Date.now()-starttime}ms `,"Password1 done ");
    
})
crypto.pbkdf2("password2" , "salt1" , 1000000 , 1024 , "sha512" , ()=>{

    console.log(`${Date.now()-starttime}ms `,"Password2 done ");
    
})
crypto.pbkdf2("password3" , "salt1" , 1000000 , 1024 , "sha512" , ()=>{

    console.log(`${Date.now()-starttime}ms `,"Password3 done ");
    
})
crypto.pbkdf2("password4" , "salt1" , 1000000 , 1024 , "sha512" , ()=>{

    console.log(`${Date.now()-starttime}ms ` ,"Password4 done ");
    
})

crypto.pbkdf2("password5" , "salt1" , 1000000 , 1024 , "sha512" , ()=>{

    console.log(`${Date.now()-starttime}ms ` ,"Password5 done ");
    
}) 

crypto.pbkdf2("password6" , "salt1" , 1000000 , 1024 , "sha512" , ()=>{

    console.log(`${Date.now()-starttime}ms ` ,"Password6 done ");
    
}) // this stuff will be slow cause by default we only have 4threads so it have to wait for otheres to execute

// by default the size of thread in thread pool is 4  , which is managed by libuv library
// these all would be working with threadpool threads and is blocked by the mainthread 




// +++++++++++ So the question now is can we extend the thread size ? +++++++++++++
// we can upto 128


// using process.env.UV_THREADPOOL_SIZE = 128