import express from "express"

const app = express();
// regex

/*app.get(/x/, (req,res) => {
    res.send("yes we it can work")
})
*/

//user with four digit

/* app.get(/^\/users\/[0-9]{4}$/, (req,res) => {
    res.send("Working")
})*/

// for product

app.get("/products/iphones", (req, res) => {
    res.send("The product is available")
})

app.listen(8000, () => console.log("Server up..")
)