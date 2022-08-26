import React, { useState } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import './Login.scss'
import swal from 'sweetalert'
import axios from 'axios';
import cookie from 'js-cookie'
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
import LoaderContext from '../../context/LoaderContext';
import { createtost } from '../../utility/Toast.js';

const Login = () => {
   // use context
    const {dispatch} = useContext(AuthContext)
    const {loaderDispatch} = useContext(LoaderContext)

   // use navigate
    const navigate = useNavigate()

   const [input, setInput] = useState({
      email: '',
      password: ''
   })
   const handleInputLogin = (e) => {
    setInput((prev)=>({...prev, [e.target.name] : e.target.value}))
   }

   const loginformHandle =async (e) => {
     e.preventDefault()

     try {
       
      if(!input.email || !input.password){
        createtost('All fields are required')
      }else{
         await axios.post('http://localhost:5050/api/user/login',input)
         .then(res=>{
           if(res.data.user.isVerified){
             cookie.set('token', res.data.token)
            dispatch({type: 'LOGED_USER_SUCCESSFUL', payload: res.data.user} )
            loaderDispatch({type: 'LOADER_START'})
            navigate('/')
           }else{
            createtost("Please verify you identity")
           }
            

         })
      }
      
     } catch (error) {
        swal ( "Oops" ,  "Email or Password wrong!" ,  "error" )
     }
   }

  return (
    <div className="login_container">
        <div className="login_wrapper">
           <Container>
             <Row className='justify-content-center'>

                <Col md={4}>
                    <div className="right-form">
                      <img className='logo-img' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />

                       <form onSubmit={loginformHandle}>

                        <input type="text" name='email' onChange={handleInputLogin} value={input.email} placeholder='Phone, Username or Email' className='form-control'/>

                        <input type="password" name='password' onChange={handleInputLogin} value={input.password} placeholder='Password' className='form-control'/>

                        <input className='submit-btn' type="submit" value="Log in" />
                       </form>

                       <div className="divider">
                        OR
                       </div>

                       <a href="#" className='login-facebook'><FaFacebook/> Log in with facebook</a>
                       <Link to="/forgot-password" className='forgot-password'>Forgot Password?</Link>
                       
                     
                    </div>

                      <div className="sign-up">
                          <p>Don't have an account? <Link to='/register'>Sign Up</Link></p>
                       </div>

                     <div className="get-app">
                        <p>Get The App</p>
                        <div className="get-app-img">
                           <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />

                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
                        </div>
                     </div>
                </Col>

                <AuthFooter/>
             </Row>
           </Container>
        </div>
    </div>
  )
}

export default Login