import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react'

function Product({img,tit}) {
  const [title,setTitle]=useState()
  const[image,setImage]=useState()
  useEffect(()=>{
setImage(img)
setTitle(tit)
  },[])
  return (
    <Box sx={{p:'10px',border:'1.5px solid brown',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column',m:'5px'}}>
     <Box sx={{p:'10px',borderBottom:'1.5px solid brown'}}>
    
    <img src={image} alt={title} style={{width:'200px',height:'280px'}}/>
     </Box>
      <p>{title}</p> 
    </Box>
  )
}

export default Product