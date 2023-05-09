import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import {AiFillFacebook,AiOutlineInstagram} from "react-icons/ai";
import {SiZomato,SiSwiggy} from "react-icons/si";
// import { useEffect} from "react"

// import "./Header.css"
import { BsTelephone ,BsWhatsapp} from "react-icons/bs";
import About from "./components/About";
import Contact from "./components/Contact";
import { useLocation } from "react-router-dom";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import { Box } from "@mui/system";
import { useEffect } from "react";
//  import { useLocation } from 'react-router-dom';

//  const pathnameDescriptions = {
//    '/about': 'Learn about my app and the team behind it.',
//    '/services': 'Discover the services offered by my app.',
//    '/contact': 'Get in touch with my app team.'
//  };

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
      duration:2000
    });

  }, [location]);

  return (
    <div className="App">
      <Router>
        <Box id="Top"></Box>
        <Box
          sx={{
            background: "rgb(26, 48, 116)",
            // gridTemplateColumns: "30vw ",
            display:"flex",
            color: "white",
            alignItems: "center",
            justifyContent:"space-between",
            position: "sticky",
            top: "0",
            padding:'10px',
            zIndex:'10'
          }}
        >
          <Box id="table" sx={{ml:'5vw'}}>
            <BsTelephone />
            +91 9246565646
          </Box>

          <div className="icons" style={{marginRight:'5vw'}}>
   <a href="https://www.facebook.com/saikailashdhaba/"  target="_blank" rel="noreferrer"><div className="icon11" style={{margin:'2px'}}>
<AiFillFacebook color='white' size='20px' />
    </div></a> 
    <a href="https://www.instagram.com/saikailashdhaba/" target="_blank" rel="noreferrer"> <div className="icon21" style={{margin:'2px'}}>
<AiOutlineInstagram color='white' size='20px' />
    </div></a> 
   
    <a href="https://www.zomato.com/hyderabad/sai-kailash-dhaba-attapur" target="_blank" rel="noreferrer"> <div className="icon31" style={{background:'red',margin:'2px'}}>
<SiZomato color='white' size='20px' />
    </div></a> 
    <a href="https://www.swiggy.com/restaurants/sai-kailash-dhaba-attapur-ambience-fort-hyderabad-9273" target="_blank" rel="noreferrer" > <div className="icon31" style={{background:'orange',margin:'2px'}}>
<SiSwiggy color='white' size='20px'  />
    </div></a> 
</div>
          {/* <Box><AiOutlineMail/>hwdbchwd</Box> */}
          {/* <Box><BiMap/>Pillar Number 141, Backside Pai Electronics, 
 Door no.4-6-47/A/1, Inner Ring Rd,
 Attapur,Telangana-500048</Box> */}
        </Box>
        <Header />

        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>

          <Route path="/contact" element={<Contact />} />
        </Routes>
         <Box sx={{position: "fixed", bottom: "8vh", left:{md:'92%',sm:"80%"}}}>
        <Box sx={{position: "fixed", bottom: "83px",width:'40px',height:'40px',background:'red',padding:"10px",borderRadius:'50%',border:'2px solid grey',zIndex:10,display:'flex',alignItems:'center',justifyContent:'center'}} className="left">
          <a href="tel:9246565646" className="anchor"  target="_blank" rel="noreferrer">
            <BsTelephone size={"35px"} color="white" />
          </a>
        </Box>
        <Box sx={{position: "fixed", bottom: "2vh",width:'40px',height:'40px',background:'green',padding:"10px",borderRadius:'50%',border:'2px solid white',zIndex:10,display:'flex',alignItems:'center',justifyContent:'center' }} className="left">
          <a href="https://wa.me/9246565646" className="anchor" target="_blank" rel="noreferrer" >
            <BsWhatsapp size={"35px"} color="white" />
          </a>
        </Box>
        
        
        </Box>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
