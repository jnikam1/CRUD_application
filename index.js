const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.listen(process.env.PORT ||6000,()=>{
    console.log("Listening on 6000")

})

mongoose.connect(process.env.MONGOURI)
.then(()=>{
    console.log("Connected to database")
})
.catch((error)=>{
    console.log("Error connecting to database")
})

