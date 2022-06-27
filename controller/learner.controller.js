const LeanerModel = require('../model/learners.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.create = (req,res,next) =>{
    const {learner_name,learner_email,learner_password} = req.body

    LeanerModel.create({
        learner_name,
        learner_email,
        learner_password
    },(err,result)=>{
        if(err)
        next(err)
        else{
            res.status(200).json({
                status: "Success",
                message: "Leaners added successfully",
                data: result
            })
        }
    })
}

// Leaner Login
exports.login = (req,res,next) =>{
    LeanerModel.findOne({email:req.body.email},
        async (err,result)=>{
            if(err){
                next(err)
            }
            else{
                if(bcrypt.compare(req.body.password, result.password)){
                    const token = jwt.sign({id:result._id},req.app.get('secretKey'),{expiresIn:'1h'})
                    await res.status(200).json({
                        status: "Success",
                        message: "Leaner logged in successfully",
                        data: {
                            user:result,
                            token:token
                        }

                    })
                }

            }
    })
}
