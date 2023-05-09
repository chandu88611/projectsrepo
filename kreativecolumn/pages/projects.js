import * as React from "react";
import { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import Layout from "../Components/Layout";
import ContacForm from "../Components/ContacForm";
import Head from "next/head";
import ProjectSlider from "../Components/ProjectSlider";
export default function project() {
  const [active, setActive] = useState(false);
  // const [completed,setCompleted]=useState(true)

  return (
    <>
      <Head>
        <title>Projects of Kreative Kolumn-Your Dreams, Our Reality</title>
        <meta name="description" content="explore our Creative  projects" />
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
            src="/projectsKk.webp"
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
            pl: { md: "59px", sm: "10px", xs: "10px" },
            textAlign: "center",
          }}
        >
          <div className="section-head col-sm-12" id="packages">
            <Box sx={{ fontSize: { md: "30px", xs: "20px" } }}>
              <h4>
                <span> Our </span> Projects
              </h4>
            </Box>
            <p>
              Over 15+ projects delivered since 2000. We ensure quality would be
              the trust factor from day one to get the desired output.
            </p>
          </div>
        </Box>
        <Box sx={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <button
            onClick={() => setActive(false)}
            style={{
              color: "rgb(216, 159, 13)",
              border: "1px solid rgb(216, 159, 13)",
              background: active ? "white" : "rgb(216, 159, 13)",
              color: active ? "rgb(216, 159, 13)" : "white",
              width: "100px",
              height: "35px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Completed
          </button>
          <button
            onClick={() => setActive(true)}
            style={{
              color: "rgb(216, 159, 13)",
              border: "1px solid rgb(216, 159, 13)",
              background: active ? "rgb(216, 159, 13)" : "white",
              color: active ? "white" : "rgb(216, 159, 13)",
              width: "100px",
              height: "35px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Active
          </button>
        </Box>

        {active ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                md: "30vw 30vw 30vw",
                sm: "40vw 40vw",
                xs: "90vw",
              },
              justifyContent: "center",
              gridGap: "10px",
              mt: "10px",
            }}
          >
            <Box>
              <Card>
                <CardActionArea>
                  <ProjectSlider
                    s1="/Individual_house.jpg"
                    s2="/individual_house2.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Individual House
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Hyderabad
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>

            <Box>
              <Card>
                <CardActionArea>
                  <ProjectSlider
                    s1="/individual-house-Alwal-2.jpg"
                    s2="/individual-house-Alwal.jpg"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Individual House
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Alwal
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box>
              <Card>
                <CardActionArea>
                  <ProjectSlider
                    s1="/KK-pr-4.webp"
                    s2="/KK-pr-2.webp"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      School
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Hafeezpet
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box>
              <Card>
                <CardActionArea>
                  <ProjectSlider
                    s1="/villa-Hayatnagar-1.webp"
                    s2="/villa-Hayatnagar-2.webp"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Villa
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Hayatnagar
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box>
              <Card>
                <CardActionArea>
                  <ProjectSlider s1="/project1.webp" s2="/project3.webp" />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Commercial Building
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Nallagandla
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>


           
          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                md: "30vw 30vw 30vw",
                sm: "40vw 40vw",
                xs: "90vw",
              },
              justifyContent: "center",
              gridGap: "10px",
              mt: "10px",
            }}
          >
             {/* <Box>
              <Card>
                <CardActionArea>
                  <ProjectSlider s1="/KK-pr-3.webp" s2="/KK-pr-4.webp" />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Apartment
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Hyderabad
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box> */}
            <Box>
              <Card>
                <CardActionArea>
                  <ProjectSlider s1="/newp4.jpg" s2="/newp8.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Apartment
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Hyderabad
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>

            <Box>
              <Card>
                <CardActionArea>
                  <ProjectSlider s1="/newp9.jpg" s2="/newp10.jpg" />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Siri Jewel
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Anuradha Meadows
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box>
              <Card>
                <CardActionArea>
                  <ProjectSlider s1="/newp3.jpg" s2="/newp3.jpg" />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Premia Acadamy
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Attapur
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        )}

        <Box
          sx={{
            p: { md: "150px", sm: "60px", xs: "10px" },
            background: "rgb(240,240,240,.5)",
          }}
        >
          <ContacForm />
        </Box>
      </Layout>
    </>
  );
}
