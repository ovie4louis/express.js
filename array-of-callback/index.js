import express from "express"

const app = express();

const cb1 = (req,res, next) => {
    console.log("First callback");
    next()
    
}

const cb2 = (req,res, next) => {
    console.log("Second callback");
    next()
    
}

const cb3 = (req, res) => {
    console.log("Third callback");
    res.send("Third callback")
    
}
app.get("/array-cb", [cb1, cb2, cb3])

app.listen(8000, () => {
    console.log("SERVER RUNNING....");
    
})
