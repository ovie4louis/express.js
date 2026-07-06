import express from "express"
const app = express()

const cb1 = (req,res, next) => {
    console.log("First cb");
    next()
}

const cb2 = (req,res, next) =>{
    console.log("Second cb");
    next()
    
}
 app.get("/crazzyness", [cb1, cb2], (req,res, next) => {
    console.log("Third cb");
    next()
    
 }, (req, res, next) => {
    console.log("Fourth cb");
    res.send("fourth callback function")
    
 })
app.listen(8000, () => {
    console.log("crazy server up...");
    
})