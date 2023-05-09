import { Box } from "@mui/system";
import { useRouter } from "next/router";

import Link from "next/link";
import { Button } from "@mui/material";
function Header() {
  const router = useRouter();
  const path = router.asPath;
  // function openDocument() {
  //   window.open('path/to/your/document', '_blank');
  // }
  return (
    <>
      <Box sx={{ position: "sticky", top: "0" }}>
        <Box
          sx={{
            display: { md: "flex", sm: "none", xs: "none" },
            margin: "auto",
            background: "white",
            pr: "20px",
            boxShadow: " 0px 2px 10px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box sx={{ p: "3px", ml:{lg: "6vw",md:'2vw'} , display:"flex",alignItems:"center"}}>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: 600,
               
              }}
            >
              <img
                src="/KK-logo-design-250.jpg"
                loading="lazy"
                alt="Kreativecolumn"
                className="header_image"
              />
            </Link>
          </Box>

          <Box
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              justifyContent: "space-between",
              margin: "auto",
              color: "black",
              pr: "20px",
              fontWeight: 600,
            }}
          >
            <Box
              sx={{
                p: "10px",
                m: "3px",
              }}
            >
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: path === "/" ? "rgb(216, 159, 13,.8)" : "black",
                  fontWeight: 600,
                  borderBottom:
                    path === "/" ? "1px solid rgb(216, 159, 13,.8)" : "white",
                }}
              >
                <p style={{ fontWeight: 400 }}> Home</p>{" "}
              </Link>
            </Box>
            <Box
              sx={{
                p: "10px",
                m: "3px",
              }}
            >
              <Link
                href="/projects"
                style={{
                  textDecoration: "none",
                  color:
                    path === "/projects/" ? "rgb(216, 159, 13,.8)" : "black",
                  fontWeight: 600,
                  borderBottom:
                    path === "/projects/"
                      ? "1px solid rgb(216, 159, 13,.8)"
                      : "white",
                }}
              >
                <p style={{ fontWeight: 400 }}> Projects</p>
              </Link>
            </Box>
            <Box
              sx={{
                p: "10px",
                m: "3px",
              }}
            >
              <Link
                href="/calculator"
                style={{
                  textDecoration: "none",
                  color:
                    path === "/calculator/" ? "rgb(216, 159, 13,.8)" : "black",
                  fontWeight: 600,
                  borderBottom:
                    path === "/calculator/"
                      ? "1px solid rgb(216, 159, 13,.8)"
                      : "white",
                }}
              >
                <p style={{ fontWeight: 400 }}> Cost Estimator</p>
              </Link>
            </Box>
            <Box
              sx={{
                p: "10px",
                m: "3px",
              }}
            >
              <Link
                href="/about"
                style={{
                  textDecoration: "none",
                  color: path === "/about/" ? "rgb(216, 159, 13,.8)" : "black",
                  fontWeight: 600,
                  borderBottom:
                    path === "/about/"
                      ? "1px solid rgb(216, 159, 13,.8)"
                      : "white",
                }}
              >
                <p style={{ fontWeight: 400 }}> About</p>
              </Link>{" "}
            </Box>
            <Box
              sx={{
                p: "10px",
                m: "3px",
              }}
            >
              <Link
                href="/contact"
                style={{
                  textDecoration: "none",
                  color:
                    path === "/contact/" ? "rgb(216, 159, 13,.8)" : "black",
                  fontWeight: 600,
                  borderBottom:
                    path === "/contact/"
                      ? "1px solid rgb(216, 159, 13,.8)"
                      : "white",
                }}
              >
                <p style={{ fontWeight: 400 }}> Contact</p>
              </Link>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pl: "1vw",
              }}
            >
              <Link
                href="/quality-control-checklist-construction-company"
                style={{ textDecoration: "none", color: "black" }}
                
              >
                {" "}
                <Button
                  variant="contained"
                  sx={{
                    background: "rgb(216, 159, 13,.8)",
                    textTransform: "capitalize",
                    fontWeight: 400,
                    "&:hover": { background: "rgb(216, 159, 13)" },
                  }}
                >
                  Quality policy
                </Button>
              </Link>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pl: "1.5vw",
              }}
            >
              <a
                href="/contact"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <Button
                  variant="contained"
                 
                  sx={{
                    background: "white",
                    border: "1px solid rgb(216, 159, 13,.8)",
                    color: "rgb(216, 159, 13,.8)",
                    fontWeight: 400,
                    textTransform: "capitalize",
                    "&:hover": {
                      background: "rgb(216, 159, 13)",
                      color: "white",
                    },
                  }}
                >
                  Talk to Expert
                </Button>
              </a>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: { md: "none", sm: "flex", xs: "flex" },
            justifyContent: "center",
            background: "white",
            boxShadow: " 0px 2px 10px 2px rgba(0, 0, 0, 0.2)",
            width: "100vw",
          }}
        >
          <img
            src="/KK-logo-design-250.jpg"
            alt=""
            loading="lazy"
            style={{ width: "200px", height: "70px" }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Header;
