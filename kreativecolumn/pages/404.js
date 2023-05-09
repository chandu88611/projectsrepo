// import React from 'react'
import { Button } from "@mui/material"
import { Box } from "@mui/system"
import Head from "next/head";
import Link from "next/link";
// import Layout from "../Components/Layout"

function Four() {
  return (
    <>
     <Head>
        <title>404</title>
        <meta
          name="description"
          content="not found."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.jpg" />
      </Head>
<Box sx={{display:{md:"flex",xs:'block'},justifyContent:'center',alignItems:'center',pt:'80px'}}>
<Box sx={{display:'flex',alignItems:'center',fontSize:'30px',flexDirection:"column",pt:{md:"10px",xs:'0'},position:{md:'absolute',xs:'static'},zIndex:3,color:{md:'white',xs:'black'},justifyContent:'center'}}>
    <h1>
        Page <span style={{color:'rgb(216, 159, 13)'}}> 404</span> <br/>
        Not Found
    </h1>
    <Link href="/"> <Button sx={{color:{md:"white",xs:'rgb(216, 159, 13)'},border:{md:" 1px solid white",xs:'1px solid rgb(216, 159, 13)'}}} variant="outlined">
     Home page
    </Button></Link>  
    </Box>
    <Box>
    <img  src="/image-404.jpg" alt="404 img" style={{width:{lg:'80vw',md:"80vw",xs:'100vw'},height:{lg:'80vw',md:'80vh',xs:"40vh"}}}/>
</Box>
<Box sx={{position:{md:'absolute',xs:'static'},width:'70vw',height:'70vh',background:"rgb(0,0,0,.2)" ,display:{md:'block',xs:'none'}}}></Box>
</Box>

    </>
  )
}

export default Four