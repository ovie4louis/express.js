import express from "express"
import bodyParser from "body-parser"

const app = express();


app.get("/", (req, res) => {
    res.send(" Home page testing")
})
app.use(bodyParser.json())

app.post("/post", (req,res) =>{
    const {name, youTube, age} = req.body
    res.send(`${name}, ${youTube}, ${age}`)
})

app.listen(3000, () => {
    console.log("Testing Server.....");
    
})