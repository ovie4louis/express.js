import express from "express"
import userCredentials from "./logs.js"

/*

1) request

2) middleware

3)response
*/

const app = express()
//console.clear();

app.use( userCredentials)


app.get("/", (req,res,) => {

    res.send("<h1> Hello Add Admin Ovie </h1>")
    
})

app.get("/create", (req, res) => {
    res.send("<h1> Create Addmins </h1>")
})

app.get("/update", (req,res) => {
    res.send("Update Admin")
})

app.get("/delete", (req,res) => {
    res.send("Delete Addmin")
})

app.listen(8000, () => {
    console.log("SERVER UP");
    
})
