import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const logOut=()=>{
  sessionStorage.clear()
  navigate('/')
}
  return (
    <div>
     <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{bgcolor:"#230f48"}}>
        <Toolbar variant="dense" sx={{justifyContent:"space-between"}}>
          
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: 'inherit',
            }}
          >
           User Management
          </Typography>
          <Button variant="contained" onClick={logOut} sx={{color:"#FFFFFF",bgcolor:"#4B2DB8"}} >LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}
