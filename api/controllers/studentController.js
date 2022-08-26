import Student from "../models/Student.js"
import bcrypt from 'bcryptjs'
import createError from "./errorController.js"


/**
 * @access public
 * @method GET
 * @route api/student
 */


export const getAllStudents =async (req, res, next) => {
  try {
   const students = await Student.find()
   res.status(200).json(students)
  } catch (error) {
    next(error)
  }
}

/**
 * @access public
 * @method GET
 * @route api/student:id
 */

export const getSingleStudent =async (req, res, next) => {
  const {id} =await req.params


  try {
   const student = await Student.findById(id)
    
    if(!student){
      return next(createError(404, "Single student not found"))
    }
    if(student){
    res.status(200).json(student)
    }

  } catch (error) {
    next(error)
  }
}


/**
 * @access public
 * @method post
 * @route api/student
 */

export const createStudent =async (req, res, next) => {
// bcrypt password
  const salt =await bcrypt.genSalt(10);
  const hash_pass =await bcrypt.hash(req.body.password, salt)

  try {
   const student = await Student.create({...req.body, password: hash_pass})
   res.status(200).json(student)
  } catch (error) {
    next(error)
  }
}


/**
 * @access public
 * @method PUT/PATCH
 * @route api/student:id
 */

export const updateStudent =async (req, res, next) => {
  const {id} =await req.params
   try {
   const student = await Student.findByIdAndUpdate(id, req.body, {new:true})
   res.status(200).json(student)
  } catch (error) {
   next(error)
  }
}


/**
 * @access public
 * @method delete
 * @route api/student:id
 */

export const deleteStudent =async (req, res, next) => {
  const {id} =await req.params
   try {
   const student = await Student.findByIdAndDelete(id)
   res.status(200).json(student)
  } catch (error) {
    next(error)
  }
}