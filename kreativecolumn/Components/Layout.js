import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { BiMobileVibration } from "react-icons/bi";
import { MdCancel } from "react-icons/md";

import ContactForm from "./ContacForm"
// MdCancel

import {
  BsWhatsapp,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsFillTelephoneFill,
} from "react-icons/bs";

function Layout({ children }) {
  const [state, setState] = useState(false);
  const [intervalTime, setIntervalTime] = useState(25000);
  const actions = [
    {
      icon: <BsWhatsapp />,
      name: "Whats App",
      href: "https://wa.me/8019810777",
    },
    { icon: <BsFillTelephoneFill />, name: "Phone", href: "tel:8019810777" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.pageYOffset > 500) {
        setState(true);
        setIntervalTime(prevIntervalTime => prevIntervalTime + 5000);
      } 
    }, intervalTime);

    return () => {
      clearInterval(interval)
      
    };
  });
  return (
    <>
   {state? <Box  sx={{width:'100%',height:"100%",display:'flex',justifyContent:"center",alignItems:"center",position:'fixed',background:"rgb(0,0,0,.2)",zIndex:'100'}}>
        <Box sx={{width:{lg:"50%",md:"50%",sm:"70%",xs:"95%"} }}>
          <MdCancel size="40px"  style={{color:"red",cursor:"pointer",marginLeft:'95%'}} onClick={()=>setState(false)}/>
        <ContactForm/></Box>
      </Box>:""}
      <Box>
        <Box
          sx={{
            display: { md: "flex", sm: "none", xs: "none" },
            justifyContent: "space-between",
            pt: "5px",
            pb: "5px",
          }}
        >
          <a
            href="tel:9059419882"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                pl: "200px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <BiMobileVibration
                  size="20px"
                  style={{ color: "rgb(216, 159, 13)" }}
                />
              </Box>
              <Box sx={{ color: "black" }}>
                <span>+91 8019810777</span>
              </Box>
            </Box>
          </a>

          <a
            href="https://wa.me/7702047515"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                pl: "30px",
                pr: "30px",
                pt: "2px",
                pb: "2px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <BsWhatsapp
                  size="17px"
                  style={{ color: "rgb(216, 159, 13)" }}
                />
              </Box>
              <Box sx={{ color: "black" }}>
                <span>+91 8019810777</span>
              </Box>
            </Box>
          </a>
          <Box
            sx={{
              pr: "200px",
              pt: "2px",
              pb: "2px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box></Box>
            <Box>
              <BsFacebook
                size="15px"
                style={{ color: "rgb(216, 159, 13)", marginLeft: "10px" }}
              />
              <BsInstagram
                size="15px"
                style={{ color: "rgb(216, 159, 13)", marginLeft: "10px" }}
              />
              <BsYoutube
                size="15px"
                style={{ color: "rgb(216, 159, 13)", marginLeft: "10px" }}
              />
              <BsTwitter
                size="15px"
                style={{ color: "rgb(216, 159, 13)", marginLeft: "10px" }}
              />
            </Box>
          </Box>
        </Box>
        <header style={{ position: "sticky", top: "0", zIndex: 39 }}>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer setState={setState} />
        </footer>
        <Box
          sx={{
            display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
            position: "fixed",
            bottom: "15%",
            width: "30px",
            height: "30px",
            padding: "10px",
            borderRadius: "50%",
            zIndex: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          className="left"
        >
          <a
            href="https://wa.me/7702047515"
            className="anchor"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp size={"36px"} color="green" />
          </a>
        </Box>
      </Box>

      {/* <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'fixed', bottom: 20, right: 16  }}
        icon={<BsFillPencilFill openIcon={<BsPlus />}  />}
      >
        {actions.map((action) => (
          <a key={action.name} href={action.href}>
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          /></a>
        ))}
      </SpeedDial> */}
      
    </>
  );
}

export default Layout;
