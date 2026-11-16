import { Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Register() {
   
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    console.log(name , email , password);
     const navigate =useNavigate()
     const register=()=>{
        const userDetails={
            name,
            email,
            password
        }
        if(name=="" || email=="" || password==""){
            alert("please fill the form")
        }
        else{if(userDetails.email in sessionStorage){
            alert("User alredy exist")
        }
            else{
            sessionStorage.setItem(userDetails.email,JSON.stringify(userDetails))
            alert("Register successful")
            navigate('/login')}
        }
     }
    
     
  return (
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:10,mb:23}}>
        <Paper sx={{justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center",width:"200px",padding: 1}}>
            <h1>Register </h1>
        <input onChange={e=>setName(e.target.value)} type="text" placeholder='username' /><br/><br/>
        <input  onChange={e=>setEmail(e.target.value)} type="text" placeholder='email' /><br/><br/>
        <input  onChange={e=>setPassword(e.target.value)} type="text" placeholder='password' /><br /><br />
        <button onClick={register} style={{backgroundColor:"#7254D6",color:"white",padding:8}}>Register</button>
    </Paper>
    </Box>
    
  )
}
