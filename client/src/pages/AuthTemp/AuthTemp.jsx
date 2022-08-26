import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import '../Login/Login.scss'
import './AuthTemp.scss'

const AuthTemp = () => {
  return (
    <div className="login_container">
        <div className="login_wrapper">
           <Container>
             <Row className='justify-content-center'>
                <Col md={5}>
                   <div className="left-img-box">
                    <img src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" alt="" />
                    <img className='absolute-img' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="" />
                   </div>
                </Col>
                <Col md={4}>
                    <div className="right-form">
                      <img className='logo-img' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                       <form action="">
                           <input type="text" placeholder='Phone, Username or Email' className='form-control'/>

                        <input type="text" placeholder='Password' className='form-control'/>

                        <input className='submit-btn' type="submit" value="Log in" />
                       </form>

                       <div className="divider">
                        OR
                       </div>

                       <a href="#" className='login-facebook'><FaFacebook/> Log in with facebook</a>
                       <a href="#" className='forgot-password'>Forgot Password?</a>
                       
                     
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

export default AuthTemp