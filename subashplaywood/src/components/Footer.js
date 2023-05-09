import { Box } from "@mui/material";
import React from "react";
import { BiPaperPlane } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiPhone } from "react-icons/bi";

function Footer() {
  return (
    <>
 
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "25vw 33vw 36vw", sm: "90%" },
        gridGap: "20px",
        background: "rgb(0, 0, 0,.3)",
        padding: "40px",
        justifyContent:{md:'left',sm:'center',xs:'center'},
        alignItems:{md:'left',sm:'center'},color:'white'

       
      }}
    >
      <Box sx={{ display: "flex" ,flexDirection:'column',gap:'15px',justifyContent:{lg:'left',md:'left',sm:'center',xs:'center'},ml:{md:'70px',xs:'0'}}}>
        <img
          src="./images/logo.png"
          alt="subashplaywood" loading="lazy"
          style={{ width: "80px" }}
        />
 <Box className="menu" sx={{  }}>
 < a href="https://www.facebook.com/subhashplywood" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'rgb(133, 94, 66)'}}><AiFillFacebook size="30px" /></a>
        < a href="https://www.instagram.com/subhashplywoodhyderabad/" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'rgb(133, 94, 66)'}} >  <AiOutlineInstagram size="30px" /></a>
        < a href="https://wa.me/9182709981" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'rgb(133, 94, 66)'}} >  <AiOutlineWhatsApp size="30px" /></a>
        < a href="" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'rgb(133, 94, 66)'}} >  <AiFillYoutube size="30px" /></a>
        < a href="" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'rgb(133, 94, 66)'}} >  <AiFillLinkedin size="30px" /></a>
        </Box>
      </Box>
      <Box sx={{pl:{md:'30px',xs:'0'}}} >
        <h3>CONTACT US</h3>
        <span style={{ display: "flex", alignItems: "center" }}>
          <BiPhone size="30px"  style={{marginRight:'5px'}}/>{" "}
          <a href="tel:7995592416" style={{ textDecoration: "none",color:"white" }}>
            +91 9182709981{" "}
          </a>{" "}
        </span>
        <span style={{ display: "flex", alignItems: "center"  }}>
          <AiOutlineMail size="30px" style={{marginRight:'5px'}} />{" "}
          <a href="mailto: contact@subhashplywood.com" style={{ textDecoration: "none" ,color:"white" }}>
           contact@subhashplywood.com
          </a>{" "}
        </span>
        <p style={{display:'flex',alignItems:'center' }}>
       <BiPaperPlane size="30px" style={{marginRight:'5px'}} /> Prashant Colony, Vivekananda Nagar,<br/> Shivarampally Jagir, Telangana 500030
        </p>
      </Box>
      
      <Box sx={{justifyContent:'center',display:'flex',flexDirection:'column'}} >
      <Box sx={{display:'flex',flexDirection:'column',ml:{md:'70px',xs:'0'},fontSize:"14px"}}>
      <h3>QUICK LINKS</h3>
      <Box sx={{display:'grid',gridTemplateColumns:'44% 44%'}} >
      <Box>
      <p style={{lineHeight:'24px'}}> 
      <Link to="/plywood" style={{textDecoration:'none',color:'white'}}> PLYWOOD  </Link>  <br />

      <Link to="/veneer" style={{textDecoration:'none',color:'white'}}> VENEER  </Link>  <br />
      <Link to="/laminates" style={{textDecoration:'none',color:'white'}}> LAMINATES</Link>   <br />
      <Link to="/hardware" style={{textDecoration:'none',color:'white'}}> HARDWARE</Link>   <br />
      <Link to="/decoratives" style={{textDecoration:'none',color:'white'}}> DECORATIVES</Link>   <br />
</p></Box>
<Box>
     <p> <Link to="/" style={{textDecoration:'none',color:'white'}}> HOME</Link> <br />
      <Link to="/about" style={{textDecoration:'none',color:'white'}}> ABOUT   </Link><br />
      <Link to="/contact" style={{textDecoration:'none',color:'white'}}> CONTACT </Link><br />
      <Link to="/terms-and-conditions" style={{textDecoration:'none',color:'white'}}> TERMS AND CONDITIONS </Link><br />
      <Link to="/privacy-policy" style={{textDecoration:'none',color:'white'}}>PRIVACY POLICY  </Link>
        </p>

      </Box>

</Box>

      </Box>
      </Box>
     
    </Box>
    <Box sx={{color:'white',background: "rgb(0, 0, 0,.3)",padding:'10px',textAlign:'center'}}> <p>&copy; 2023 Copyright Subhash Plywood . All rights reserved. Design and Developed by<a href='https://www.digitalopulent.com/'
style={{color:'white'}} target="_blank"
> DigitalOpulent</a> </p></Box>
    
    </>
  );
}

export default Footer;
