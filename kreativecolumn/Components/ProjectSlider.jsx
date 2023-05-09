import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import { RxAvatar } from "react-icons/rx";
import { BsDot } from "react-icons/bs";
function ProjectSlider({ s1, s2, s3, s4 }) {
  const [slide1, setSlide1] = useState(true);
  const [slide2, setSlide2] = useState(false);
  // const [slide3, setSlide3] = useState(false);
  // const [slide4, setSlide4] = useState(false);

  const [slideImg, setSlideImg] = useState(false);
  const [slideImg1, setSlideImg1] = useState(false);
  // const [slideImg3, setSlideImg3] = useState(false);
  // const [slideImg2, setSlideImg2] = useState(false);

  useEffect(() => {
    setSlideImg(s1);
    setSlideImg1(s2);
    // setSlideImg2(s3)
    // setSlideImg3(s4)
  });
  const toggle = (state) => {
    switch (state) {
      case "slide1":
        setSlide1(true);
        setSlide2(false);
        // setSlide3(false);
        // setSlide4(false);
        break;
      case "slide2":
        setSlide2(true);
        setSlide1(false);
        // setSlide3(false);
        // setSlide4(false);
        break;
      // case "slide3":
      //   setSlide3(true);
      //   setSlide2(false);
      //   setSlide1(false);
      //   setSlide4(false);
      //   break;
      // case "slide4":
      //   setSlide4(true);
      //   setSlide2(false);
      //   setSlide3(false);
      //   setSlide1(false);
      //   break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexDirection: "column",

        //  backgroundColor: "rgba(238, 240, 164, 0.7)",
        borderBottom: "1px solid rgb(200,200,200,.6)",
        p: "6px",
        textAlign: "center",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {" "}
        {slide1 ? (
          <Box className="animation">
            <img
              src={slideImg}
              loading="lazy"
              alt="testimonial"
              style={{ width: "500px", height: "300px" }}
            />
          </Box>
        ) : (
          ""
        )}
        {slide2 ? (
          <Box className="animation">
            <img
              src={slideImg1}
              loading="lazy"
              alt="testimonial"
              style={{ width: "500px", height: "300px" }}
            />
          </Box>
        ) : (
          ""
        )}
        {/* {slide3 ? (
          <Box className="animation" >
           
            <img
              src={slideImg2}
              alt="testimonial" style={{width:'500px',height:'300px'}}
            />
                      </Box>
        ) : (
          ""
        )}
        {slide4 ? (
          <Box className="animation" >
            <img
             src={slideImg3}
              alt="testimonial" style={{width:'500px',height:'300px'}}
            />
          
            
          </Box>
        ) : (
          ""
        )} */}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          bottom: -5,
        }}
      >
        <Box sx={{ cursor: "pointer" }} onClick={() => toggle("slide1")}>
          <BsDot size="40px" style={{ color: slide1 ? "orange" : "black" }} />
        </Box>
        <Box sx={{ cursor: "pointer" }} onClick={() => toggle("slide2")}>
          <BsDot size="40px" style={{ color: slide2 ? "orange" : "black" }} />
        </Box>
        {/* <Box sx={{ cursor: "pointer" }} onClick={() => toggle("slide3")}>
    
          <BsDot size="40px" style={{color:slide3?"blue":"black"}}/>
        </Box>

        <Box sx={{ cursor: "pointer" }} onClick={() => toggle("slide4")}>
    
          <BsDot size="40px" style={{color:slide4?"blue":"black"}}/>
        </Box> */}

        <Box></Box>
      </Box>
    </Box>
  );
}

export default ProjectSlider;
