// import express from express

import express from "express";

// create an instance of express

const app = express();

//Basics Route

// home page

app.get("/", (req, res) => {
    res.send("<h1>welcome to home Page<h1>")
})

// about page

app.get("/about", (req, res) => {
    res.send("<h1> About Page")
})

// Contact Page

app.get("/Contact", (req, res) => {
    res.send("<h1> Contact Pagenodee")
})

//listen

app.listen(8000, () => console.log("Server Up!"));