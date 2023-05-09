import { Box } from '@mui/material'
import React from 'react'
import Product from './Product'
import { Helmet } from "react-helmet";
import Scroll from './Scroll'

function Playwood() {
  const laminate= [
    { name: " Chequered ply", img: "./images/Plywood1.jpg" },
    { name: " board Birch wood", img: "./images/plywood2.jpg" },
    { name: "High density fibre", img: "./images/plywood3.jpg" },
    { name: "Rub wood", img: "./images/plywood4.jpg" },
    { name: "Oriented Standboard", img: "./images/plywood5.jpg" },
    { name: "Shuttering ply", img: "./images/plywood6.jpg" },
    { name: "Multiwood", img: "./images/plywood7.jpg" },
  
  ];
 
  return (
    <Box sx={{}}>
 <head>
     <Helmet>
  <title>Premium Quality Plywood Store in Hyderabad- Subhash Plywood
</title>
  <meta name="description" content="Subhash Plywood is the best premium quality plywood store in Hyderabad. We provide a variety of designs & patterns which match your needs." />
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
      <img src="./images/image_1.jpg"  alt="veneer" loading="lazy" style={{ width: "100vw",
        
          height: "40vh",  transition: "transform 1.5s ease-in-out", }} 
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          
          />
        <h1 style={{ fontSize: "5vw", color: "white",position:'absolute' }}>PLYWOOD</h1>

      </Box>
      <Box sx={{pl:{md:'100px',sm:'30px',xs:'10px'},pr:{md:'100px',sm:'30px',xs:'10px'}}}>
      <h1>ABOUT PLYWOOD</h1>
        <p style={{textAlign:'center'}}>Plywood is a versatile building material that's used in a wide range of construction projects. It's made from thin layers of wood veneer that are glued together to create a strong and durable sheet. At Subhash Plywood, we specialize in providing high-quality plywood products that meet the needs of builders, architects, and homeowners alike.</p>
        </Box>
      <Box sx={{p:{md:'50px',xs:'8px'}}}>
      <Scroll arr={laminate}>
 

      </Scroll >
      <h2 style={{textAlign:'center',padding:'40px',color:"rgb(133, 94, 66)"}}>OUR STORE PRODUCTS</h2>
      <Box sx={{display:'grid',p:'15px',justifyContent:"center",gridTemplateColumns:{md:"22vw 22vw 22vw",sm:'40vw 40vw',xs:'80vw'},pt:'30px',pb:'40px',pl:'30px',pr:'30px',gridGap:'15px'}}>
      <Product img="./images/Power_Ply.webp" tit="Power Ply"/>
      <Product img="./images/Mount-Club-Ply.webp" tit="Mount-Club-Ply"/>
      <Product img="./images/VIR-ply.webp" tit="VIR ply" />
      <Product img="./images/Globus-Marine-Ply.webp" tit="Globus Marine Ply" />
     




      </Box>

      
      <h2 style={{textAlign:'center',padding:'40px',color:"rgb(133, 94, 66)"}}>PLYWOOD PRODUCTS</h2>
      <Box sx={{display:'grid',p:'15px',justifyContent:"center",gridTemplateColumns:{md:"22vw 22vw 22vw",sm:'40vw 40vw',xs:'80vw'},pt:'30px',pb:'40px',pl:'30px',pr:'30px',gridGap:'15px'}}>
      <Product img={laminate[0].img} tit={laminate[0].name}/>
      <Product img={laminate[1].img} tit={laminate[1].name}/>
      <Product img={laminate[2].img} tit={laminate[2].name}/>
      <Product img={laminate[3].img} tit={laminate[3].name}/>
      <Product img={laminate[4].img} tit={laminate[4].name}/>
      <Product img={laminate[5].img} tit={laminate[5].name}/>




      </Box>
      
      </Box>
    </Box>
  )
}

export default Playwood