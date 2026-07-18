import  express from "express"

import path from "path"

const app = express()

app.use(express.static(join(process.cwd(), "public")))

app.get("/", (req,res) => {
    res.sendFile(path.join(process.cwd(), "./public/index.html"))
})

app.listen(8000, () => {
    console.log("Server UP....");
    
})