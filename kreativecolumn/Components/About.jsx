import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";
export default function About() {
  const [scroll, setScroll] = useState(300);
  const [scroll1, setScroll1] = useState(260);

  // useEffect(()=>{
  // window.addEventListener('scroll',()=>{
  //     setScroll((scroll*1.5)/window.pageXOffset)
  // })
  // console.log(scroll)
  // },[window.pageXOffset])
  return (
    <Box sx={{ mb: "100px" }}>
      <Box
        sx={{
          width: "100%",
          height: { md: "60vh", xs: "30vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          overflow: "hidden",
        }}
      >
        <img
          src="/Aboutus.jpg"
          alt="veneer"
          loading="lazy"
          style={{
            width: "100vw",

            height: "100%",
            transition: "transform 1.5s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </Box>
      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "70% ", xs: "90%" },
            justifyContent: "center",
          }}
        >
          <Box>
            <div className="section-head col-sm-12">
              <Box
                sx={{
                  fontSize: { md: "30px", xs: "20px" },
                  ml: { md: "-30px" },
                }}
              >
                <h4>
                  <span>About </span> Us
                </h4>
                <p style={{ textAlign: "left" }}>
                  We are a Kreative Kolumn with a passion for building beautiful
                  and functional spaces that meet the unique needs of our
                  clients. With years of experience in the industry, we have
                  honed our skills and developed a reputation for quality and
                  reliability.
                  <br />
                  <br />
                  Our team of experienced architects, engineers, and
                  construction professionals work together to bring your vision
                  to life, from initial concept to final inspection. We are
                  committed to using the latest technologies and techniques to
                  ensure that each of our projects is completed on time, within
                  budget, and to the highest standards of quality.
                  <br />
                  <br />
                  At Kreative Kolumn, we believe in the power of collaboration.
                  We work closely with our clients to understand their needs,
                  preferences, and goals, and to develop custom solutions that
                  meet their specific requirements. We also collaborate with
                  other industry professionals, such as designers and
                  contractors, to ensure that every aspect of the construction
                  process is seamlessly executed.
                  <br />
                  <br />
                  In addition to our commitment to quality and collaboration, we
                  also value sustainability and environmental responsibility. We
                  strive to use eco-friendly materials and building methods
                  whenever possible, and to minimize the environmental impact of
                  our projects.
                  <br />
                  <br />
                  Whether you're building a new home, remodeling an existing
                  space, or developing a commercial property, our team is happy
                  to assist you.
                </p>
              </Box>
            </div>
          </Box>
          <Box></Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "44% 40%", xs: "90%" },
            justifyContent: "center",
            gridGap: "10px",
          }}
        >
          <Box
            sx={{
              fontSize: { md: "17.6px", xs: "16px" },
              p: "15px",
              borderLeft: "3px solid #f9d019",
            }}
          >
            <h3>Mission</h3>
            <p style={{ color: "gray" }}>
              To give best quality output with in timely delivery and with in
              nominal budget.
            </p>
          </Box>
          <Box
            sx={{
              fontSize: { md: "17.6px", xs: "16px" },
              p: "15px",
              borderLeft: "3px solid #f9d019",
            }}
          >
            <h3>Vision</h3>
            <p style={{ color: "gray" }}>
              "To be the top leader in construction companies through innovation
              and technology"
            </p>
          </Box>
        </Box>
      </Box>
      <div className="section-head col-sm-12">
        <Box sx={{ fontSize: { md: "30px", xs: "20px" }, ml: { md: "-30px" } }}>
          <h4>
            <span>Our</span> Team
          </h4>
        </Box>
      </div>

      <Box
        sx={{
          boxShadow: "1px 1px 5px gray",
          m: "auto",
          borderRadius: "10px",
          width: { md: "90%", xs: "100%" },
          mt: "50px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "40% 40%", xs: "90%" },
            justifyContent: "center",
            background: "#f9d019",
            pt: "20px",
            height: { lg: "18vh",md: "28vh" },
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            pb: { md: "20px", sm: "10px", xs: "10px" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: { md: "left", xs: "center" },
            }}
          >
            <img
              src="/saket.webp"
              alt="saket"
              style={{
                border: "2px solid white",
                position: { md: "absolute", xs: "static" },
              }}
              className="ima"
            />
          </Box>
          <Box
            sx={{
              color: "white",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1>Mr.Saketh.K</h1>
            <h3 style={{ marginTop: "-10px" }}>Managing Director </h3>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <AiFillFacebook size="25px" />
              <AiOutlineInstagram size="25px" />
              <AiOutlineMail size="25px" />
              <AiFillLinkedin size="25px" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "40% 50%", xs: "100%" },
            justifyContent: "center",
            pt: "10px",
            gap: "30px",
          }}
        >
          <Box sx={{ pl: "10px" }}>
            <h2>
              About <span style={{ color: "#f9d019" }}>Me</span>{" "}
            </h2>
            <p style={{ color: "gray" }}>
              I’m Saketh. K, currently the Managing Director at Kreative Kolumn
              having 15+ years of experience in the construction legal
              approvals.  My areas of expertise & interest are
              handling all financial aspects, accounts, HR, construction legal
              approvals and P&L of the company.
            </p>
          </Box>
          <Box sx={{ mt: "60px", ml: "10px" }}>
            <Box
              sx={{
                display: "flex",
                pl: "20px",
                alignItems: "center",
                mt: { md: "-20px", xs: "2px" },
              }}
            >
              <p style={{ fontSize: "18px" }}> Experience</p>
              <span
                style={{ color: "gray", marginLeft: "107px", fontSize: "14px" }}
              >
                8+ Years
              </span>
            </Box>

            <Box
              sx={{
                display: "flex",
                pl: "20px",
                alignItems: "center",
                mt: { md: "-20px", xs: "2px" },
              }}
            >
              <p style={{ fontSize: "18px" }}>Expertise</p>
              <span
                style={{ color: "gray", marginLeft: "123px", fontSize: "14px" }}
              >
                Financial aspects,accounts,
                <br />
                HR,construction legal approvals and P&L of the company.
              </span>
            </Box>

            <Box
              sx={{
                display: "flex",
                pl: "20px",
                alignItems: "center",
                mt: { md: "-20px", xs: "2px" },
              }}
            >
              <p style={{ fontSize: "18px" }}>Mobile Number</p>
              <span
                style={{ color: "gray", marginLeft: "75px", fontSize: "14px" }}
              >
                {" "}
                +91 7702047515
              </span>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          boxShadow: "1px 1px 5px gray",
          m: "auto",
          borderRadius: "10px",
          width: { md: "90%", xs: "100%" },
          mt: "50px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "40% 40%", xs: "90%" },
            justifyContent: "center",
            background: "#f9d019",
            pt: "20px",
            height: { lg: "18vh", md: "28vh" },
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            pb: { md: "20px", sm: "10px", xs: "10px" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: { md: "left", xs: "center" },
            }}
          >
            <img
              src="/Suresh- Kreative-Kolumn.jpg"
              alt="saket"
              style={{
                border: "2px solid white",
                position: { md: "absolute", xs: "static" },
              }}
              className="ima"
            />
          </Box>
          <Box
            sx={{
              color: "white",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1>Mr.Suresh.V</h1>
            <h3 style={{ marginTop: "-10px" }}>Executive Director </h3>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <AiFillFacebook size="25px" />
              <AiOutlineInstagram size="25px" />
              <AiOutlineMail size="25px" />
              <AiFillLinkedin size="25px" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "40% 50%", xs: "100%" },
            justifyContent: "center",
            pt: "10px",
            gap: "30px",
          }}
        >
          <Box sx={{ pl: "10px" }}>
            <h2>
              About <span style={{ color: "#f9d019" }}>Me</span>{" "}
            </h2>
            <p style={{ color: "gray" }}>
              I’m Suresh. V, currently the Executive Director at Kreative Kolumn
              having 15+ years of experience in all the technical aspects
              related to the construction field.  My areas of
              expertise & interest are designs for Arch & Structural, Execution,
              Monitoring projects & scheduling meetings.
            </p>
          </Box>
          <Box sx={{ mt: "60px", ml: "10px" }}>
            <Box
              sx={{
                display: "flex",
                pl: "20px",
                alignItems: "center",
                mt: { md: "-20px", xs: "2px" },
              }}
            >
              <p style={{ fontSize: "18px" }}> Experience</p>
              <span
                style={{ color: "gray", marginLeft: "107px", fontSize: "14px" }}
              >
                15 Years
              </span>
            </Box>

            <Box
              sx={{
                display: "flex",
                pl: "20px",
                alignItems: "center",
                mt: { md: "-20px", xs: "2px" },
              }}
            >
              <p style={{ fontSize: "18px" }}>Expertise</p>
              <span
                style={{ color: "gray", marginLeft: "123px", fontSize: "14px" }}
              >
                Designs for Arch & Structural,
                <br /> Execution, Monitoring projects
              </span>
            </Box>

            <Box
              sx={{
                display: "flex",
                pl: "20px",
                alignItems: "center",
                mt: { md: "-20px", xs: "2px" },
              }}
            >
              <p style={{ fontSize: "18px" }}>Mobile Number</p>
              <span
                style={{ color: "gray", marginLeft: "75px", fontSize: "14px" }}
              >
                +91 9059419882
              </span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
