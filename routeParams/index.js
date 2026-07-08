import express from "express"

const app = express()
/*
app.get("/economics/products/:id", (req, res) => {
    // to get ID
    res.send(req.params.id)
    //res.send("User Delete")
})
*/ // Multiple parameter
/*app.get("/ecom/products/iphone/:model", (req, res) => {
    const {model} = req.params
    res.send(`Iphone ${model} Pro Max`)
})*/

/*app.get("/products/:category/:id", (req,res) =>{
    const {category, id} = req.params
    res.send(`Product Iphone (${category}) & Product id (${id})`)
})
*/
app.get("/products/order/:day/:month/:year", (req, res) => {
    const {day, month, year} = req.params
    res.send(`Products order on the ${day}/${month}/${year}`)
})

app.listen(8000, () => {
    console.log("Server Up...");
    
})