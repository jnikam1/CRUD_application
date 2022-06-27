const CourseModel = require('../model/course.model')

const create = (req,res,next)=>{
    const {course_Id,course_name,course_description} = req.body

    CourseModel.create({
        course_Id,
        course_name,
        course_description
    },(err,result) =>{
        if(err)
            next(err)
        res.status(200).json({
            status:"Success",
            message:"Succesfully added course",
            data: result
        })
    
    })
}

// Find by field
const findByCourseField = (req,res,next) =>{
    CourseModel.findOne(req.body,(err,result) => {
        if(err)
            next(err)
        res.status(200).json({
            status:"Success",
            message:"Succesfully retirived Course by field",
            data: result
        })
    })
}

// Find by ID
const findByCourseID = (req,res,next) =>{
    CourseModel.findOne({_id:req.body.id},(err,result) => {
        if(err)
            next(err)
        res.status(200).json({
            status:"Success",
            message:"Succesfully retrived Course by ID",
            data: result
        })
    })
}


// Delete
const deleteCourseByID = (req,res,next) =>{
    CourseModel.deleteOne({_id:req.params.id},(err,result) => {
        if(err)
            next(err)
        res.status(200).json({
            status:"Success",
            message:"Succesfully Deleted Course by ID",
            data: result
        })
    })
}

module.exports = {create,findByCourseField,findByCourseID,deleteCourseByID}