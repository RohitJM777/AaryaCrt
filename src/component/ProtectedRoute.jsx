import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) { 
  const {loading,isLoggedIn}=useContext(AuthContext)
  if(loading) return <div>Loading.... </div>
  if(!isLoggedIn) return <Navigate to={"/login"} />
  return (
    <>
    {children}
    </>
  )
}

export default ProtectedRoute