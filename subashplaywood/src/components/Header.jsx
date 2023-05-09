import React, { useState, useEffect } from "react";
import "./Header.css";
import { AiOutlineClose } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdOutlineArrowDropDown,MdOutlineArrowDropUp } from "react-icons/md";


function Header() {
  const [state, setState] = useState(false);
  const [menu, setMenu] = useState(false);

  const location = useLocation();

  




  useEffect(() => {
    // document.title = ` saikailashdhaba ${location.pathname}`;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <div className="header_container">
      <Box
        sx={{
          height: "9.5vh",
        }}
      >
        <img src="./images/logo.png" className="image" alt="subashplywoodlogo" />
      </Box>

      <div
        className="menu_items"
      
      >
       
        <div className="menu" onMouseEnter={()=>setMenu(false)} >
          <Link
            to={"/"}
            className="hover"
            style={{
              textDecoration: "none",
              color: location.pathname === "/" ? "orange" : "rgb(133,94,66)",
            }}
          >
            {" "}
            <h4 style={{ fontWeight: 500 }}>HOME</h4>{" "}
          </Link>
        </div>
        <Box  className="menu"  sx={{position:'relative'}}  onMouseEnter={()=>setMenu(true)} 
>
          
            <h4 style={{ fontWeight: 500,
             color:
             (location.pathname === ("/plywood")||location.pathname ==="/laminates"||location.pathname ==="/hardware"||location.pathname ==="/veneer"||location.pathname ==="/decoretives") ? "orange" : "rgb(133,94,66)",
     
            }}    onClick={()=>{menu?setMenu(false):setMenu(true)}}>COLLECTIONS {menu?<MdOutlineArrowDropUp/>:<MdOutlineArrowDropDown/>}</h4>{" "}
        
        {menu?  <Box sx={{position:'absolute',bottom:-260,left:-10,background:'white',borderBottomRightRadius:'10px',pl:'10px',pr:'10px'}} onMouseEnter={()=>setMenu(true)} onMouseLeave={()=>setMenu(false)}>
        <div >
          <Link
            to={"/plywood"}
            className="hover "
            style={{
              textDecoration: "none",
              color:
                location.pathname === "/plywood" ? "orange" : "rgb(133,94,66)"
            }}
            onClick={()=>{
              setMenu(false)
            
          
          }}
         >
            <h4  className="me" style={{ fontWeight: 500 ,textAlign:"left"}}>PLYWOOD</h4>{" "}
          </Link>
        </div>
        <div >
          {" "}
          <Link
            to={"/veneer"}
            className="hover"
            style={{
              textDecoration: "none",

              color:
                location.pathname === "/veneer" ? "orange" : "rgb(133,94,66)",
            }}

            onClick={()=>{
              setMenu(false)
            
          
          }}
          >
            {" "}
            <h4 className="me" style={{ fontWeight: 500 ,textAlign:"left"}} > VENEER </h4>{" "}
          </Link>{" "}
        </div>
      
        <div >
          <Link
            to={"/laminates"}
            className="hover"
            style={{
              textDecoration: "none",
              color:
                location.pathname === "/laminates"
                  ? "orange"
                  : "rgb(133,94,66)",
            }}
            onClick={()=>{
              setMenu(false)
            
          
          }}
          >
            <h4  className="me" style={{ fontWeight: 500 ,textAlign:"left"}}> LAMINATES</h4>{" "}
          </Link>{" "}
        </div>

        <div >
          <Link
            to={"/hardware"}
            className="hover"
            style={{
              textDecoration: "none",
              color:
                location.pathname === "/hardware" ? "orange" : "rgb(133,94,66)",
            }}
            onClick={()=>{
              setMenu(false)
            
          
          }}
          >
            <h4  className="me" style={{ fontWeight: 500 ,textAlign:"left"}}>HARDWARE </h4>{" "}
          </Link>
        </div>
        <div >
          <Link
            to={"/decoratives"}
            className="hover"
            style={{
              textDecoration: "none",
              color:
                location.pathname === "/decoratives" ? "orange" : "rgb(133,94,66)",
            }}
            onClick={()=>{
              setMenu(false)
            
          
          }}
          >
            <h4  className="me" style={{ fontWeight: 500 ,textAlign:"left"}}>DECORATIVES </h4>{" "}
          </Link>
        </div>
        
        </Box>:''}
        </Box>
        
       
        <div className="menu" onMouseEnter={()=>setMenu(false)} >
          <Link
            to={"/about"}
            className="hover"
            style={{
              textDecoration: "none",
              color:
                location.pathname === "/about" ? "orange" : "rgb(133,94,66)",
            }}
            onClick={()=>{
              setMenu(false)
            
          
          }}
          >
            {" "}
            <h4 style={{ fontWeight: 500 }}  >ABOUT </h4>{" "}
          </Link>
        </div>
        <div className="menu" onMouseEnter={()=>setMenu(false)}>
          <Link
            to={"/contact"}
            className="hover"
            style={{
              textDecoration: "none",
              color:
                location.pathname === "/contact" ? "orange" : "rgb(133,94,66)",
            }}
          >
            <h4 style={{ fontWeight: 500 }}>CONTACT</h4>{" "}
          </Link>
        </div>
       
      </div>
      <Box className="menu" sx={{ pr: "40px" ,display:{lg:"block",md:'none',sm:'none',xs:'none'}}}>
        < a href="https://www.facebook.com/subhashplywood" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'rgb(133, 94, 66)'}}><AiFillFacebook size="30px" /></a>
        < a href="https://www.instagram.com/subhashplywoodhyderabad/" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'rgb(133, 94, 66)'}} >  <AiOutlineInstagram size="30px" /></a>
        < a href="https://wa.me/9182709981" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'rgb(133, 94, 66)'}} >  <AiOutlineWhatsApp size="30px" /></a>
        < a href="" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'rgb(133, 94, 66)'}} >  <AiFillYoutube size="30px" /></a>
        < a href="" target="_blank" rel="noreferer" style={{textDecoration:'none',color:'rgb(133, 94, 66)'}} >  <AiFillLinkedin size="30px" /></a>
        </Box>
      <div className="threeBars">
         
         <div style={{ marginRight: "20px" }}>
          {" "}
          {state ? (
            <AiOutlineClose
              size={"5vh"}
              color="black"
              className="one"
              onClick={() => setState(false)}
            />
          ) : (
            <VscThreeBars
              size={"5vh"}
              className="two"
              color="black"
              onClick={() => {
                setState(true);
              }}
            />
          )}
        </div>
      </div>
      {state ? (
        <div className="menu_items_mobile">
          <img
            src="./images/logo.png"
            className="image"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "10px",
            }}
            alt=""
          />

          <Link
            to={"/"}
            className="hover"
            style={{ textDecoration: "none" }}
            onClick={() => setState(false)}
          >
            <div
              className="menu1"
              style={{
                color: location.pathname === "/" ? "orange" : "rgb(133,94,66)",
              }}
            >
              {" "}
              HOME
            </div>
          </Link>
          <Link
            to={"/plywood"}
            className="hover"
            style={{ textDecoration: "none" }}
            onClick={() => setState(false)}
          >
            <div
              className="menu1"
              style={{
                color:
                  location.pathname === "/plywood"
                    ? "orange"
                    : "rgb(133,94,66)",
              }}
            >
              PLYWOOD
            </div>{" "}
          </Link>
          <Link
            to={"/veneer"}
            className="hover"
            style={{ textDecoration: "none" }}
            onClick={() => setState(false)}
          >
            <div
              className="menu1"
              style={{
                color:
                  location.pathname === "/veneer" ? "orange" : "rgb(133,94,66)",
              }}
            >
              {" "}
              VENEER
            </div>
          </Link>
          <Link
            to={"/laminates"}
            className="hover"
            style={{ textDecoration: "none" }}
            onClick={() => setState(false)}
          >
            {" "}
            <div
              className="menu1"
              style={{
                color:
                  location.pathname === "/laminates"
                    ? "orange"
                    : "rgb(133,94,66)",
              }}
            >
              LAMINATES
            </div>{" "}
          </Link>
          <Link
            to={"/hardware"}
            className="hover"
            style={{ textDecoration: "none" }}
            onClick={() => setState(false)}
          >
            <div
              className="menu1"
              style={{
                color:
                  location.pathname === "/hardware"
                    ? "orange"
                    : "rgb(133,94,66)",
              }}
            >
              HARDWARE
            </div>{" "}
          </Link>
          <Link
            to={"/decoratives"}
            className="hover"
            style={{ textDecoration: "none" }}
            onClick={() => setState(false)}
          >
            <div
              className="menu1"
              style={{
                color:
                  location.pathname === "/decoretives"
                    ? "orange"
                    : "rgb(133,94,66)",
              }}
            >
              DECORATIVES
            </div>{" "}
          </Link>
          <Link
            to={"/about"}
            className="hover"
            style={{ textDecoration: "none" }}
            onClick={() => setState(false)}
          >
            <div
              className="menu1"
              style={{
                color:
                  location.pathname === "/about" ? "orange" : "rgb(133,94,66)",
              }}
            >
              ABOUT
            </div>{" "}
          </Link>
          <Link
            to={"/contact"}
            className="hover"
            style={{ textDecoration: "none" }}
            onClick={() => setState(false)}
          >
            <div
              className="menu1"
              style={{
                color:
                  location.pathname === "/contact"
                    ? "orange"
                    : "rgb(133,94,66)",
              }}
            >
              CONTACT
            </div>{" "}
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
