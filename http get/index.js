// import express from express

import express from "express";

//create an instance of express

const app = express();

//home page

app.get("/", (req, res) => {
    res.send("Welcome to Express.jsS")
})


//listening 

app.listen(8000, () => {
    console.log("Server Up!");
    
});