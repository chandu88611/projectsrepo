import { Box, Button } from '@mui/material'
import React from 'react'

function Notfound() {
  return (
    <Box sx={{display:{lg:'flex',md:'flex',xs:'block'},justifyContent:'space-around',m:{md:'60px',xs:'10px'},background:"rgb(200,200,200,.25)"}}>
<Box sx={{display:'flex',alignItems:'center',fontSize:'30px',flexDirection:"column",pt:{md:"100px",xs:'0'}}}>
    <h1>
        Page <span style={{color:'red'}}> 404</span> <br/>
        Not Found
    </h1>
    <a href="/"> <Button sx={{color:"rgb(216, 159, 13)",border:" 1px solid rgb(216, 159, 13)"}} variant="outlined">
     Home page
    </Button></a>  
    </Box>
    <Box sx={{width:{md:"50%",xs:"100%"},mt:"20px"}}>
    <img  src="./images/404s.webp" alt="404 img" style={{width:"100%"}}/>
</Box>
</Box>
  )
}

export default Notfound