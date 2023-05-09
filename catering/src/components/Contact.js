import { Box } from '@mui/material'
import React, { useEffect }  from 'react'
import ContacForm from './ContacForm'
import { useLocation } from 'react-router-dom';
function Contact() {

  const location = useLocation();
  useEffect(() => {
    document.title = ` saikailashdhaba ${location.pathname}`;
  }, [location]);
  return (
    <Box sx={{
        display: "grid",
        gridTemplateColumns: { md: "40vw 40vw ", sm: "100vw" },
        backgroundImage: "url(./images/back.jpg)",
        alignItems: "center",
        padding: "1vh",
        justifyContent:"center",
        gridGap:'2vh'
      }}>
         <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          

            }}><ContacForm/></Box>
         <Box>
         <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            flexDirection:"column",
            padding: "2vh",
          }}
        >
          <Box
            sx={{
              width: "8vw",
              height: "8vw",
              border: "dotted orange",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: ".2vw",
             
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzsxTBs9_eyfrGzWqvTl8o0QulLbAF2AiWgvI6mE75&s"
              alt="address"
              style={{ width: "4.5vw", height: "4.5vw" }}
            />
          </Box>
            <h3 style={{color:'grey',margin:'1vw'}}>Our Address
</h3>
<p> Pillar Number 141, <br />
   Backside Pai Electronics, 
 Door no. 4-6-47/A/1,<br /> Inner Ring Rd,
 Attapur, Telangana 500048</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            
            alignItems: "center",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            flexDirection:"column",
            padding: "2vh",
          }}
        >
          <Box
            sx={{
              width: "8vw",
              height: "8vw",
              border: "dotted orange",
              borderRadius: "50%",
              display: "flex",

              justifyContent: "center",
              alignItems: "center",
              padding: ".2vw",
            }}
          >
            <img
              src="https://cdn5.vectorstock.com/i/1000x1000/01/74/envelope-email-icon-vector-26520174.jpg"
              alt="address"
              style={{ width: "4.5vw", height: "4.5vw" }}
            />
          </Box>
          <h3 style={{color:'grey',margin:'1vw'}}>Email Us 
</h3>
<p> <a href="info@theasb.in" style={{textDecoration:'none'}}>
<a href="mailto:aniltayal@gmail.com"><p>aniltayal@gmail.com</p></a> 
  </a></p>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            flexDirection:"column",
padding:'1vw'
          }}
        >
          <Box
            sx={{
              width: "8vw",
              height: "8vw",
              border: "dotted orange",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: ".2vw",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPWokELD4YGDny-fDs_Fl_zq4I1Z2hue9UQ&usqp=CAU"
              alt="address"
              style={{ width: "4.5vw", height: "4.5vw" }}
            />
          </Box>
         <h3 style={{color:'grey',margin:'1vw'}}>Call Us
</h3>
<a href="tel:9246565646"><p>+91 9246565646</p></a> 

        </Box>


         </Box>
    </Box>
  )
}

export default Contact