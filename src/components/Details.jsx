import { Box, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'






export default function Details() {
  let  baseUrl="https://api.slingacademy.com/v1/sample-data/users"
  
    const {id}=useParams()
    const [user,setUser]=useState({})
    const getUserDetails=async()=>{
      try{
        const response = await fetch(`${baseUrl}/${id}`)
        console.log(response);
        const data=await response.json()
        console.log(data);
        setUser(data.user)
        
        
      }
      catch(err){
        console.log("API Error",err);
        
      }
    }
    useEffect(()=>{getUserDetails()},[id])
  return (
   <Box sx={{mb:40}}>
  <h1>User Details</h1>
  <h2>{user.first_name} {user.last_name}</h2>
  <p>Email: {user.email}</p>
  <p>Phone: {user.phone}</p>
  <p>Gender: {user.gender}</p>
  <p>Country: {user.country}</p>
</Box>
  )
}
