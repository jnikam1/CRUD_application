const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const LearnersModel = mongoose.Schema({

    learner_name:{
        type:String,
        required:true
    },
    learner_email:{
        type:String,
        required:true
    },
    learner_password:{
        type:String,
        required:true
    }
})

// LearnersModel.pre('save', function(next){
//     const SaltRounds = 10
//     this.password = bcrypt.hashSync(this.password,SaltRounds)
//     next()
// })


module.exports = mongoose.model('leaner',LearnersModel)