import { Box } from '@mui/material'
import React from 'react'
import Product from './Product'
import { Helmet } from "react-helmet";

import Scroll from './Scroll'

function Laminates() {
  const laminate = [{name:'Embossed Teak',img:'./images/embossed-teak.jpg'},
  {name:'Starry Dark',img:'./images/Starry-dark.jpg'},
  {name:'Rugged Rose Mocha',img:'./images/rugged-rose-mocha.jpg'},
  {name:'Venetino Moon',img:'./images/venetino-moon.jpg'},
  {name:'Ancient Carrara',img:'./images/Ancient-Carrara.jpg'},
  {name:'Aqua Venetinno',img:'./images/Aqua-venetino.jpg'},
  
  
  
];
  return (
    <Box  >
 <head>
     <Helmet>
  <title>Best Laminate Sheets Store in Hyderabad- Subhash Plywood</title>
  <meta name="description" content="Subhash Plywood is the laminate sheets store in Hyderabad. We provide a variety of designs & patterns which match your needs." />
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
      <img src="./images/lami.jpg" alt="veneer" loading="lazy" style={{ width: "100vw",
        
          height: "40vh",  transition: "transform 1.5s ease-in-out", }} 
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          
          />
        <h1 style={{ fontSize: "5vw", color: "white",position:'absolute' }}>LAMINATES</h1>
      </Box>
      <Box sx={{pl:{md:'100px',sm:'30px',xs:'10px'},pr:{md:'100px',sm:'30px',xs:'10px'}}}>
        <h1>ABOUT LAMINATES</h1>
        <p style={{textAlign:'center'}}>Laminate is a versatile and cost-effective flooring option that has become increasingly popular in recent years. It's made up of multiple layers of materials, including a high-density fiberboard core, a photographic layer that mimics the appearance of natural materials, and a protective wear layer that provides durability and scratch resistance.</p>
        </Box>
      <Box sx={{p:{md:'50px',xs:'8px'}}}>
      <Scroll arr={laminate}>
 

      </Scroll >
     
      
      <h2 style={{textAlign:'center',padding:'40px',color:"rgb(133, 94, 66)"}}>LAMINATES PRODUCTS</h2>
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

export default Laminates