const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const leanerRouter = require('./routes/leaners.routes')

const app = express()

// const verifyJWT = (req,res,next) =>{
//     jwt.verify(req.headers['x-access-token'],req.app.get('secretKey'),
//     (err,decoded)=>{
//         if(err){
//             next(err)
//         }else{
//             next()
//         }
//     })
// }


app.get('/',(req,res)=>{
    res.send("Welcome to Leaners App")
})

app.use(bodyParser.json())

app.use('/leaner',leanerRouter)


app.listen(process.env.PORT ||6000,()=>{
    console.log("Listening on 6000")

})


// app.set('secretKey','ahdshdhfjss')

mongoose.connect(process.env.MONGOURI)
.then(()=>{
    console.log("Connected to database")
})
.catch((error)=>{
    console.log("Error connecting to database")
})

