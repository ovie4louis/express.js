import express from "express"

const app = express()
// query string
app.get("/product", (req,res) => {
   // res.send(`Respond OK  ${req.query.category}`)
   const {category, id} = req.query

   res.send(`Product Category : ${category} & Product Id :${id} `)
})

app.listen(8000, () => {
    console.log("Server up....");
    
})