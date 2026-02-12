import { createContext, useState } from "react";

export const AuthContext=createContext()

export function AuthContextProviderWrapper({children}){
    const [user,setUser]=useState("")
    const [loading,setLoading]=useState(false)
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [role,setRole]=useState("")

    function Login(user){
        setLoading(true)
        setUser({email:"vikas@gmail.com", role:"developer", phoneNumber:"4243432432"})
        setIsLoggedIn(true)
        setRole("developer")
        console.log("user logged in")
        setLoading(false)
    }

    function Logout(){
        setUser("")
        setIsLoggedIn(false)
        setRole("")
    }

    return(
        <>
         <AuthContext.Provider value={{user,isLoggedIn,role,Login,Logout,loading}}>
          {children}
         </AuthContext.Provider>
        </>
    )
}
