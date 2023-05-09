import { Box } from "@mui/system";

import { AiOutlineHome, AiOutlineMore } from "react-icons/ai";
import { BsPeopleFill, BsYoutube, BsTwitter } from "react-icons/bs";
import { BiPaperPlane } from "react-icons/bi";

import Link from "next/link";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { HiHomeModern, HiOutlineCurrencyRupee } from "react-icons/hi2";

function Footer({ setState }) {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "30vw 30vw 30vw", sm: "90%" },
          gridGap: "20px",
          // background: "black",
          // color:'white',
          padding: "20px",

          justifyContent: { md: "left", sm: "center", xs: "center" },
          alignItems: { md: "left", sm: "center" },
          background: "rgb(244, 214, 82)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            ml: { md: "50px", xs: "0px" },
            mt: { md: "-40px", sm: 0, xs: 0 },
          }}
        >
          <img
            src="/KK-logo-design-footer.jpg"
            alt="KreativecolumnLogo"
            loading="lazy"
            style={{ width: "220px", background: "white" }}
          />

          <Box>
            <div className="icons">
              <Link href="/" target="_blank" rel="noreferrer">
                <div className="icon1" style={{ margin: "2px" }}>
                  <AiFillFacebook color="black" size="30px" />
                </div>
              </Link>
              <Link href="/" target="_blank" rel="noreferrer">
                {" "}
                <div className="icon2" style={{ margin: "2px" }}>
                  <AiOutlineInstagram color="black" size="30px" />
                </div>
              </Link>
              <Link href="/" target="_blank" rel="noreferrer">
                {" "}
                <div className="icon1" style={{ margin: "5px" }}>
                  <BsYoutube color="black" size="26px" />
                </div>
              </Link>
              <Link href="/" target="_blank" rel="noreferrer">
                {" "}
                <div className="icon1" style={{ margin: "5px" }}>
                  <BsTwitter color="black" size="26px" />
                </div>
              </Link>
            </div>
          </Box>
        </Box>
        <Box sx={{ mt: "20px" }}>
          <h3>Get in Touch</h3>
          <span style={{ display: "flex", alignItems: "center" }}>
            <BiPhone size="30px" style={{ marginRight: "5px" }} /> <br />
            <a href="tel:" style={{ color: "black" }}>
              +91 90594 19882, +91 8019810777{" "}
            </a>{" "}
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            <AiOutlineMail size="30px" style={{ marginRight: "5px" }} /> <br />
            <a href="tel:" style={{ color: "black" }}>
              sales@kreativekolumn.com{" "}
            </a>{" "}
          </span>

          <p style={{ display: "flex", alignItems: "center" }}>
            <BiPaperPlane size="30px" style={{ marginRight: "5px" }} />
            Flat no-405, Topaz Plaza ,Panjagutta,
            <br /> Hyderabad.
          </p>
        </Box>
        <Box sx={{ mt: { md: "60px", sm: "0", xs: "0" } }}>
          <Box sx={{ ml: { md: "100px", xs: 0 } }}>
            <h3>Quick Links</h3>
            <p style={{ lineHeight: "24px" }}>
              {" "}
              <Link href="/" style={{ textDecoration: "none", color: "black" }}>
                {" "}
                Home
              </Link>{" "}
              <br />
              <Link
                href="/project"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                Projects{" "}
              </Link>{" "}
              <br />
              <Link
                href="/calculator"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                Cost Estimator
              </Link>{" "}
              <br />
              
            
              <Link
                href="/contact"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                Contact{" "}
              </Link>
              <br />
              <Link
                href="/privacy-policy"
                style={{ textDecoration: "none", color: "black" }}
              >
                Privacy Policy{" "}
              </Link>{" "}
              <br />
              <Link
                href="/terms-and-conditions"
                style={{ textDecoration: "none", color: "black" }}
              >
                Terms and Conditions{" "}
              </Link>
            </p>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
          position: "fixed",
          bottom: 0,
          justifyContent: "space-between",
          background: "black",
          color: "white",
          pt: "15px",
          pb: "5px",
          width: "100%",
          zIndex: 10,
        }}
      >
        <Box sx={{ width: "20%" }}>
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <AiOutlineHome size="18px" />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "10px",
              }}
            >
              {" "}
              HOME
            </Link>
          </Box>
        </Box>

        <Box sx={{ width: "20%" }}>
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <HiHomeModern size="18px" />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <Link
              href="/projects"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "10px",
              }}
            >
              {" "}
              PROJECTS{" "}
            </Link>{" "}
          </Box>
        </Box>
        <Box
          sx={{
            width: "15%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: 34,
              background: "rgb(216, 159, 13)",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => {
              setState(true);
            }}
          >
            <Box sx={{ textAlign: "center", margin: "auto" }}>
              {" "}
              <Link href="/contact">  <BiPhone size="21px" /></Link>     
            </Box>
          </Box>
          <Box sx={{ mt: "10px", textAlign: "center", fontSize: "10px" }}>
            {" "}
        <Link href="/contact">   BUILD</Link> 
          </Box>
        </Box>

        <Box sx={{ width: "20%" }}>
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <HiOutlineCurrencyRupee size="18px" />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Link
              href="/calculator"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "10px",
              }}
            >
              ESTIMATOR
            </Link>
          </Box>
        </Box>

        <Box sx={{ width: "20%" }}>
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <BsPeopleFill size="18px" />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Link
              href="/about"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "10px",
              }}
            >
              {" "}
              ABOUT{" "}
            </Link>{" "}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "rgb(244, 214, 82)",
          padding: "10px",
          textAlign: "center",
          pb: { md: "5px", xs: "80px" },
        }}
      >
        {" "}
        <p>
          &copy; 2023 Copyright Kreative Kolumn. All rights reserved. Design and
          Developed by{" "}
          <a
            href="https://www.digitalopulent.com/"
            target="_blank"
            style={{ color: "black" }}
          >
            {" "}
            DigitalOpulent
          </a>{" "}
        </p>
      </Box>
    </>
  );
}

export default Footer;
