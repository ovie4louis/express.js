import express from "express"
import students from "./routes/student.js"
import teachers from "./routes/teachers.js"

const app = express()

app.use("/students", students)
app.use("/teachers", teachers)

app.listen(8000, () => {
    console.log("SERVER UP");
    
})
