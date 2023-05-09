import { Box} from '@mui/material'
import React from 'react'
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  AiOutlineMail,
} from "react-icons/ai";
import { BiPhone,BiPaperPlane } from "react-icons/bi";


function Contact() {

  const [isHovering, setIsHovering] = React.useState(false);
  const [isHovering1, setIsHovering1] = React.useState(false);


  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };
  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Box sx={{}}>
        
 <Box sx={{background:'rgb(2, 0, 0,.7)',display:'flex',justifyContent:'center',alignItems:'center',p:5}}
 
 >
<Box sx={{pb:'50px',pt:'30px',display:'grid',gridTemplateColumns:{md:'40vw 40vw',xs:'97vw'},pl:'5px',pr:"5px"
}}>

<Box sx={{p:'50px',color:'white'}}>
<h2 style={{fontSize:'50px',lineHeight:'50px'}}>Get in Touch is Easy Now</h2>
 <a href="mailto:chandan@digitalopulent.com" style={{textDecoration:'none',color:'white'}}> 
 contact@subhashplywood.com

 </a> <br/>
 <br/>
 <a href="tel:chandan@digitalopulent.com" style={{textDecoration:'none',color:'white'}}> +91 79955 92416</a> 

 <Box className="menu" sx={{  }}>
 < a href="https://www.facebook.com/subhashplywood" target="_blank" rel="noreferer"  style={{textDecoration:'none',color:'white'}}><AiFillFacebook size="30px" /></a>
        < a href="https://www.instagram.com/subhashplywoodhyderabad/" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'white'}} >  <AiOutlineInstagram size="30px" /></a>
        < a href="https://wa.me/9182709981" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'white'}} >  <AiOutlineWhatsApp size="30px" /></a>
        < a href="" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'white'}} >  <AiFillYoutube size="30px" /></a>
        < a href="" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'white'}} >  <AiFillLinkedin size="30px" /></a>
        </Box>

</Box>
<Box sx={{display:'flex',gap:'20px',alignItems:'center',justifyContent:'center'}}>
 <Box >
 <a href="https://wa.me/9182709981" className="anchor" target="_blank" rel="noreferrer" >
 <button style={{background:isHovering1?"white":'none',color:isHovering1?'black':'white',paddingLeft:'30px',paddingRight:'30px',paddingTop:'10px',paddingBottom:'10px',border:'3px solid white',borderRadius:'7px',fontSize:'18px'



}} onMouseEnter={handleMouseEnter1}
onMouseLeave={handleMouseLeave1} >
   Whatsapp
 </button></a>
 </Box>

 <Box>
 <a href="tel:7995592416" target="_blank" rel="noreferrer"  style={{textDecoration:'none',color:'black'}}>
 <button style={{background:isHovering?"white":'none',color:isHovering?'black':'white',paddingLeft:'38px',paddingRight:'38px',paddingTop:'10px',paddingBottom:'10px',border:'3px solid white',borderRadius:'7px',fontSize:'18px'}}  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
   Call Us
 </button></a>
 </Box>

</Box>
   {/* <ContacForm/> */}
   </Box>

   
 </Box>
 <Box sx={{display:'grid',gridTemplateColumns:{md:'30vw 30vw 30vw',sm:'80vw'},gridGap:'20px',justifyContent:'center',mt:'-40px',zIndex:2 }}> 
 <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           
            flexDirection:"column",
       
            background:'white',
            padding: "2vh",
          }}
        >
      <Box sx={{color:"rgb(216, 159, 13)",pt:"18px"}}><BiPaperPlane size="30px" /></Box>

            <h3 style={{color:'grey',margin:'1vw'}}>Our Address
</h3>
<p style={{textAlign:'center'}}> Prashant Colony, Vivekananda Nagar,  <br />Shivarampally Jagir, Telangana 500030


 </p>
        </Box>
        <Box
          sx={{
              background:'white',
            display: "flex",
            justifyContent: "center",
            
            alignItems: "center",
           
            flexDirection:"column",
            padding: "2vh",
          }}
        >
         <Box sx={{color:"rgb(216, 159, 13)",pt:"18px"}}><AiOutlineMail size="30px" /></Box>
          <h3 style={{color:'grey',margin:'1vw'}}>Email Us 
</h3>
<p> 
<a href="mailto:contact@subhashplywood.com" target="_blank" rel="noreferrer" style={{textDecoration:'none',color:'black'}} ><p>contact@subhashplywood.com</p></a> 
  </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           
            flexDirection:"column",
            background:'white',
            padding: "2vh",
          }}
        >
        <Box sx={{color:"rgb(216, 159, 13)"}}><BiPhone size="30px" /></Box>
         
         <h3 style={{color:'grey',margin:'1vw'}}>Call Us
</h3>
<a href="tel:7995592416" target="_blank" rel="noreferrer"  style={{textDecoration:'none',color:'black'}}><p>+91 79955 92416</p></a> 

        </Box>
          
          
          
          </Box>

          <Box sx={{display:'grid',gridTemplateColumns:{md:"40vw 40vw",sm:'70vw',xs:'90vw'},padding:'10px',justifyContent:'center',gridGap:'10px',pt:'40px',pb:'40px'
  }}>
    
    {/* <Box >
    <ContacForm/>
    </Box> */}


    

    
   

</Box>

        <Box sx={{p:{md:'40px',xs:'20px'}}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15234.64865706891!2d78.4268227!3d17.3318419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9709df12f009%3A0x964ce91791c63ee8!2sSubhash%20Plywood-%20Veneer%2C%20Laminate%20%26%20Hardware!5e0!3m2!1sen!2sin!4v1677152387150!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
        </Box>
  )
}

export default Contact