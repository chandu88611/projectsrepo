import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import  "./Home.css"

function ProductLisst({qu,des,img,ur }) { 
const[Q,setQ]=useState("")
const[A,setA]=useState("")
const[I,setI]=useState("")
const[url,setUrl]=useState("")


useEffect(()=>{
    setA(des)
    setQ(qu)
    setI(img)
    setUrl(ur)
})


  return (
    <Box  className="parent">
      <Box>
        <img
          src={I}
          alt="dc" loading="lazy"
          style={{ width: "100%", height: "280px" }}
        />
      </Box>
 <Box sx={{background:"rgb(255,255,255,0.6)",p:'5px',pt:0}} className="text">
        <p style={{fontSize:'18px',fontFamily:"sans-serif"}}>
      {Q}
        </p> 
        <span style={{fontSize:'12px'}}>
         {A}
        </span><br/> <br/>
        <a href={url} style={{textDecoration:'none',color:'black'}}> <Button variant="outlined" sx={{color:'brown',borderColor:'brown',"&:hover":{borderColor:'brown'}}}>View More</Button>
        </a>  </Box> 

    </Box>
  );
}

export default ProductLisst;
