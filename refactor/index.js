import express from "express"

const app = express()

//refator

app
.route("/students")
.get((req, res) => res.send("Retrieve Students Details"))
.post((req,res) => res.send("Add New Students"))
.put((req, res) => res.send("complete Update"))
.delete((req,res) => res.send("delete Students Details"))

//create server
app.listen(8000, () => {
    console.log("server up ");
    
})