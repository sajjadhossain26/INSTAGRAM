import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import Token from '../models/Token.js'
import createError from "./errorController.js"
import jwt from "jsonwebtoken"
import { sendEmail } from '../utility/sendEmail.js'
import { sendSms } from '../utility/sendSms.js'
import { createToken } from '../utility/createToken.js'

/**
 * @access public
 * @method GET
 * @route api/user
 */


export const getAllUser =async (req, res, next) => {
  try {
   const users = await User.find()
   res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}

/**
 * @access public
 * @method GET
 * @route api/user:id
 */

export const getSingleUser =async (req, res, next) => {
  const {id} =await req.params


  try {
   const user = await User.findById(id)
    
    if(!user){
      return next(createError(404, "Single user not found"))
    }
    if(user){
    res.status(200).json(user)
    }

  } catch (error) {
    next(error)
  }
}


/**
 * @access public
 * @method post
 * @route api/user
 */

export const createUser =async (req, res, next) => {
// bcrypt password
  const salt =await bcrypt.genSalt(10);
  const hash_pass =await bcrypt.hash(req.body.password, salt)

  try {
   const user = await User.create({...req.body, password: hash_pass})
   res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}


/**
 * @access public
 * @method PUT/PATCH
 * @route api/user:id
 */

export const updateUser =async (req, res, next) => {
  const {id} =await req.params
   try {
   const user = await User.findByIdAndUpdate(id, req.body, {new:true})
   res.status(200).json(user)
  } catch (error) {
   next(error)
  }
}


/**
 * @access public
 * @method delete
 * @route api/user:id
 */

export const deleteUser =async (req, res, next) => {
  const {id} =await req.params
   try {
   const user = await User.findByIdAndDelete(id)
   res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

/**
 * @access public
 * @method post
 * @route api/user/login
 */

export const userLogin =async (req, res, next) => {
  try {
    // find user
    const user_login = await User.findOne({email: req.body.email})

    // check user exist or not
    if(!user_login){
        return next(createError(404, "User not found"))
    }
    // check password
    const user_password = await bcrypt.compare(req.body.password, user_login.password)
    if(!user_password){
        return next(createError(404, "password not matched"))
    }
    // create token
    const token = jwt.sign({id:user_login._id, isAdmin: user_login.isAdmin}, process.env.JWT_SECRET)

    // remove some data from user_login
    const {password, isAdmin, ...login_info } = user_login._doc
    res.cookie("access_token", token).status(200).json({
        token : token,
        user: login_info
    })
  } catch (error) {
    next(error)
  }
}



/**
 * @access public
 * @method post
 * @route api/user/register
 */

export const userRegister =async (req, res, next) => {
// bcrypt password
  const salt =await bcrypt.genSalt(10);
  const hash_pass =await bcrypt.hash(req.body.password, salt)

  try {
   const user = await User.create({...req.body, password: hash_pass})
   const token = createToken({id: user._id})
   const verify_link = `http://localhost:3000/user/${user._id}/verify/${token}`

  //  token update
 await Token.create({userId: user._id, token: token})

   sendEmail(user.email, "Instagram", verify_link)

   res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}



/**
 * @access public
 * @method get
 * @route api/user/me
 */

export const getLoggedInUser =async (req, res, next) => {
  try {
    
  const bearer_token = req.headers.authorization;
   let token = ''

   if(bearer_token){
    token = bearer_token.split(' ')[1];

    const logged_in_user = jwt.verify(token, process.env.JWT_SECRET)

        if(!logged_in_user){
          next(createError(400, 'Invalid token'))
        }

        if(logged_in_user){
          const user =await User.findById(logged_in_user.id)
          res.status(200).json(user)
        }
   }

   if(!bearer_token){
    next(createError(404, "token not found"))
   }

  
  } catch (error) {
    console.log(error);
  }
}

/**
 * @access public
 * @method post
 * @type api/user/me
 */

export const verifyUser =async (req, res, next) => {
   try {

      const {id, token} = req.body

      const verify = await Token.findOne({id: id, token: token})
      
      if(!verify){
        next(createError(404, "Invalid verify url"))
      }
      if(verify){
        await User.findByIdAndUpdate(id, {
          isVerified: true
        })
        res.status(200).json({message: "User verified successful"})
        verify.remove()
      }
    
   } catch (error) {
    console.log(error);
   }
   
}


/**
 * password recover link
 * @access public
 * @method post
 * @type api/user/password-recover
 */

export const recoverPassword =async (req, res, next) => {
    
  try {

    const {email} = req.body
    
    const recover_user = await User.findOne({email})

    if(!recover_user){
      res.status(404).json({
        message: "User doesn't exist"
      })
    }

    if(recover_user){
       
      const token = createToken({id: recover_user._id}, '1m')

      const recover_url = `http://localhost:3000/recover-password/${token}`

      sendEmail(recover_user.email, "Forgot Your Password", recover_url)

      res.status(200).json("Forgot email send")
    }

    
  } catch (error) {
    console.log(error);
  } 

}


// reset password

export const resetPassword =async (req, res, next) => {
   try {

    const {token, password} = req.body
    
    // user id 
    const {id} = jwt.verify(token, process.env.JWT_SECRET)
    
    // bcrypt password
    const salt =await bcrypt.genSalt(10);
    const hash_pass =await bcrypt.hash(password, salt)

    // user find 
    if(id){
      const user_find = await User.findByIdAndUpdate(id, {
        password: hash_pass
      })
      res.send("Password changed successful")
    }
    
   } catch (error) {
     next(createError('Time Out'))
   }
}