import { Box } from "@mui/material";
import React,{useEffect} from "react";
import { useLocation } from 'react-router-dom';


function About() {

  const location = useLocation();
  useEffect(() => {
    document.title = ` saikailashdhaba ${location.pathname}`;
  }, [location]);
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url(./images/back.jpg)",
         
          padding: "2vh",
        }}
      >
        <h2>Our Story</h2>
        <img src="./images/saikailash.jpg" style={{ width: "65%" }} alt="e" />
        <p
          style={{
            textAlign: "center",
            paddingLeft: "6vh",
            paddingRight: "6vh",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          (NEW SAi Kailash Caterers has established 1n the year 1993 since we
          are inthe market done lot's of events and my major cllnts are
          DMRL,DRDO, NOVOTEL, ETC.) We are specialized in all typeof PURE-VEG
          Catenng services We take alltype of events like Wedding, Corporate
          Events,Anniversary's, Baby Shower,Engagement's.House Warming
          Ceremony.Cradle Ceremony,Etc andwe take the services from 50 to 4000
          members and we have the Restaurant's and Banquet's
        </p>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "40vw 40vw ", sm: "100vw" },
          backgroundImage: "url(./images/back.jpg)",
          alignItems: "center",
          padding: "6vh",
          justifyContent:"center"
        }}
      >
        <Box>
          <img src="./images/saikailash.jpg" style={{ width: "65%" }} alt="e" />
        </Box>
        <Box>
          <p style={{ textAlign: "center" }}>
            {" "}
            HI this is ANILTAYAL from NEW SAi KAILASH CATERING We areinto PURE
            VEG CATERINGand we do take the services from 10 members to 2000 
            members. <br />we take for LIVECOUNTERS FOR CHAAT SOUTHINDIAN ITALIAN
            MEXICAN CHINESE NORTHINOIAN TANDOOR FRUIT<br />
            <br />
            Our company's goal is to always offer a diverse menu of cutting-edge culinary meals as well as occasionally develop and support good eating habits.
            <br />
We simply kept in mind the palatable requirement for everyone in the society, whether they be young, elderly, or senior citizens, when curating our menu.
<br />
Additionally, we have gone above and above by including the most unusual recipes to fully satisfy our customers.


          </p>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default About;
