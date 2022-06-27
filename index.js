const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");
const bodyParser = require("body-parser");
require("dotenv").config()

const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"))
const PORT = process.env.PORT || 3000;



app.get("/", (req, res)=>{
    res.render("patients")
})


app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
})

