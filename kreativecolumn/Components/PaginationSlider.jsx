import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

function PaginationSlider() {
  const [slide1, setSlide1] = useState(true);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);
  const [slide5, setSlide5] = useState(false);
  const [slide6, setSlide6] = useState(false);
  const [clas, setClas] = useState("slidee2");
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setClas("slidee2");

        setSlide1(true);
        setSlide2(false);
        setSlide3(false);
        setSlide4(false);
        setSlide5(false);
        setSlide6(false);
      }, 1000);
      setTimeout(() => {
        setClas("slidee2");
        setSlide1(false);
        setSlide3(false);
        setSlide4(false);
        setSlide6(false);
        setSlide5(false);
        setSlide2(true);
      }, 6000);
      setTimeout(() => {
        setClas("slidee2");

        setSlide3(true);
        setSlide2(false);
        setSlide1(false);
        setSlide4(false);
        setSlide6(false);
        setSlide5(false);
      }, 9000);
      setTimeout(() => {
        setClas("slidee2");
        setSlide4(true);
        setSlide2(false);
        setSlide3(false);
        setSlide1(false);
        setSlide6(false);
        setSlide5(false);
      }, 12000);
      setTimeout(() => {
        setClas("slidee2");
        setSlide5(true);
        setSlide2(false);
        setSlide3(false);
        setSlide1(false);
        setSlide6(false);
        setSlide4(false);
      }, 15000);
      setTimeout(() => {
        setClas("slidee2");
        setSlide6(true);
        setSlide2(false);
        setSlide3(false);
        setSlide1(false);
        setSlide5(false);
        setSlide4(false);
      }, 18000);
    }, 20000);

    return () => clearInterval(interval);
  }, [slide1, slide2, slide3, slide4, slide5, slide6]);
  const toggle = (state) => {
    switch (state) {
      case "slide1":
        if (slide2 || slide3 || slide4 || slide5 || slide6) {
          setClas("slidee");
        } else {
          setClas("slidee2");
        }
        setSlide1(true);
        setSlide2(false);
        setSlide3(false);
        setSlide4(false);
        setSlide5(false);
        setSlide6(false);
        break;
      case "slide2":
        if (slide3 || slide4 || slide5 || slide6) {
          setClas("slidee");
        } else {
          setClas("slidee2");
        }
        setSlide1(false);
        setSlide3(false);
        setSlide4(false);
        setSlide6(false);
        setSlide5(false);
        setSlide2(true);
        break;
      case "slide3":
        if (slide4 || slide5 || slide6) {
          setClas("slidee");
        } else {
          setClas("slidee2");
        }
        setSlide3(true);
        setSlide2(false);
        setSlide1(false);
        setSlide4(false);
        setSlide6(false);
        setSlide5(false);
        break;
      case "slide4":
        if (slide5 || slide6) {
          setClas("slidee");
        } else {
          setClas("slidee2");
        }
        setSlide4(true);
        setSlide2(false);
        setSlide3(false);
        setSlide1(false);
        setSlide6(false);
        setSlide5(false);
        break;
      case "slide5":
        if (slide6) {
          setClas("slidee");
        } else {
          setClas("slidee2");
        }
        setSlide5(true);
        setSlide2(false);
        setSlide3(false);
        setSlide1(false);
        setSlide6(false);
        setSlide4(false);
        break;
      case "slide6":
        setClas("slidee2");
        setSlide6(true);
        setSlide2(false);
        setSlide3(false);
        setSlide1(false);
        setSlide4(false);
        setSlide5(false);
        break;
      default:
        break;
    }
  };
  return (
    <Box>
      <Box
        sx={{
          mt: "100px",
          borderBottom: "3px dashed gray",
          position: "relative",
          width: { md: "50vw", sm: "70vw", xs: "90vw" },
          m: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            bottom: { md: -34, xs: -16 },
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { md: "30px", xs: "20px" },
                height: { md: "30px", xs: "20px" },
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "5px",
                background: slide1 ? "rgb(216, 159, 13)" : "gray",
                color: "white",
              }}
              onClick={() => {
                toggle("slide1");
              }}
            >
              1
            </Box>
            <Box
              sx={{
                fontSize: "12px",
                display: {
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                  color: slide1 ? "rgb(216, 159, 13)" : "gray",
                },
                textAlign: "center",
                ml: "-7px",
                mt: "4px",
              }}
            >
              {" "}
              consultation
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { md: "30px", xs: "20px" },
                height: { md: "30px", xs: "20px" },
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "5px",
                background: slide2 ? "rgb(216, 159, 13)" : "gray",
                color: "white",
              }}
              onClick={() => {
                toggle("slide2");
              }}
            >
              2
            </Box>
            <Box
              sx={{
                fontSize: "12px",
                display: {
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                  color: slide2 ? "rgb(216, 159, 13)" : "gray",
                },
                mt: "4px",
                ml: "-3px",
              }}
            >
              {" "}
              Our Works
            </Box>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { md: "30px", xs: "20px" },
                height: { md: "30px", xs: "20px" },
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "5px",
                background: slide3 ? "rgb(216, 159, 13)" : "gray",
                color: "white",
              }}
              onClick={() => {
                toggle("slide3");
              }}
            >
              3
            </Box>
            <Box
              sx={{
                fontSize: "12px",
                display: {
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                  color: slide3 ? "rgb(216, 159, 13)" : "gray",
                },
                mt: "4px",
                ml: "-8px",
              }}
            >
              Place Order
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { md: "30px", xs: "20px" },
                height: { md: "30px", xs: "20px" },
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "5px",
                background: slide4 ? "rgb(216, 159, 13)" : "gray",
                color: "white",
              }}
              onClick={() => {
                toggle("slide4");
              }}
            >
              4
            </Box>
            <Box
              sx={{
                fontSize: "12px",
                display: {
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                  color: slide4 ? "rgb(216, 159, 13)" : "gray",
                },
                mt: "4px",
              }}
            >
              Design
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { md: "30px", xs: "20px" },
                height: { md: "30px", xs: "20px" },
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "5px",
                background: slide5 ? "rgb(216, 159, 13)" : "gray",
                color: "white",
                ml: "5px",
              }}
              onClick={() => {
                toggle("slide5");
              }}
            >
              5
            </Box>
            <Box
              sx={{
                fontSize: "12px",
                display: {
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                  color: slide5 ? "rgb(216, 159, 13)" : "gray",
                },
                pr: "4px",
                mt: "4px",
              }}
            >
              Execution
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mr: "-9px",
            }}
          >
            <Box
              sx={{
                width: { md: "30px", xs: "20px" },
                height: { md: "30px", xs: "20px" },
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "5px",
                background: slide6 ? "rgb(216, 159, 13)" : "gray",
                color: "white",
              }}
              onClick={() => {
                toggle("slide6");
              }}
            >
              6
            </Box>
            <Box
              sx={{
                fontSize: "12px",
                display: {
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                  color: slide6 ? "rgb(216, 159, 13)" : "gray",
                },
                mt: "4px",
              }}
            >
              Move in
            </Box>
          </Box>
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            position: "absolute",
            bottom: {md:-40,xs:-16},
            justifyContent: "space-between",
            width: "120%",ml:"-20px"
          }}
        >
          <Box >
         Consultation
          
          </Box>
          <Box> 
            Review Our Work
         </Box>
          <Box> 
            Place the order
            
            </Box>
          <Box> 
           Design
           </Box>
          <Box>
            Execution & Tracking
            </Box>

          <Box> 
           Move In
          </Box>
        </Box> */}
      </Box>
      <Box sx={{ mt: "20px", overflow: "hidden" }}>
        {slide1 ? (
          <Box
            sx={{ width: { md: "50vw", xs: "80vw" }, m: "auto" }}
            className={clas}
          >
            <Box sx={{ display: "flex", widht: "60%" }}>
              <img
                src="https://www.buildhood.com/img/construction/CONSULTATION.png"
                alt="rfoevojov"
                loading="lazy"
                style={{ width: "100%", margin: "auto" }}
              />
            </Box>
            <Box
              sx={{
                pl: "15px",
                border: "1px solid rgb(200,200,200,.7)",
                borderRadius: "10px",
                width: "80%",
                m: "auto",
                background: "white",
              }}
            >
              <h4 style={{ color: "rgb(216, 159, 13)" }}>Enquiry</h4>
              <p style={{ padding: "5px" }}>
                Fill the enquiry form or reach us directly via call +91
                84574893579, one of our technical team member will approach you
                within 24hrs to know the complete details about your dream home.
              </p>
            </Box>
          </Box>
        ) : (
          ""
        )}
        {slide2 ? (
          <Box
            sx={{ width: { md: "50vw", xs: "80vw" }, m: "auto" }}
            className={clas}
          >
            <Box sx={{ display: "flex", widht: "60%" }}>
              <img
                src="https://www.buildhood.com/img/construction/REVIEW-OUR-WORK.png"
                alt="rfoevojov"
                loading="lazy"
                style={{ width: "100%", margin: "auto" }}
              />
            </Box>
            <Box
              sx={{
                pl: "15px",
                border: "1px solid rgb(200,200,200,.7)",
                borderRadius: "10px",
                width: "80%",
                m: "auto",
                background: "white",
              }}
            >
              <h4 style={{ color: "rgb(216, 159, 13)" }}>Projects Delivered</h4>
              <p style={{ padding: "5px" }}>
                You can view our latest projects which are delivered. We're
                always happy to assist you based on the requirement.
              </p>
            </Box>
          </Box>
        ) : (
          ""
        )}
        {slide3 ? (
          <Box
            sx={{ width: { md: "50vw", xs: "80vw" }, m: "auto" }}
            className={clas}
          >
            <Box sx={{ display: "flex", widht: "60%" }}>
              <img
                src="https://www.buildhood.com/img/construction/Construction-place-the-order.png"
                alt="rfoevojov"
                loading="lazy"
                style={{ width: "100%", margin: "auto" }}
              />
            </Box>
            <Box
              sx={{
                pl: "15px",
                border: "1px solid rgb(200,200,200,.7)",
                borderRadius: "10px",
                width: "80%",
                m: "auto",
                background: "white",
              }}
            >
              <h4 style={{ color: "rgb(216, 159, 13)" }}>Place the Order</h4>
              <p style={{ padding: "5px" }}>
                Once you're happy with our work you can immediately place the
                order to proceed further by signing the transparent construction
                contract.
              </p>
            </Box>
          </Box>
        ) : (
          ""
        )}
        {slide4 ? (
          <Box
            sx={{ width: { md: "50vw", xs: "80vw" }, m: "auto" }}
            className={clas}
          >
            <Box sx={{ display: "flex", widht: "60%" }}>
              <img
                src="https://www.buildhood.com/img/construction/DESIGN-PHANE.png"
                alt="rfoevojov"
                loading="lazy"
                style={{ width: "100%", margin: "auto" }}
              />
            </Box>
            <Box
              sx={{
                pl: "15px",
                border: "1px solid rgb(200,200,200,.7)",
                borderRadius: "10px",
                width: "80%",
                m: "auto",
                background: "white",
              }}
            >
              <h4 style={{ color: "rgb(216, 159, 13)" }}>Design</h4>
              <p style={{ padding: "5px" }}>
                Based on your requirements our experienced architecture will
                provide the quality designs.
              </p>
            </Box>
          </Box>
        ) : (
          ""
        )}
        {slide5 ? (
          <Box
            sx={{ width: { md: "50vw", xs: "80vw" }, m: "auto" }}
            className={clas}
          >
            <Box sx={{ display: "flex", widht: "60%" }}>
              <img
                src="https://www.buildhood.com/img/construction/CONSTRUCTION.png"
                alt="rfoevojov"
                loading="lazy"
                style={{ width: "100%", margin: "auto" }}
              />
            </Box>
            <Box
              sx={{
                pl: "15px",
                border: "1px solid rgb(200,200,200,.7)",
                borderRadius: "10px",
                width: "80%",
                m: "auto",
                background: "white",
              }}
            >
              <h4 style={{ color: "rgb(216, 159, 13)" }}>
                Project execution & tracking
              </h4>
              <p style={{ padding: "5px" }}>
                Once we started & executing the project our team will update the
                work progress with images & videos.
              </p>
            </Box>
          </Box>
        ) : (
          ""
        )}
        {slide6 ? (
          <Box
            sx={{ width: { md: "50vw", xs: "80vw" }, m: "auto" }}
            className={clas}
          >
            <Box sx={{ display: "flex", widht: "60%" }}>
              <img
                src="https://www.buildhood.com/img/construction/MOVE-IN.png"
                alt="rfoevojov"
                loading="lazy"
                style={{ width: "100%", margin: "auto" }}
              />
            </Box>
            <Box
              sx={{
                pl: "15px",
                border: "1px solid rgb(200,200,200,.7)",
                borderRadius: "10px",
                width: "80%",
                m: "auto",
                background: "white",
              }}
            >
              <h4 style={{ color: "rgb(216, 159, 13)" }}>Move in</h4>
              <p style={{ padding: "5px" }}>
                We make sure that the project will be done within the time
                allocated & delivery without any hassle.
              </p>
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default PaginationSlider;
