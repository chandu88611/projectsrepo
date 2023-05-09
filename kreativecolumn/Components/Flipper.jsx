import { Box } from "@mui/material";
import React from "react";

import { FaRegHandshake, FaFileContract } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import {
  AiOutlineFundProjectionScreen,
  AiTwotoneCalendar,
} from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";

function Flipper() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "30% 30% 30% ", sm: "40% 40% ", xs: "90%" },
        justifyContent: "center",
        gridRowGap: "130px",
        pb: "40px",
      }}
    >
      <Box
        className="flip-container"
        sx={{
          position: "relative",
          height: "35vh",
          border: "1px solid rgb(200,200,200,.3)",
        }}
      >
        <Box className="flipper">
          <Box
            className="front"
            sx={{
              background: "white",
              width: "88%",
              textAlign: "center",
              p: "20px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="round" sx={{ mt: "-150px" }}>
              <h1>1</h1>
            </Box>
            <Box sx={{ fontSize: { md: "13px", xs: "12px" } }}>
              <h2 style={{ padding: "5px", fontSize: "16px" }}>
                Make An Enquiry
              </h2>
            </Box>
            <AiTwotoneCalendar
              style={{ color: "black", marginTop: "20px" }}
              size="60px"
            />
          </Box>
          <Box
            className="back"
            sx={{
              background: "rgb(216, 159, 13,.8)",
              color: "white",
              textAlign: "center",
              p: "20px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="round1"
              sx={{
                mt:{ lg: "-130px", md: "-80px",xs:'-125px' },
                background: "white",
                color: "rgb(216, 159, 13,.8)",
              }}
            >
              <h1>1</h1>
            </Box>
            <h3>Make An Enquiry</h3>

            <p>
              {" "}
              Fill the enquiry form or reach us directly via call +91
              84574893579, one of our technical team members will approach you
              within 24hrs .
            </p>
          </Box>
        </Box>
      </Box>

      <Box
        className="flip-container"
        sx={{
          position: "relative",
          height: "35vh",
          border: "1px solid rgb(200,200,200,.3)",
        }}
      >
        <Box className="flipper">
          <Box
            className="front"
            sx={{
              background: "white",
              width: "88%",
              textAlign: "center",
              p: "20px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="round" sx={{ mt: "-150px" }}>
              <h1>2</h1>
            </Box>
            <Box sx={{ fontSize: { md: "13px", xs: "12px" } }}>
              <h2 style={{ padding: "5px", fontSize: "16px" }}>
                Recent Projects Delivered
              </h2>
            </Box>
            <FaRegHandshake
              style={{ color: "black", marginTop: "10px" }}
              size="63px"
            />
          </Box>
          <Box
            className="back"
            sx={{
              background: "rgb(216, 159, 13,.8)",
              color: "white",
              textAlign: "center",
              p: "20px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="round1"
              sx={{
                mt:{ lg: "-130px", md: "-80px",xs:'-135px' },
                background: "white",
                color: "rgb(216, 159, 13,.8)",
              }}
            >
              <h1>2</h1>
            </Box>
            <h3>Recent Projects Delivered</h3>
            <p>
              {" "}
              You can view our latest projects which are delivered by us. We're
              always happy to assist you based on the requirement.
            </p>
          </Box>
        </Box>
      </Box>

      <Box
        className="flip-container"
        sx={{
          position: "relative",
          height: "35vh",
          border: "1px solid rgb(200,200,200,.3)",
        }}
      >
        <Box className="flipper">
          <Box
            className="front"
            sx={{
              background: "white",
              width: "88%",
              textAlign: "center",
              p: "20px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="round" sx={{ mt: "-160px" }}>
              <h1>3</h1>
            </Box>
            <Box sx={{ fontSize: { md: "13px", xs: "12px" } }}>
              <h2 style={{ padding: "5px", fontSize: "16px" }}>
                Place the Order
              </h2>
            </Box>
            <FaFileContract
              style={{ color: "black", marginTop: "20px" }}
              size="50px"
            />
          </Box>
          <Box
            className="back"
            sx={{
              background: "rgb(216, 159, 13,.8)",
              color: "white",
              textAlign: "center",
              p: "20px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="round1"
              sx={{
                mt: { lg: "-110px", md: "-80px",xs:'-115px' },
                background: "white",
                color: "rgb(216, 159, 13,.8)",
              }}
            >
              <h1>3</h1>
            </Box>
            <h3>Place the Order</h3>
            <p>
              {" "}
              Once you're happy with our work you can immediately place the
              order to proceed further by signing the transparent construction
              contract.
            </p>
          </Box>
        </Box>
      </Box>

      <Box
        className="flip-container"
        sx={{
          position: "relative",
          height: "35vh",
          border: "1px solid rgb(200,200,200,.3)",
        }}
      >
        <Box className="flipper">
          <Box
            className="front"
            sx={{
              background: "white",
              width: "88%",
              textAlign: "center",
              p: "20px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="round" sx={{ mt: "-140px" }}>
              <h1>4</h1>
            </Box>
            <Box sx={{ fontSize: { md: "13px", xs: "12px" } }}>
              <h2 style={{ padding: "5px", fontSize: "16px" }}>
                Design Samples
              </h2>
            </Box>
            <MdOutlineDesignServices
              style={{ color: "black", marginTop: "20px" }}
              size="60px"
            />
          </Box>
          <Box
            className="back"
            sx={{
              background: "rgb(216, 159, 13,.8)",
              color: "white",
              textAlign: "center",
              p: "20px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="round1"
              sx={{
                mt: { lg: "-130px", md: "-125px" ,xs:'-135px'},
                background: "white",
                color: "rgb(216, 159, 13,.8)",
              }}
            >
              <h1>4</h1>
            </Box>
            <h3>Design Samples</h3>
            <p>
              {" "}
              Based on your requirements our experienced architecture will
              provide the quality designs.
            </p>
          </Box>
        </Box>
      </Box>

      <Box
        className="flip-container"
        sx={{
          position: "relative",
          height: "35vh",
          border: "1px solid rgb(200,200,200,.3)",
        }}
      >
        <Box className="flipper">
          <Box
            className="front"
            sx={{
              background: "white",
              width: "88%",
              textAlign: "center",
              p: "20px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="round" sx={{ mt: "-140px" }}>
              <h1>5</h1>
            </Box>
            <Box sx={{ fontSize: { md: "13px", xs: "12px" } }}>
              <h2 style={{ padding: "5px", fontSize: "16px" }}>
                Project Execution & Tracking
              </h2>
            </Box>
            <AiOutlineFundProjectionScreen
              style={{ color: "black" }}
              size="65px"
            />
          </Box>
          <Box
            className="back"
            sx={{
              background: "rgb(216, 159, 13,.8)",
              color: "white",
              textAlign: "center",
              p: "20px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="round1"
              sx={{
                mt: { lg: "-130px", md: "-120px",xs:'-135px' },
                background: "white",
                color: "rgb(216, 159, 13,.8)",
              }}
            >
              <h1>5</h1>
            </Box>
            <h3>Project Execution & Tracking</h3>
            <p>
              {" "}
              Once we started & executing the project our team will update the
              work progress with images & videos.
            </p>
          </Box>
        </Box>
      </Box>

      <Box
        className="flip-container"
        sx={{
          position: "relative",
          height: "35vh",
          border: "1px solid rgb(200,200,200,.3)",
        }}
      >
        <Box className="flipper">
          <Box
            className="front"
            sx={{
              background: "white",
              width: "88%",
              textAlign: "center",
              p: "20px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="round" sx={{ mt: "-140px" }}>
              <h1>6</h1>
            </Box>
            <Box sx={{ fontSize: { md: "13px", xs: "12px" } }}>
              <h2 style={{ padding: "5px", fontSize: "16px" }}>
                On Time Delivery
              </h2>
            </Box>
            <BsFillHouseDoorFill
              style={{ color: "black", marginTop: "20px" }}
              size="55px"
            />
          </Box>
          <Box
            className="back"
            sx={{
              background: "rgb(216, 159, 13,.8)",
              color: "white",
              textAlign: "center",
              p: "20px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="round1"
              sx={{
                mt: { lg: "-130px", md: "-120px",xs:'-135px' },
                background: "white",
                color: "rgb(216, 159, 13,.8)",
              }}
            >
              <h1>6</h1>
            </Box>
            <h3>On Time Delivery</h3>
            <p>
              {" "}
              We make sure that the project will be done within the time
              allocated & delivery without any hassle.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Flipper;
