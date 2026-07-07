import express from "express"

const router = express.Router()

router.get("/all", (req,res) => {
    res.send("ALL OVIE teachers")
})

router.post("/create", (req, res) => {
    res.send("sign in teachers")
})

router.put("/update", (req,res) => {
    res.send("Update teacher ID")
})

router.delete("/delete", (req,res) => {
    res.send("remove teachers from database")
})

export default router;