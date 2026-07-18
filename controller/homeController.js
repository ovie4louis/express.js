const homeController = (req, res) => {
const data = {
   //name : "enakarhire ovie louis" 
   userId : 302

}

    res.render("index", data)
}
export {homeController};