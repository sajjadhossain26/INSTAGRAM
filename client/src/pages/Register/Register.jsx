import React from 'react'
import { Link } from 'react-router-dom'
import {Col, Container, Row} from 'react-bootstrap'
import { FaFacebook } from 'react-icons/fa';
import '../Login/Login.scss'
import './Register.scss'
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { useState } from 'react';
import swal from 'sweetalert'
import axios from 'axios';
import { createtost } from '../../utility/Toast';

const Register = () => {
  
  const [input, setInput] = useState({
    email: '',
    name: '',
    username: '',
    password: ''

  })
  console.log(input);
  const handleInput = (e) => {
    setInput((prev)=>({...prev, [e.target.name] : e.target.value }))
  }
  


  // form submit control

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    try {
      if(!input.email || !input.name || !input.username || !input.password){
        //  swal ( "Oops" ,  "All fields are required" ,  "error" )
         createtost('All fields are required')
      }else{
       await axios.post('http://localhost:5050/api/user/register', input).then(res=>{
          setInput((prev)=>({
              email: '',
              name: '',
              username: '',
              password: ''
          }))

          swal ( "Success" ,  "Registration successful" ,  "success" )
        })
       
      }
    } catch (error) {
      console.log(error);
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

                      <p>Sign up to see photos and videos from your friends.</p>

                       <a href="#" className='login-facebook register'><FaFacebook/> Log in with facebook</a>
                       
                       <div className="divider">
                        OR
                       </div>

                       <form onSubmit={handleSubmit}>
                           <input name='email' value={input.email} onChange={handleInput} type="text" placeholder='Phone or Email' className='form-control'/>

                           <input name='name' value={input.name} onChange={handleInput} type="text" placeholder='Full Name' className='form-control'/>

                           <input name='username' value={input.username} onChange={handleInput} type="text" placeholder='Username' className='form-control'/>

                          <input name='password' value={input.password} onChange={handleInput} type="password" placeholder='Password' className='form-control'/>
                          
                          <div className="register-auth-text">
                            <p>People who use our service may have uploaded your contact information to Instagram.<a href='#'> Learn More </a></p>

                            <p>By signing up, you agree to  <a href='#'>our Terms</a> , <a href='#'> Privacy Policy</a> and  <a href='#'>Cookies Policy.</a></p>
                          </div>
                        <input className='submit-btn' type="submit" value="Sign Up" />
                       </form>
     
                    </div>

                      <div className="sign-up">
                          <p>Have an account? <Link to='/login'>Log In</Link></p>
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

export default Register