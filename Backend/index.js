const express = require("express");
const cors = require("cors");

const app= express();
app.use(cors());
app.use(express.json())

const name="Admin"
const pwd ="admin"

app.listen(3000,function(){
    console.log("App Started..")
})

app.post("/login",(request,response)=>{
    if (request.body.userName === name && request.body.password === pwd){
        response.send(true)
    }
    else{
        response.send(false)
    }

})