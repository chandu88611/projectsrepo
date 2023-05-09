import React from 'react'
import Box from "@mui/material/Box";
import {AiFillFacebook,AiOutlineInstagram} from "react-icons/ai";
import {SiZomato,SiSwiggy} from "react-icons/si";


import "./Header.css"
import { Link } from 'react-router-dom';
function Footer({setService}) {
   
  return (
    <>
<Box sx={{display:'grid',gridTemplateColumns:{sm:'50vw 50vw',md:'20vw 20vw 25vw 25vw '},flexDirection:'column',
background:'rgb(43, 71, 144)',color:'white'
}} >
    <Box sx={{mt:'4vh',height:"14vh"}} >
        <img src="./images/newbluelogo.jpg" style={{width:'35vh'}} alt="" />
    </Box>
<Box >
<h4>QuickLinks</h4>
<p> <Link to="/"><span className="quicklinks"  onClick={()=>setService(true)}>Home</span></Link>   <br />
<Link to="about"><span className="quicklinks" onClick={()=>setService(false)}>About</span></Link><br /> 
<Link to="menu"><span className="quicklinks" onClick={()=>setService(false)}>Menu </span></Link><br />
<Link to="contact"><span className="quicklinks" onClick={()=>setService(false)}>Contact</span></Link><br/>


</p>
</Box>
<Box>
<h4>Address</h4>
<address>
  Pillar Number 141, <br />
   Backside Pai Electronics, 
 Door no. 4-6-47/A/1,<br /> Inner Ring Rd,
 Attapur, Telangana 500048
</address>
</Box>
<Box sx={{mt:'4vh',display:'flex',justifyContent:'center',}}>
<div className="icons">
   <a href="https://www.facebook.com/saikailashdhaba/" target="_blank" rel="noreferrer"><div className="icon1" style={{margin:'2px'}}>
<AiFillFacebook color='white' size='20px'  />
    </div></a> 
    <a href="https://www.instagram.com/saikailashdhaba/" target="_blank" rel="noreferrer"> <div className="icon2" style={{margin:'2px'}}>
<AiOutlineInstagram color='white' size='20px'  />
    </div></a> 
   
    <a href="https://www.zomato.com/hyderabad/sai-kailash-dhaba-attapur" target="_blank" rel="noreferrer"> <div className="icon3" style={{background:'red',margin:'2px'}}>
<SiZomato color='white' size='20px'  />
    </div></a> 
    <a href="https://www.swiggy.com/restaurants/sai-kailash-dhaba-attapur-ambience-fort-hyderabad-9273" target="_blank" rel="noreferrer"> <div className="icon3" style={{background:'orange',margin:'2px'}}>
<SiSwiggy color='white' size='20px'   />
    </div></a> 
</div>
</Box>
</Box>
<Box sx={{color:'white',background:'black',padding:'1vh'}}> <p>&copy; 2023 Copyright Sai Kailash Dabha . All rights reserved. Design and Developed by<a href='https://www.digitalopulent.com/'
style={{color:'white'}}
> DigitalOpulent</a> .</p></Box>
</>
  )
}

export default Footer