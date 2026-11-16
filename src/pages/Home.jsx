import { Box, Button, Paper, Stack } from '@mui/material'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';





export default function Home() {
    const navigate = useNavigate()

    const navigateToRegister=()=>{
        navigate('/register')
    }
    const navigateToLogin=()=>{
        navigate('/login')
    }
  return (
    <Box sx={{justifyContent:"center",display:"flex",p:3,gap:10,mb:37.7,mt:20}}>
      <Stack>
        <h1>New to User Management?</h1>
      <Button variant="contained" onClick={navigateToRegister} sx={{fontSize:20,bgcolor:"#4B2DB8"}}>Register<HowToRegIcon/></Button>
      </Stack>
      <Stack>
        <h1>Already a User?</h1>
         <Button variant="contained" onClick={navigateToLogin} sx={{fontSize:20,bgcolor:'#7254D6'}}>Login<LoginIcon/></Button>
      </Stack>
     
    </Box>
  )
}
