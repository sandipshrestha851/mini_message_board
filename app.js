const express = require("express")
const path = require("node:path")
const app = express()

const PORT = 3000
//routes
const indexRoutes = require('./routes/indexRoute.js')

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

app.set("views",path.join(__dirname , "views"))
app.set("view engine","ejs")

app.use("/",indexRoutes)


app.listen(PORT,(error)=>{
    if(error){
        throw error
    }else{
        console.log(`App is running on the port ${PORT}`)
    }
})
