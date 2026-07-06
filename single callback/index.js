import express from "express"

const app = express()

app.get("/single-callback", (req, res) => {
    res.send("single callback")
})

app.listen(8000, () => {
    console.log(" server  up");
    
})