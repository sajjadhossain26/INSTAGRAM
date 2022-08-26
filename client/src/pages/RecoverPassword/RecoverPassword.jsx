import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createtost, createtostSuccess } from '../../utility/Toast';

const RecoverPassword = () => {

    const [new_password, setNewPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')

    const {token} = useParams()
    const navigate = useNavigate()

    const [msg, setMsg] = useState({
        type: '',
        message: '',
        status: ''
    })

    const recoverPasswordForm =async (e) => {
       e.preventDefault()

       try {
         if(!new_password || !confirm_password){
         setMsg({
          type: 'warning',
          message: "Please set the password",
          status: true
        })
       }else if(new_password !== confirm_password){
        setMsg({
          type: 'danger',
          message: "password not matched",
          status: true
        })
       }else{

         await axios.post('http://localhost:5050/api/user/reset-password', {token, password: new_password}).then(res=>{
          
         createtostSuccess('Password changed successful')

         navigate('/login')
          
         }).catch(error=>{
            createtost('token time expired')
         })

         setMsg({
          type: '',
          message: '',
          status: ''
         })
       }
       } catch (error) {
         createtost('try again!')
       }

    

    }

  return (
    <>

      <div className="forgot-password">
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h1>Recover your password</h1>
                        </div>
                        <div className="card-body">

                         {msg.status && <p className={`alert alert-${msg.type}`}>{msg.message}</p>}

                            <form onSubmit={recoverPasswordForm} method='POST'>
                                <input className='form-control my-2' type="password" value={new_password} name='password'  onChange={e=> setNewPassword(e.target.value)} placeholder='New Password' />

                                 <input className='form-control my-2' type="password" value={confirm_password} name='confirm_password' onChange={e=> setConfirmPassword(e.target.value)} placeholder='Confirm Password' />

                                <input type="submit" value="Change Password" className="btn btn-primary"  />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default RecoverPassword