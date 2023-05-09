import { Box } from "@mui/system";
import React from "react";
import Testimonial from "./Testimonial";

import Scroll from "./Scroll";
import Whychooseus from "./Whychooseus";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Flipper from "./Flipper";
import Stats from "./Stats";
// import { BsHouseCheckFill,BsFillBuildingsFill,BsPeopleFill} from "react-icons/bs";

import Package from "../Components/Package";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Link from "next/link";

function HomeComp() {
  SwiperCore.use([Autoplay]);
  const myArray = ["/c1.webp", "/s1.webp", "/s3.webp", "/s4.webp"];
  const [state, setState] = React.useState("/c1.webp");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  React.useEffect(() => {
    const inrjb = setInterval(() => {
      // update state with current index value every 2 seconds
      setState(myArray[currentIndex]);
      setCurrentIndex((currentIndex + 1) % myArray.length); // update index
      console.log(state);
    }, 4000);
    return () => {
      clearInterval(inrjb);
    };

    // setCurrentIndex(0)
  }, [currentIndex]);

  return (
    <Box sx={{ mt: "px" }}>
      <Box
        sx={{
          backgroundImage:`url(${state})`,
          display: "grid",
          justifyContent: {lg:"left",md:'center',sm:'center',xs:'center'},
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          // gridTemplateColumns: { lg: "40% 60%", md: "50% 60%", sm: "90%" },
          p: { md: "60px", sm: "30px", xs: "10px" },
          borderRadius: "5px",
          height: { md: "60vh", sm: "50vh", xs: "45vh" },
          position: "relative",

          // ,textShadow:"1.5px 1px gray"
        }}
      >
        <Box
          sx={{
            pl: { md: "30px", sm: "0px" },

            fontSize: { md: "30px", sm: "20px", xs: "15px" },
            zIndex: 2,textAlign:{lg:"left",md:'center',sm:'center',xs:'center'}
          }}
        >
          <h2> Transform Your Dream into Reality</h2>
          <Box
            sx={{
              fontSize: { md: "20px", sm: "15px", xs: "11px" },
              mt: "-20px",
              mb: "15px"
            }}
          >
            <span style={{color:'yellow'}} className="textu">
              
              We Undertake <span style={{fontWeight:'bold'}}>Turn Key Projects</span>  (Residential, Commercial, Schools &
              Hospitals)
            </span>
          </Box>
          <Box sx={{ display: "flex", gap: "50px", pb: "30px" ,justifyContent:{lg:"left",md:'center',sm:'center',xs:'center'}}}>
            <Box
              sx={{
                fontSize: { md: "15px", sm: "12px", xs: "10px" },
               
              }}
            >
              <Typography
                sx={{ fontSize: { md: "25px", sm: "20px", xs: "16px" } }}
              >
                15+
              </Typography>
              <br />
              Projects Delivered
            </Box>
            <Box
              sx={{
                fontSize: { md: "15px", sm: "12px", xs: "10px" },
                
              }}
            >
              <Typography
                sx={{ fontSize: { md: "25px", sm: "20px", xs: "16px" } }}
              >
                4000+
              </Typography>
              <br />
              Qualified Workforce
            </Box>
            <Box
              sx={{
                fontSize: { md: "15px", sm: "12px", xs: "10px" },
               
              }}
            >
              <Typography
                sx={{ fontSize: { md: "25px", sm: "20px", xs: "16px" } }}
              >
                3,00,000+
              </Typography>
              <br />
              Built up area
            </Box>
          </Box>

          <Box
            sx={{
              display: { md: "flex", sm: "flex", xs: "flex" },
              flexDirection: { md: "row", sm: "flex", xs: "column" },
              gap:{ md: "20px", sm: "20px", xs: "10px" },
              justifyContent:{lg:"left",md:'center',sm:'center',xs:'center'}
            }}
          >
            <Link
              href="#packages"
              style={{ textDecoration: "none", color: "black" }}
         
            >
              
              <Button   id="blink"
                variant="contained"
                sx={{
                  background: "rgb(216, 159, 13,.8)",

                  color: "white",
                  fontWeight: 400,
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "rgb(216, 159, 13)",
                    color: "white",
                  },
                }}
              >
              Starts from 1550/-sft*
              </Button>


            </Link>
            <Link
              href="/calculator"
              style={{ textDecoration: "none", color: "black" }}
            >
              
              <Button
                variant="contained"
                sx={{
                  background: "white",
                  border: "1px solid rgb(216, 159, 13,.8)",
                  color: "rgb(216, 159, 13,.8)",
                  textTransform: "capitalize",
                  fontWeight: 400,
                  "&:hover": {
                    background: "rgb(216, 159, 13)",
                    color: "white",
                  },
                 pl:'38px',pr:'38px'
                }}
              >
                Cost Calculator
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgb(0,0,0,.5)",
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          p: { md: "23px", sm: "14px", xs: "0" },
          mt: "20px",
          mb: "20px",
          background: "rgb(201,201,201,.3)",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            pt: "20px",
            fontSize: { md: "20px", xs: "15px" },
          }}
        >
          <div className="section-head col-sm-12">
            <Box sx={{ fontSize: { md: "30px", xs: "20px" } }}>
              <h4>
                <span> Our Core </span> Services
              </h4>
              <p>
                Over the years, we have been exceeding our clients expectations
                by consistently delivering quality services with the best
                offerings one can source from the market.
              </p>

            </Box>
          </div>
        </Box>
        <Box sx={{ p: "10px" }}>
          <Scroll />
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          mt: "30px",
          fontSize: { md: "20px", xs: "15px" },
          backgroundColor: "white ",
        }}
      >
        <div
          className="section-head col-sm-12"
          style={{ marginBottom: "-20px" }}
        >
          <Box sx={{ fontSize: { md: "30px", xs: "20px" } }}>
            <h4>
              <span>From Foundation to </span> Finish
            </h4>
          </Box>
          <p>Make your dream home come true with us.</p>
        </div>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "45vw 40vw", xs: "90vw" },
          alignItems: "center",
          justifyContent: "center",
          p: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "start", xs: "center" },
            textAlign: { md: "left", xs: "center" },

            width: { md: "45vw", sm: "50vw", xs: "80vw" },

            flexDirection: "column",
            gap: "30px",

            margin: "auto",

            fontSize: { md: "16px", xs: "15px" },
            p: "5px",
            color: "grey",
          }}
        >
          <p>
            We are a Kreative Kolumn with a passion for building beautiful and
            functional spaces that meet the unique needs of our clients. With
            years of experience in the industry, we have honed our skills and
            developed a reputation for quality and reliability.
            <br /> <br /> Our team of experienced architects, engineers, and
            construction professionals work together to bring your vision to
            life, from initial concept to final inspection. We are committed to
            using the latest technologies and techniques to ensure that each of
            our projects is completed on time, within budget, and to the highest
            standards of quality.
          </p>
          <Box sx={{ pb:"20px",display:'flex',justifyContent:{md:'left',xs:'center'}}}>
          <Link href="/about">
            <Button
              style={{
                background: "rgb(216, 159, 13)",
                border: "none",
                color: "white",
                pl:"8px",
                pr:'8px',
                textTransform: "capitalize",
                cursor: "pointer",
              }}
            >
              Know More
            </Button>
          </Link>
        </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/ab1.webp"
            alt="kreativekolumn"
            loading="lazy"
            style={{
              width: "100%",
              height: "320px",

              transition: "transform 1.5s ease-in-out",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ background: "rgb(201,201,201,.3)" }}>
        <div className="section-head col-sm-12">
          <Box sx={{ fontSize: { md: "30px", xs: "20px" }, pt: "20px" }}>
            <h4>
              <span>Our</span> Trust Indicators
            </h4>
          </Box>
          <p>
            Below are the few trust indicators which are related to our work.
            Approach us to know more.
          </p>
        </div>
        <Stats />
      </Box>
      <Box
        sx={{
          pl: { md: "5px", sm: "14px", xs: "9px" },
          pr: { md: "5px", sm: "14px", xs: "9px" },
          pb: "40px",

          mt: "20px",
          mb: "20px",
          background: "rgb(201,201,201,.3)",
          textAlign: "center",
        }}
      >
        <div className="section-head col-sm-12">
          <Box sx={{ fontSize: { md: "30px", xs: "20px" }, pt: "20px" }}>
            <h4>
              <span>Our Approach in </span> Crafting Your Vision
            </h4>
          </Box>
          <p>
            At Kreative Kolumn we segregate our process in various sections so
            that it will be a crystal clear process between the client & the
            architecture.
          </p>
        </div>

        <Flipper />
      </Box>

      <Whychooseus />

      <Box
        sx={{
          textAlign: "center",
          p: "20px",
          background: "rgb(201,201,201,.3)",
        }}
      >
        <div className="section-head col-sm-12">
          <Box sx={{ fontSize: { md: "30px", xs: "20px" } }}>
            <h4>
              <span>Our </span> Projects
            </h4>
          </Box>
          <p>
            
            Over 15+ projects delivered since 2000. We ensure quality would be
            the trust factor from day one to get the desired output.
          </p>
        </div>
      </Box>
      <Box
        sx={{
          display: { md: "flex", sm: "none", xs: "none" },
          justifyContent: "center",
          background: "rgb(201,201,201,.3)",
          alignItems: "center",

          pl: { md: "50px", sm: "60px", xs: "20px" },
          pr: { md: "50px", sm: "60px", xs: "20px" }
        }}
      >
        <Swiper
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          // // Navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
          // navigation={{ nextEl: '.my-next-button', prevEl: '.my-prev-button' }}
          centerSlides
          spaceBetween={10}
          slidesPerView={3}
          // pagination={{clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 2000 }}
          autoplayDisableOnInteraction={false}
          style={{ color: "rgb(216, 159, 13)" }}
          //  style={{paddingLeft:"6px"}}
        >




          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp3.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Premia Academy
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Attapur
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp4.jpg"
                    alt="green iguana"
                  />
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
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp3.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Premia Academy
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Attapur
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp10.jpg"
                    alt="green iguana"
                  />
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
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp9.jpg"
                    alt="green iguana"
                  />
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
          </SwiperSlide>
          
         

          <div className=".swiper-button-next">
            <br />
          </div>
          <div className=".swiper-button-prev"></div>
          <br />
        </Swiper>
       
      </Box>
      <Box
        sx={{
          display: { md: "none", sm: "none", xs: "block" },
          justifyContent: "center",
          background: "rgb(201,201,201,.3)",
          alignItems: "center",
          p: "5px",
          mb: "30px",
        }}
      >
        <Swiper
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          // // Navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
          // navigation={{ nextEl: '.my-next-button', prevEl: '.my-prev-button' }}
          centerSlides
          spaceBetween={10}
          slidesPerView={1}
          // pagination={{clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 2000 }}
          autoplayDisableOnInteraction={false}
          style={{ color: "rgb(216, 159, 13)" }}
          //  style={{paddingLeft:"6px"}}
        >
        

          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp3.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Premia Academy
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Attapur
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp4.jpg"
                    alt="green iguana"
                  />
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
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp3.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Premia Academy
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Attapur
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </SwiperSlide>

          










          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp10.jpg"
                    alt="green iguana"
                  />
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
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp9.jpg"
                    alt="green iguana"
                  />
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
          </SwiperSlide>
          

         
          <div className=".swiper-button-next">
            <br />
          </div>
          <div className=".swiper-button-prev"></div>
          <br />
        </Swiper>

      
      </Box>
      <Box
        sx={{
          display: { md: "none", sm: "block", xs: "none" },
          justifyContent: "center",
          background: "rgb(201,201,201,.3)",
          alignItems: "center",
          p: "5px",
          mb: "30px",
        }}
      >
        <Swiper
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          // // Navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
          // navigation={{ nextEl: '.my-next-button', prevEl: '.my-prev-button' }}
          centerSlides
          spaceBetween={10}
          slidesPerView={2}
          // pagination={{clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 2000 }}
          autoplayDisableOnInteraction={false}
          style={{ color: "rgb(216, 159, 13)" }}
          //  style={{paddingLeft:"6px"}}
        >
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp3.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Premia Academy
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Attapur
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp4.jpg"
                    alt="green iguana"
                  />
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
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp3.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Premia Academy
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Attapur
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp10.jpg"
                    alt="green iguana"
                  />
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
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ width: { md: 380 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/newp9.jpg"
                    alt="green iguana"
                  />
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
          </SwiperSlide>
          

         
          <div className=".swiper-button-next">
            <br />
          </div>
          <div className=".swiper-button-prev"></div>
          <br />
        </Swiper>

      </Box>
      <Box sx={{ background: "rgb(201,201,201,.3)", pb:"20px",display:'flex',justifyContent:'center',mt:{md:'0',xs:'-30px'}}}>
          <Link href="/projects">
            <Button
              style={{
                background: "rgb(216, 159, 13)",
                border: "none",
                color: "white",
                pl:"8px",
                pr:'8px',
                textTransform: "capitalize",
                cursor: "pointer",
              }}
            >
              View All Projects
            </Button>
          </Link>
        </Box>
      <Box
        sx={{
          // background: "rgb(201,201,201,.3)",
          pb: "20px",
          textAlign: "center",
          pl: { md: "40px", sm: "10px", xs: "10px" },
          pr: { md: "40px", sm: "10px", xs: "10px" },
          pb: "30px",
          pt: "20px",
        }}
      >
        <Box>
          <div className="section-head col-sm-12" id="packages">
            <Box sx={{ fontSize: { md: "30px", xs: "20px" } }}>
              <h4>
                <span>Find the Best </span> Luxury Packages*
              </h4>
            </Box>
            <p>
              
              Ultimately, the goal is to make the package options clear and easy
              to understand,
              <br /> while also conveying the value and benefits of each option
              to potential customers
            </p>
          </div>
        </Box>

        <Box
          sx={{
            // backgroundImage: "url(/Construction_background.webp)",
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: {
              lg: "24% 24% 24% 24%",
              md: "30% 30% 30%",
              sm: "40% 40%",
              xs: "90%",
            },

            gridGap: "10px",
          }}
        >
          <Box>
            <Package
              pack={`Platinum - ₹1,550/sq.ft*`}
              dd1="Basic Elevation"
              dd2="Structural Design"
              // dd3="Structural Design | 2D"
              ss4="Steel - Radha TMT, Shree TMT,Suguana TMT or equivalent"
              ss1="Aggregates - 20mm & 40mm"
              ss6="Blocks - Standard AAC blocks. 6 inch 4 inch"
              ss5="Cement - Bharati, priya,Birla, Zuari or equivalent"
              ss2="RCC Design Mix - As per the structural designer recommendation"
              ss3="Ceiling (Floor to Floor) Height  - 10 feet 6 inch (Finished Floor level to Finished to floor level) "
              kk1="Ceramic Wall Tiles (2 feet above kitchen slab) - Upto Rs.40 per Sqft "
              kk2="   Main Sink Faucet - Upto Rs.1300 "
              kk3="Any Other Faucet & Accessories - ISI Marked "
              kk4="Kitchen Sink - Stainless Steel Single Sink worth Rs.3000"
              bb1="Bathroom Ceramic Wall Tiles with 7 feet height - Upto Rs.35 per Sqft "
              bb2="  Sanitary ware & CP Fittings - Upto Rs.15,000/- per washroom"
              bb3="  CPVC Pipe - Astral or equivalent "
              bb4=" Bathroom doors - Waterproof flush doors"
              ddo1="Main Door - Flush Door With Veneer. Sal wood frame of 5 inch by 3 inch, worth Rs.13000 including fixtures 

        
        
        "
              ddo2="Windows - UPVC Windows with glass shutters and mesh shutters(2.5 track with 1 mesh) 

               "
              ddo3="
              Internal Doors - Membrane doors / Flush Door with Laminates upto Rs.10,000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch

        "
              ddo4=""
              pp1="Interior Painting - JK Putty + Tractor Emulsion or equivalent 
         "
              pp2="
         Exterior Painting - Asian Primer + Ace Exterior Emulsion Paint or equivalent
          "
              ff1=" Living and Dining Flooring - Tiles of value upto Rs.50 per sqft"
              ff2="Rooms and Kitchen Flooring - Tiles upto Rs.50 per sqft"
              ff3="Balcony and Open Areas Flooring - Anti-skid tiles of value upto Rs.40 per sqft"
              ff4="Parking Tiles - Anti-skid tiles of value upto Rs 40 per sqft"
              ff5="Staircase Flooring -  Granite of value upto ₹ 70 per sqft"
              ee1="    Wires - FRLS wires- Phinolex, GM "
              ee2="Switches & Sockets - Anchor Roma"
              mm1="Overhead Tank - Sintex Double Layered 1000 ltrs"
              mm2="Underground Sump - 4000 litres"
              mm3=" Staircase Railing - MS Railing"
            />
          </Box>
          <Box>
            <Package
              pack="  Pelladium - ₹1,650/sq.ft* "
              dd1="Structural Design"
              dd2="3D Elevation"
              ss4="Steel - Radha TMT, Shree TMT, JaiRaj TMT, Kamdhenu TMT or equivalent"
              ss1="Aggregates - 20mm & 40mm"
              ss6="Blocks - Standard AAC blocks. 8 inch 4 inch"
              ss5="Cement - Bharati, Coromandal, Zuari or equivalent"
              ss2="RCC Design Mix - As per the structural designer recommendation"
              ss3="Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)"
              kk1="Ceramic Wall Tiles (2 feet above kitchen slab) - Upto Rs.50 per Sqft"
              kk2="Main Sink Faucet - Upto Rs.1500"
              kk3="Any Other Faucet & Accessories - ISI Marked"
              kk4="Kitchen Sink - Stainless Steel Single Sink worth Rs.5000"
              bb1="Bathroom Ceramic Wall Tiles with 7 feet height - Upto Rs.45 per Sqft"
              bb2="Sanitary ware & CP Fittings - Upto Rs.20,000/- per washroom"
              bb3="CPVC Pipe - Astral or equivalent"
              bb4="Bathroom doors - Waterproof flush doors"
              ddo1="Main Door - Teak door with teak frame of 5 inch by 3 inch, worth Rs.20000 including fixtures"
              ddo2="Windows – UPVC Windows with glass shutters and mesh shutters(2.5 track with 1 mesh)

              "
              ddo3="
              Internal Doors - Membrane doors / Flush Door with Laminates upto Rs.10,000/- including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch
              "
              pp1="Interior Painting - JK Putty + Tractor Shyne Emulsion or equivalent"
              pp2="Exterior Painting - Asian Primer + Ace Exterior Emulsion Paint or equivalent"
              ff1="Living and Dining Flooring - Tiles of value upto Rs.55 per sqft

              
              
              
              
              
              
             
              "
              ff2="Rooms and Kitchen Flooring - Tiles upto Rs.55 per sqft"
              ff3="Balcony and Open Areas Flooring - Anti-skid tiles of value upto Rs.50 per sqft"
              ff4="Parking Tiles - Anti-skid tiles of value upto Rs 45 per sqft"
              ff5=" Staircase Flooring -Granite of value upto ₹ 70 per sqft"
              ee1="Wires - Fireproof wires by Finolex"
              ee2="Switches & Sockets - Anchor Roma"
              mm1="Overhead Tank - Sintex Double Layered 1500 ltrs"
              mm2="
              Underground Sump - 6000 litres"
              mm3="Staircase Railing - MS Railing

              
              "
              mm4="Window Grills - Basic MS Grills with Enamel Paint at Rs.105 per sqft"
            />
          </Box>
          <Box>
            <Package
              pack=" Iridium - ₹1,750/sq.ft*"
              dd2="Structural Design"
              dd1="3D Elevation"
              ss4="Steel - Vizag TMT, JSW TMT"
              ss1="Aggregates - 20mm & 40mm"
              ss6="Blocks - Standard Solid Concrete blocks. 6 inch 4 inch"
              ss5="Cement - UltraTech, ACC"
              ss2="RCC Design Mix - As per the structural designer recommendation"
              ss3="Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)"
              kk1="Ceramic Wall Tiles (2 feet above kitchen slab) - Upto Rs.60 per Sqft"
              kk2="Main Sink Faucet - Upto Rs.2000"
              kk3="Any Other Faucet & Accessories - ISI Marked"
              kk4="
              Kitchen Sink - Stainless Steel Single Sink worth Rs.6000"
              bb1="Bathroom Ceramic Wall Tiles with 7 feet height - Upto Rs.60 per Sqft"
              bb2="
              Sanitary ware & CP Fittings - Upto Rs.50000 per 1000 sqft of construction"
              bb3="CPVC Pipe - Ashirwad/Supreme or equivalen"
              bb4="Bathroom doors - Waterproof flush doors"
              ddo1="
              Main Door - Teak Door with teak frame of 5 inch by 3 inch, worth Rs.30000 including fixtures"
              ddo2="
              Windows - UPVC Windows with glass and mesh shutters (3 track with 1 mesh)"
              ddo3="Internal Doors - Membrane doors / Flush Door with Laminates upto Rs.8000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch
              "
              ddo4=""
              pp1="Interior Painting - JK Putty + Tractor Shyne Emulsion or equivalent
              "
              pp2="Exterior Painting - Asian Primer + Apex Exterior Emulsion Paint or equivalent
              "
              ff1="Living and Dining Flooring - Tiles or Granite of value upto Rs.100 per sqft
              "
              ff2="Rooms and Kitchen Flooring - Tiles upto Rs.80 per sqft"
              ff3="Balcony and Open Areas Flooring - Anti-skid tiles of value upto Rs.60 per sqft"
              ff4="Parking Tiles - Anti-skid tiles of value upto Rs 50 per sqft"
              ff5="Staircase Flooring - Sadarahalli Granite of value upto ₹ 80 per sqft"
              ee1="          Wires - Fireproof wires by Finolex"
              ee2="Switches Sockets - Anchor Roma"
              mm1="Overhead Tank - Sintex Double Layered 1500 ltrs"
              mm2="
              Underground Sump - 6000 litres"
              mm3="Staircase Railing - MS Railing

              
              "
              mm4="Window Grills - Basic MS Grills with Enamel Paint at Rs.110 per sqft"
            />
          </Box>
          <Box>
            <Package
              pack={`Thorium - ₹2,250/sq.ft* `}
              dd1="3D Elevation"
              dd2="Structural Design"
              // dd3="Structural Design | 2D"
              ss4="Steel - Vizag TMT, JSW TMT"
              ss1="Aggregates - 20mm & 40mm"
              ss6="Blocks - Standard Solid Concrete blocks. 8 inch 4 inch"
              ss5="Cement - UltraTech, ACC"
              ss2="RCC Design Mix - As per the structural designer recommendation"
              ss3="Ceiling Height – 10’ 6” feet (Finished Floor level to Finished Floor level) "
              kk1="Ceramic Wall Tiles (2 feet above kitchen slab) - Upto Rs.60 per Sqft "
              kk2="   Main Sink Faucet - Upto Rs.2000 "
              kk3="Any Other Faucet & Accessories - ISI Marked "
              kk4="Kitchen Sink - Stainless Steel Single Sink worth Rs.6000"
              bb1="Bathroom Ceramic Wall Tiles with 7 feet height - Upto Rs.60 per Sqft "
              bb2="  Sanitary ware & CP Fittings - Upto Rs.50000 per 1000 sqft of construction"
              bb3="  CPVC Pipe - Ashirwad/Sudhakar or  "
              bb4=" Bathroom doors – WPC doors"
              ddo1="Main Door - Teak Door with teak frame of 5 inch by 3 inch, worth Rs.35000 including fixtures 

        
        
        "
              ddo2="Windows - UPVC Windows with glass and mesh shutters (3 track with 1 mesh)

               "
              ddo3="
              Internal Doors - Membrane doors / Flush Door with Laminates upto Rs.12000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch
        "
              ddo4=""
              pp1="Interior Painting – Birla Putty  + Premium Emulsion or equivalent
         "
              pp2="
              Exterior Painting - Birla Putty  + Asian Primer + Apex Exterior Emulsion Paint or equivalent
          "
              ff1=" Living and Dining Flooring - Tiles or Granite of value upto Rs.120 per sqft"
              ff2="Rooms and Kitchen Flooring - Tiles upto Rs.90 per sqft"
              ff3="Balcony and Open Areas Flooring - Anti-skid tiles of value upto Rs.70 per sqft"
              ff4="Parking Tiles - Anti-skid tiles of value upto Rs 50 per sqft"
              ff5="Staircase Flooring -  Granite of value upto ₹ 120 per sqft"
              ee1="    Wires - Fireproof wires by Finolex/ Poly cab/ V guard or equivalent "
              ee2="Switches Sockets - Anchor Roma/ Havells/ or equivalent"
              mm1="Overhead Tank - Sintex Double Layered 2000 ltrs"
              mm2="Underground Sump - 9000 litres"
              mm3=" Staircase Railing -SS Railing"
              mm4="Window Grills - Basic MS Grills with Enamel Paint at Rs.130 per sqft"
            />
          </Box>
        </Box>
        <Box sx={{ mt: "30px" }}>
          <Link href="/contact">
            <Button
              style={{
                background: "rgb(216, 159, 13)",
                border: "none",
                color: "white",
                pl:"8px",
                pr:'8px',
                textTransform: "capitalize",
                cursor: "pointer",
              }}
            >
              Let's Build
            </Button>
          </Link>
        </Box>
      </Box>
      <Testimonial />
    </Box>
  );
}

export default HomeComp;
{
  /* <Box 
sx={{
  // backgroundImage: "url(./images/veneerpage2.jpg)",
  width: "100%",
  height: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  overflow: "hidden",
}}
>
<img
  src="/Construction_background.webp"
  alt="veneer"
  style={{
    width: "100vw",

    height: "60vh",
    transition: "transform 1.5s ease-in-out",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
/>
{/* <h1 style={{ fontSize: "5vw", color: "white",position:'absolute' }}>PLYWOOD</h1> */
}
// </Box> */}
