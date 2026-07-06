import express from "express"

const app = express();

app.get("/Students", (req, res) => {
    res.send("Students Details")
})

app.post("/Students", (req, res) => {
    res.send("Create Student Details")
})

app.put("/Students", (req,res) => {
    res.send("Complete Update")
})

app.delete("/Student", (req,res) => {
    res.send("Delete Student")
})




app.listen(8000, () => {
    console.log("Server Up Now...");
    
})