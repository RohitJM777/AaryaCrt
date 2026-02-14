import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount } from '../slices/countSlice'

function Login() {
  const {Login}=useContext(AuthContext)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {count}=useSelector((state)=>state.count)


  console.log(Login)
  return (
  <>
    <div>Login</div>
    {count}
    <button onClick={()=>dispatch(incrementCount())} >Increment</button>
    <button onClick={()=>dispatch(decrementCount())}  >Decrement</button>
    <button >Go To register</button>

    <button onClick={()=>Login()}>Login</button>
    <button onClick={()=>navigate("/products")}>Products View</button>
  </>
  )
}

export default Login