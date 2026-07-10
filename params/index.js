import express from  "express"

const app = express()

app.param("id", (req, res, next, id) => {
    console.log(`id:, ${id}`);
    next()
    

})

app.get("/users/:id", ( req, res) => {
    console.log("This is User ID PATH");

    res.send("Respond OK")
    
})

app.listen(8000, () => {
    console.log("Server Up..");
    
})