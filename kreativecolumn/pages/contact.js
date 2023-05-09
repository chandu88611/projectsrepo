import { Box } from "@mui/system";
import Layout from "../Components/Layout";
import ContacForm from "../Components/ContacForm";
import Head from "next/head";

import { AiOutlineMail } from "react-icons/ai";
import { BiPhone, BiPaperPlane } from "react-icons/bi";
function contact() {
  return (
    <>
      <Head>
        <title>
          Contact Details of Kreative Kolumn- Your Dreams, Our Reality
        </title>
        <meta
          name="description"
          content="Know the contact details of Kreative Kolumn such as corporate address, mobile number and email ID. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.jpg" />
      </Head>
      <Layout>
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
            src="/contact.jpg"
            alt="veneer"
            loading="lazy"
            style={{
              width: "100vw",

              height: "100%",
              transition: "transform 1.5s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: { md: "40vw 40vw", xs: "100%" },
            p: "9px",mb:'50px'
          }}
        >
          <Box sx={{ ml: "auto", pr: "30px", pt: "50px" }}>
            <h3>General Enquiries</h3>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Box sx={{ color: "rgb(216, 159, 13)", pt: "18px" }}>
                <BiPaperPlane size="30px" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>Address </span> <br />
                  Flat no-405, <br /> Topaz Plaza Panjagutta, Hyderabad.
                </p>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Box sx={{ color: "rgb(216, 159, 13)", pt: "18px" }}>
                <BiPhone size="30px" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>Phone </span> <br />
                  +91 90594 19882, +91 8019810777
                  <br />{" "}
                </p>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "20px" }}>
              <Box sx={{ color: "rgb(216, 159, 13)", pt: "18px" }}>
                <AiOutlineMail size="30px" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>Mail </span> <br />
                  sales@kreativekolumn.com
                  <br />
                </p>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: "3px solid rgb(200,200,200,.6) ",
              borderRadius: "15px",mt:'75px'
            }}
          >
            <ContacForm />
          </Box>
        </Box>
     
      </Layout>
    </>
  );
}

export default contact;
