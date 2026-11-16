import React, {useEffect,useState} from 'react'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

export default function Dashboard() {

  let  baseUrl="https://api.slingacademy.com/v1/sample-data/users"

  const [user,setUser]=useState([])
  const [search,setSearch] = useState("")
  const getUserDetails=async()=>{
    try{
      const response = await fetch(baseUrl)
      console.log(response);
      const data=await response.json()
      console.log(data);
      setUser(data.users)
      
      
    }
    catch(err){
      console.log("API Error",err);
      
    }
  }

  useEffect(() => {getUserDetails()}

  ,[])

  const filteredUsers = user.filter(item =>
  item.first_name.toLowerCase().includes(search.toLowerCase())
)

const navigate = useNavigate()

    const navigateToDetails=(id)=>{
        navigate(`/details/${id}`)
    }

  return (
    <div><Box sx={{display:'flex',}}>
      <input type="text" style={{width:500,height:30,marginTop:19,marginLeft:5,position:"relative"}} placeholder="Search user " onChange={e=>setSearch(e.target.value)}/>
      <SearchIcon sx={{position:"absolute",left:480,top:70}} />
    </Box>
      
      
      {
      filteredUsers.length>0?
      filteredUsers.map(item=>(
         <Box key={item.id} sx={{display:"flex",alignItems:'center',p:2,mb:2}}>
        <h1 key={item.id}>{item.first_name}</h1>
        <Button variant="contained" onClick={()=>navigateToDetails(item.id)} sx={{ml:3}}>View Details</Button>
        </Box>
      ))
      :
      "No users found"
    }
    
    </div>
  )
}
