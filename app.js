const express = require("express")
const mongoose = require('mongoose')
const app = express()


// connection to mongodb
mongoose.connect("mongodb://localhost:27017/")


// middlewares connection
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


// routes
app.use(require( "./routes/index"));
app.use(require( "./routes/todos"));

// server configurations
app.get("/", (req,res) => {
    res.send("Hello Guys")
})
app.listen(4001, () => console.log("Server started listening on port: 4001"))
