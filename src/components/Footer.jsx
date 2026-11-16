import React from 'react'
import { Box } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
  return (
    <div>
     <Box sx={{ bgcolor:'#230f48',color:'white',p:3,marginTop:'60px',padding:'45px 70px 20px'}}>
  <Box style={{display:"flex",justifyContent:"space-between",gap:6,flexWrap:'wrap',marginBottom:4}}>
    <div style={{width:"55%"}}><h3>User Management</h3>
      <p>Manage user information easily with a simple and user-friendly interface. This User Management system allows you to register, log in, view user details, and manage user records efficiently.

With features like user registration, authentication, profile management, and CRUD operations, the application makes handling user information organized and convenient.</p>
      
     </div>
     <div style={{width:"30%"}}>
      <h2>Contact Us</h2>
      <h5 style={{display:"flex",alignItems:"center",gap:"10px"}}><EmailIcon/>resumebuilder@gamil.com</h5>
      <h5 style={{display:"flex",alignItems:"center",gap:"10px"}}><PhoneIcon/>9511129170</h5>
     </div>
  </Box>
</Box>
    </div>
  )
}
