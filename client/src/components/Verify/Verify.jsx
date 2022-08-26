
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { createtost, createtostSuccess } from '../../utility/Toast'

const Verify = () => {

    const params = useParams()
    const navigate = useNavigate()
    
    useEffect(()=>{
     
        axios.post('http://localhost:5050/api/user/verify', params).then(res=>{

         createtostSuccess("Account activation successful")
         navigate('/login')

        }).catch(error=>{
         createtost("Account activation failed")
        })
     
    })

  return (
    
    <div>Verify</div>
  )
}

export default Verify