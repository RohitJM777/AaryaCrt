import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Login() {
  const {Login}=useContext(AuthContext)
  console.log(Login)
  return (
    <div>Login</div>
  )
}

export default Login