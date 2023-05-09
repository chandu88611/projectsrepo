import { Box } from '@mui/material'
import React from 'react'
import Product from './Product'
import Scroll from './Scroll'
import { Helmet } from "react-helmet";


function Hardware() {
 


const laminate = [
  {name:'Mattblackwhite ',img:'./images/Mattblackwhite-hardware.jpg'},
  {name:'Matt ',img:'./images/Matt-hardware.jpg'},
  {name:'Rosegold ',img:'./images/rosegold-hardware.jpg'},
  {name:'CP white.jpg',img:'./images/CPwhite-hardware.jpg'},
  {name:'Cp wood',img:'./images/Cpwood-hardware.jpg'},
  {name:'Black white',img:'./images/blackwhite-hardware.jpg'}
];
  return (
    <Box  >
       <head>
     <Helmet>
  <title>Best Hardware Store in Hyderabad- Subhash Plywood</title>
  <meta name="description" content="Subhash Plywood is the best hardware store in Hyderabad. We provide a variety of designs & patterns which match your needs." />
</Helmet>

     </head>
         <Box
        sx={{
        
          width: "100%",
          height: {md:"45vh",xs:"20vh"},
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
         
          overflow:'hidden'
        }}
      > 
      <img src="./images/handles1.jpg" alt="veneer"  loading="lazy" style={{ width:"100%",height:'100%',
        
          transition: "transform 1.5s ease-in-out" }} 
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          
          />
        <Box sx={{width:'100%',height: {md:"45vh",xs:"20vh"},top:0,left:0,position:"absolute"}}></Box>
        <h1 style={{ fontSize: "5vw", color: "white",position:'absolute' ,background:'rgb(0,0,0,.2)',padding:'20px'}}>HARDWARE</h1>
      </Box>
      <Box sx={{pl:{md:'100px',sm:'30px',xs:'10px'},pr:{md:'100px',sm:'30px',xs:'10px'}}}>
        <p style={{textAlign:'center'}}></p>
        </Box>
        <Box sx={{pl:{md:'100px',sm:'30px',xs:'10px'},pr:{md:'100px',sm:'30px',xs:'10px'}}}>
          <h1>ABOUT HARDWARE</h1>
        <p style={{textAlign:'center'}}>
Handles are an essential element of any furniture or cabinetry. They not only provide functionality but also add aesthetic value to your home decor. At our showroom, we offer a wide range of handle products, from traditional to modern designs, that will help elevate the look and feel of your space.
</p>
        </Box>

      <Box sx={{p:{md:'50px',xs:'8px'}}}>
      <Scroll arr={laminate}>
 

      </Scroll >
     
      
      <h2 style={{textAlign:'center',padding:'40px',color:"rgb(133, 94, 66)"}}>HARDWARE PRODUCTS</h2>
      <Box sx={{display:'grid',p:'15px',justifyContent:"center",gridTemplateColumns:{md:"22vw 22vw 22vw",sm:'40vw 40vw',xs:'80vw'},pt:'30px',pb:'40px',pl:'30px',pr:'30px',gridGap:'15px'}}>
      <Product img={laminate[0].img} tit={laminate[0].name}/>
      <Product img={laminate[1].img} tit={laminate[1].name}/>
      <Product img={laminate[2].img} tit={laminate[2].name}/>
      <Product img={laminate[3].img} tit={laminate[3].name}/>
      <Product img={laminate[4].img} tit={laminate[4].name}/>
      <Product img={laminate[5].img} tit={laminate[5].name}/>




      </Box></Box>
        </Box>
  )
}

export default Hardware



