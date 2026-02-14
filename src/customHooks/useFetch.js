import { useEffect, useReducer, useState } from "react";
import { fetchReducer, initialState } from "../reducers/fetchReducer";


export function useFetch(URL){
    const [state,dispatch]=useReducer(fetchReducer,initialState)

    async function DataFetcher(){
        try{
            dispatch({type:"Fetch_start"})
            const res=await fetch(URL)
            const data =await res.json()
            dispatch({type:"Fetch_success",payload:data})
            return data
        }catch(err){
            console.log(err)
            dispatch({type:"Fetch_fail",payload:err})
        }
    }

    useEffect(()=>{
       DataFetcher()
    },[URL])

    return state
} 