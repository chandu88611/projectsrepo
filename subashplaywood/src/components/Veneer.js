import { Box } from "@mui/material";
import React from "react";

import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Home.css";
import Product from "./Product";
import "swiper/css";
import Scroll from "./Scroll";
import { Helmet } from "react-helmet";


function Veneer() {
  
  const laminate= [
  {name:"Rust Calabria Stone",img:'./images/Rust-calabria-stone.jpg'},
  {name:"Sorbet",img:"./images/sorbet.jpg"},
  {name:"Bagheera Walnut",img:"./images/Bagheera-walnut.jpg"},
  {name:"Ancient Carrara",img:"./images/Ancient-Carrara.jpg"},
  {name:"Slit Oak",img:"./images/split-oak.jpg"},
  
  ];

  

  return (
    <Box>
       <head>
     <Helmet>
  <title>Best Veneer Wood Store in Hyderabad- Subhash Plywood</title>
  <meta name="description" content="Subhash Plywood is the best veneer wood store in Hyderabad. We provide a variety of designs & patterns which match your needs." />
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
      <img src="./images/veneer1.jpg" loading="lazy" alt="veneer" style={{ width: "100vw",
        
          height: "60vh",  transition: "transform 1.5s ease-in-out", }} 
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          
          />
        <h1 style={{ fontSize: "5vw", color: "white",position:'absolute' }}>VENEER</h1>
      </Box>
      <Box sx={{pl:{md:'100px',sm:'30px',xs:'10px'},pr:{md:'100px',sm:'30px',xs:'10px'}}}>
      <h1 >ABOUT VENEERS</h1>
        <p style={{textAlign:'center'}}>Veneer is a thin layer of wood that's used to cover a variety of surfaces, from furniture to walls and floors. It's made by peeling or slicing a log into thin sheets, which are then glued to a substrate, such as particleboard or MDF, to create a flat and even surface.</p>
        </Box>
      <Box sx={{p:{md:'50px',xs:'8px'}}}>
      <Scroll arr={laminate}>
 

      </Scroll >
      <h2 style={{textAlign:'center',padding:'40px',color:"rgb(133, 94, 66)"}}>OUR STORE PRODUCTS</h2>
      <Box sx={{display:'grid',p:'15px',justifyContent:"center",gridTemplateColumns:{md:"22vw 22vw 22vw",sm:'40vw 40vw',xs:'80vw'},pt:'30px',pb:'40px',pl:'30px',pr:'30px',gridGap:'15px'}}>
      <Product img="./images/153-23.webp" tit="153-23"/>
      <Product img="./images/163-20.webp" tit="163-20"/>
      <Product img="./images/301-19.webp" tit="301-19" />
      <Product img="./images/470-21.webp" tit="470-21" />
      <Product img="./images/470-21.webp" tit="470-21" />
      <Product img="./images/537-18.webp" tit="537-18" />
      <Product img="./images/557-30.webp" tit="557-30" />


     




      </Box>
      
      <h2 style={{textAlign:'center',padding:'40px',color:"rgb(133, 94, 66)"}}>VENEER PRODUCTS</h2>
      <Box sx={{display:'grid',p:'15px',justifyContent:"center",gridTemplateColumns:{md:"22vw 22vw 22vw",sm:'40vw 40vw',xs:'80vw'},pt:'30px',pb:'40px',pl:'30px',pr:'30px',gridGap:'15px'}}>
      <Product img={laminate[0].img} tit={laminate[0].name}/>
      <Product img={laminate[1].img} tit={laminate[1].name}/>
      <Product img={laminate[2].img} tit={laminate[2].name}/>
      <Product img={laminate[3].img} tit={laminate[3].name}/>
      <Product img={laminate[4].img} tit={laminate[4].name}/>
      {/* <Product img={laminate[5].img} tit={laminate[5].name}/> */}




      </Box></Box>
    </Box> 
  );
}

export default Veneer;
