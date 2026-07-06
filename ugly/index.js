import express from "express"

const app = express();

app.get("/students", (req,res) => {
    res.send("retrieve Students")
})
app.post("/students", (req, res) => {
    res.send("Add New Student")
})


app.put("/students", (req,res) => {
    res.send("Complete Update")
})

app.delete("/student", (req,res) => {
    res.send("Delete Student")
})




app.listen(8000, () => {
    console.log("Server Up Now...");
    
})