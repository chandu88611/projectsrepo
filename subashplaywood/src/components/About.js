import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'

function About() {
    const [scroll,setScroll]=useState(300)
  
   

useEffect(()=>{
window.addEventListener('scroll',()=>{
    setScroll((scroll*1.5)/window.pageXOffset)
})
console.log(scroll)
},[window.pageXOffset])
  return (
  <Box sx={{}}  >
     <Box
        sx={{
        
          width: "100%",
          height: {md:"40vh",xs:"20vh"},
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
         
          overflow:'hidden'
        }}
      > 
      <img src="./images/about-us-slider.webp" alt="veneer"  loading="lazy" style={{ width: "100vw",
        
          height: "80vh",  transition: "transform 1.5s ease-in-out", }} 
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        <h1 style={{ fontSize: "5vw", color: "white",position:'absolute',textShadow:'5px 1px 2px gray' }}>SUBASH PLYWOOD</h1>
      </Box>
   
   <Box sx={{display:'grid',gridTemplateColumns:{md:'40vw 40vw',xs:'80vw'},alignItems:'center',justifyContent:'center',p:'20px'}}>
   <Box sx={{display:{md:'flex',xs:'none'}}}>
   <img src="./images/about-us-Subhash.webp" alt="veneer" style={{ width: "80%",height:"400px",
        
      transition: "transform 1.5s ease-in-out", }} 
       
        
        />
    </Box>
    <Box>
    <Box
            sx={{
              display: "flex",
             
              width:{md:'40vw',sm:'50vw',xs:'100%'},
           
              flexDirection: "column",
              gap: "10px",
           
              backgroundColor: "white ",
             

           
         
              fontSize:{md:'15px',xs:'10px'},mb:"50px"
            }}
          >
            <h1 style={{color:"rgb(133, 94, 66)",textAlign:'left',textTransform:'uppercase'}}>About Us</h1>
            <p >
              Subhash Plywood Industries was established in 1986 & founded by
              Subash Chandra Agarwal & Rajesh Agarwal; one of the trusted
              Plywood dealers in Shivarampally (near Attapur) Hyderabad known
              for the quality service & customer-satisfaction. We are
              specialized in providing high-quality plywood material for all
              your home interior needs. Our portfolio includes a large variety
              of designs and collections which vary in thicknesses and grades,
              from basic utility plywood to premium plywood.

<br/> <br/>

              Our company was founded with a mission to provide the best plywood products and customer service in the industry. We believe that customer satisfaction should always be a top priority, and we strive to go above and beyond to meet our customers' needs. We are also proud to offer custom cutting services to ensure that plywood is tailored to your specific project needs.
              <br/><br/>
At Subhash Plywood, we believe that sustainability is an essential part of our business. That's why we are committed to sourcing and promoting environmentally friendly plywood products whenever possible. We understand that our customers care about the impact their construction and design projects have on the environment, and we are dedicated to providing sustainable solutions that meet their needs.
            </p>
          </Box>
   </Box>m 
   </Box>
    
  </Box>
  )
}

export default About