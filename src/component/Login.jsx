import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const {Login}=useContext(AuthContext)
  const navigate=useNavigate()
  console.log(Login)
  return (
  <>
    <div>Login</div>
    <button onClick={()=>Login()}>Login</button>
    <button onClick={()=>navigate("/products")}>Products View</button>
  </>
  )
}

export default Login