import { Box } from "@mui/system";
import { useState } from "react";

import { RxAvatar } from "react-icons/rx";
import { BsDot } from "react-icons/bs";
function Testimonial() {
  const [slide1, setSlide1] = useState(true);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);
  const toggle = (state) => {
    switch (state) {
      case "slide1":
        setSlide1(true);
        setSlide2(false);
        setSlide3(false);
        setSlide4(false);
        break;
      case "slide2":
        setSlide2(true);
        setSlide1(false);
        setSlide3(false);
        setSlide4(false);
        break;
      case "slide3":
        setSlide3(true);
        setSlide2(false);
        setSlide1(false);
        setSlide4(false);
        break;
      case "slide4":
        setSlide4(true);
        setSlide2(false);
        setSlide3(false);
        setSlide1(false);
        break;
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
        pt: "15px",
        mb: "10px",
        pb: "15px",
        //  backgroundColor: "rgba(238, 240, 164, 0.7)",
        pl: { md: "70px", xs: "10px" },
        pr: { md: "70px", xs: "10px" },
        textAlign: "center",
      }}
    >
      <div className="section-head col-sm-12">
        <Box sx={{ fontSize: { md: "30px", xs: "20px" } }}>
          <h4>
            <span>What our </span> Happy Clients Say
          </h4>
        </Box>
        <p>
          {" "}
          Clients sharing experience with us. Next it’s your turn to get your
          dream house with us.
        </p>
      </div>
      <Box sx={{ display: "flex" }}>
        {" "}
        {slide1 ? (
          <Box className="animation">
            {/* <RxAvatar size={"70px"}/> */}
            <img
              src="/avatar1.png"
              alt="testimonial"
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              I had a great experience working with this construction company
              for my dream home. The team was professional, knowledgeable, and
              efficient. They provided excellent customer service throughout the
              entire process, and the end result was exactly what I had
              envisioned.{" "}
            </p>
          </Box>
        ) : (
          ""
        )}
        {slide2 ? (
          <Box className="animation">
            {/* <RxAvatar size={"70px"}/> */}
            <img
              src="/avatar5.jpg"
              alt="testimonial"
              style={{ width: "120px", height: "120px" }}
            />
            <p>
              I came to know about this construction company through one of my
              best friend for a commercial build-out project, and I couldn't be
              happier with the results. The team was experienced and skilled,
              and they provided regular updates throughout the project to ensure
              everything was on track.
            </p>
          </Box>
        ) : (
          ""
        )}
        {slide3 ? (
          <Box className="animation">
            {/* <RxAvatar size={"70px"}/> */}
            <img
              src="/avatar3.avif"
              alt="testimonial"
              style={{ width: "150px", height: "150px" }}
            />
            <p>
              I had the pleasure of working with this construction company on a
              residential renovation project, and I was thoroughly impressed
              with their professionalism and expertise.
            </p>
          </Box>
        ) : (
          ""
        )}
        {slide4 ? (
          <Box className="animation">
            <img
              src="/avatar4.jpg"
              alt="testimonial"
              style={{ width: "120px", height: "120px" }}
            />
            {/* <RxAvatar size={"70px"}/> */}
            <p>
              Happy to share we got a dream home with Kreative Kolumn. Their
              guidance, support & knowledge sharing throughout the project is
              marvelous. Thanks to the entire team and our entire family is
              ecstatic of the new house.
            </p>
          </Box>
        ) : (
          ""
        )}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ cursor: "pointer" }} onClick={() => toggle("slide1")}>
          <BsDot size="40px" style={{ color: slide1 ? "orange" : "black" }} />
        </Box>
        <Box sx={{ cursor: "pointer" }} onClick={() => toggle("slide2")}>
          <BsDot size="40px" style={{ color: slide2 ? "orange" : "black" }} />
        </Box>
        <Box sx={{ cursor: "pointer" }} onClick={() => toggle("slide3")}>
          <BsDot size="40px" style={{ color: slide3 ? "orange" : "black" }} />
        </Box>

        <Box sx={{ cursor: "pointer" }} onClick={() => toggle("slide4")}>
          <BsDot size="40px" style={{ color: slide4 ? "orange" : "black" }} />
        </Box>

        <Box></Box>
      </Box>
    </Box>
  );
}

export default Testimonial;
