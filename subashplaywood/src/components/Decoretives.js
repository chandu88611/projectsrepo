import { Box } from '@mui/material'
import React from 'react'
import Scroll from './Scroll';
import Product from './Product';
import { Helmet } from "react-helmet";
function Decoretives() {
 
const laminate =[
  {name:'5808 Silver',img:'./images/5808silver.jpg'},
  {name:'9004',img:'./images/9004.jpg'},
  {name:'T804',img:'./images/T804.jpg'},
  {name:'Fadwud Collection 4702',img:'./images/decora-fadwudcollection4702.jpg'},
  {name:'Parametricmdfpane l3501',img:'./images/decora-parametricmdfpanel3501.jpg'},
  {name:'7704',img:'./images/decorative-7704.jpg'}]
  return (
    <Box>
     <head>
     <Helmet>
  <title>Best Interior Decorative Store in Hyderabad- Subhash Plywood</title>
  <meta name="description" content="Subhash Plywood is the best interior decorative store in Hyderabad. We provide a variety of designs & patterns which match your needs" />
</Helmet>

     </head>
      
      <Box
        sx={{
          // backgroundImage: "url(./images/veneerpage2.jpg)",
          width: "100%",
          height: {md:"45vh",xs:"20vh"},
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
         
          overflow:'hidden'
        }}
      > 
      <img src="./images/veneer1.jpg" alt="veneer" loading="lazy" style={{ width: "100vw",
        
          height: "60vh",  transition: "transform 1.5s ease-in-out", }} 
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          
          />
        <h1 style={{ fontSize: "5vw", color: "white",position:'absolute' }}>DECORATIVES</h1>
      </Box>
      <Box sx={{pl:{md:'100px',sm:'30px',xs:'10px'},pr:{md:'100px',sm:'30px',xs:'10px'}}}>
        <h1>ABOUT DECORATIVES</h1>
        <p style={{textAlign:'center'}}>
        Decoratives are a great way to add personality and style to any room in your home. From eye-catching wall art to decorative vases and sculptures, there are countless options to choose from to elevate your home decor.</p>
        </Box>
      <Box sx={{p:{md:'50px',xs:'8px'}}}>
      <Scroll arr={laminate}>
 

      </Scroll >
     
      
      <h2 style={{textAlign:'center',padding:'40px',color:"rgb(133, 94, 66)"}}>DECORATIVE PRODUCTS</h2>
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

export default Decoretives