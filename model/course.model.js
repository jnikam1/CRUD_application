const mongoose = require('mongoose')

const CoursesModel = mongoose.Schema({

    course_Id:{
        type:String,
        required:true
    },
    course_name:{
        type:String,
        required:true
    },
    course_description:{
        type:String,
        required:true
    }
})



module.exports = mongoose.model('course',CoursesModel)