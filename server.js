const express = require('express')
const app = express()
const controller = require('./controllers/pieController.js')

const port = process.env.port || 3141

app.use(express.static("public"))
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended:true})); // to support URL-encoded bodies

app.get("/pieTypes", controller.getPieTypes)
app.get("/pie/:id", controller.getPie)

app.post("/pie", controller.createPie)

app.listen(port, function(){
   console.log(`Server Listening on ${port}`)
})