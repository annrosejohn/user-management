import { Box, Paper } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function Login() {
   
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    console.log( email , password);
     const navigate =useNavigate()
     const Login=()=>{
        const userDetails={
            email,
            password
        }
        if(email=="" || password==""){
            alert("please fill the form")
        }
      else if(userDetails.email in sessionStorage) {
            const storedUser = JSON.parse(sessionStorage.getItem(email))

            if(storedUser.password === password) {
                alert("Login successful")
                navigate('/Dashboard')
            }
            else {
                alert("Incorrect password")
            }
        }
        else {
            alert("User not found. Please register first.")
        }
           
        
     }
    
     
  return (
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:10,mb:30}}>
    <Paper  sx={{justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center",width:"200px",padding: 1}}>
        <h1>Login</h1>
        <input  onChange={e=>setEmail(e.target.value)} type="text" placeholder='email' /><br/><br/>
        <input  onChange={e=>setPassword(e.target.value)} type="text" placeholder='password' /><br /><br />
        <button onClick={Login} style={{backgroundColor:"#7254D6",color:"white",width:56,padding:8}}>login</button>
    </Paper>
    </Box>
    
  )
}
