import axios from 'axios';
import React, { useState } from 'react'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState({
        type: '',
        message: '',
        status: ''
    })

    const forgotPasswordForm =async (e) => {
       e.preventDefault()

       await axios.post('http://localhost:5050/api/user/recover-password', {email}).then(res=>{

        setMsg({
            type: 'success',
            message: 'Recovery link send Successful',
            status: true
        })

       }).catch(error=>{
            setMsg({
            type: 'danger',
            message: 'Invalid email',
            status: true
        })
       })
      

    }

  return (
    <>

      <div className="forgot-password">
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h1>Forgot your password</h1>
                        </div>
                        <div className="card-body">

                         {msg.status && <p className={`alert alert-${msg.type}`}>{msg.message}</p>}

                            <form onSubmit={forgotPasswordForm} method='POST'>
                                <input className='form-control my-2' type="text" value={email} onChange={e=> setEmail(e.target.value)} placeholder='Email' />
                                <input type="submit" value="Get Link" className="form-control btn btn-primary"  />
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

export default ForgotPassword