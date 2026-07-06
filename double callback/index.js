import express from "express"

const app = express();


app.get("/double-callback", (req, res, next) => {
   
    console.log("First Callback");
    //res.send("firs callBack")
    next()
}, (req, res) => {
    console.log("Second callBack");
    res.send("second callBack")
    
})

app.listen(8000, () => {
    console.log("Server Up....");
    
})
