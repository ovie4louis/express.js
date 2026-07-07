import express from "express"

const router = express.Router()

router.get("/all", (req,res) => {
    res.send("ALL OVIE STUDENTS")
})

router.post("/create", (req, res) => {
    res.send("sign in student")
})

router.put("/update", (req,res) => {
    res.send("Update Student ID")
})

router.delete("/delete", (req,res) => {
    res.send("remove student from database")
})

export default router;