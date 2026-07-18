import  express from "express"
import path from "path"
import route from "./routesd/route.js"
const app = express()

app.set('view engine', "ejs")

//app.use(express.static(join(process.cwd(), "public")))

app.use("/", route)

app.listen(8000, () => {
    console.log("Server UP....louis");
    
})