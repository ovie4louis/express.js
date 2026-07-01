import express from "express";

const app = express();

//String Pattern Path
app.get("/ab?cd", (req, res) => {
    res.send("if its acd or abcd then run it")
})

app.listen(8000, (req, res) => console.log("Server Up")
)