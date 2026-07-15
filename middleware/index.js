import express from "express"
import products from "./products.js"

/*

1) request

2) middleware

3)response
*/

const app = express()
//console.clear();

function userCredentials(req, res, next){
    console.log("username: (OVIE)");
    console.log("email: (ovie@gmail.com)");
    console.log("password: (ovie222)");
    console.log("age: (10)");
    next()
    
    
}

app.get("/", (req,res,) => {
    
})

app.listen(8000, () => {
    console.log("SERVER UP");
    
})
