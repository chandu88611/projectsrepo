import React, { useState } from "react";
import { Helmet } from "react-helmet";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import Scroll from "./Scroll";
import "./Home.css";
import Testimonial from "./Testimonial";
import "swiper/css";
import ProductLisst from "./ProductLisst";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

function Home() {
  const [title, setTitle] = useState("PLYWOOD");
  const [info, setInfo] = useState(
    "Products are available in a variety of thicknesses and grades, ranging from utility-grade to top-of-the-line hardwood plywood. We carry a range of wood species, including birch, oak, maple, cherry, and mahogany, among others."
  );
  const laminate = [
    { name: "Embossed Teak", img: "./images/embossed-teak.jpg" },
    { name: "Starry Dark", img: "./images/Starry-dark.jpg" },
    { name: "Rugged Rose Mocha", img: "./images/rugged-rose-mocha.jpg" },
    { name: "Venetino Moon", img: "./images/venetino-moon.jpg" },
    { name: "Ancient Carrara", img: "./images/Ancient-Carrara.jpg" },
    { name: "Aqua Venetinno", img: "./images/Aqua-venetino.jpg" },
  ];
  const hardware = [
    { name: "Mattblackwhite ", img: "./images/Mattblackwhite-hardware.jpg" },
    { name: "Matt ", img: "./images/Matt-hardware.jpg" },
    { name: "Rosegold ", img: "./images/rosegold-hardware.jpg" },
    { name: "CP white.jpg", img: "./images/CPwhite-hardware.jpg" },
    { name: "Cp wood", img: "./images/Cpwood-hardware.jpg" },
    { name: "Black white", img: "./images/blackwhite-hardware.jpg" },
  ];

  const veneer = [
    { name: "Rust Calabria Stone", img: "./images/Rust-calabria-stone.jpg" },
    { name: "Sorbet", img: "./images/sorbet.jpg" },
    { name: "Bagheera Walnut", img: "./images/Bagheera-walnut.jpg" },
    { name: "Ancient Carrara", img: "./images/Ancient-Carrara.jpg" },
    { name: "Slit Oak", img: "./images/split-oak.jpg" },
  ];

  const plywood = [
    { name: " Chequered ply", img: "./images/Plywood1.jpg" },
    { name: " board Birch wood", img: "./images/plywood2.jpg" },
    { name: "High density fibre", img: "./images/plywood3.jpg" },
    { name: "Rub wood", img: "./images/plywood4.jpg" },
    { name: "Oriented Standboard", img: "./images/plywood5.jpg" },
    { name: "Shuttering ply", img: "./images/plywood6.jpg" },
    { name: "Multiwood", img: "./images/plywood7.jpg" },
  ];
  const decoratives = [
    { name: "5808 Silver", img: "./images/5808silver.jpg" },
    { name: "9004", img: "./images/9004.jpg" },
    { name: "T804", img: "./images/T804.jpg" },
    {
      name: "Fadwud Collection 4702",
      img: "./images/decora-fadwudcollection4702.jpg",
    },
    {
      name: "Parametricmdfpane l3501",
      img: "./images/decora-parametricmdfpanel3501.jpg",
    },
    { name: "7704", img: "./images/decorative-7704.jpg" },
  ];
  const [arr, setArr] = useState(plywood);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  SwiperCore.use([Autoplay]);

  const toggle = (cat) => {
    switch (cat) {
      case "LAMINATE":
        setArr(laminate);
        setTitle("LAMINATES");
        setInfo(
          "Our laminate products are made from high-quality materials that are designed to be durable, easy to clean, and resistant to wear and tear. We offer a variety of colors, patterns, and textures to choose from, making it easy to find the perfect match for your project."
        );
        break;
      case "VENEER":
        setArr(veneer);
        setTitle("VENEER");
        setInfo(
          "These products are made from natural wood, sliced thinly to create sheets that can be used for a variety of purposes, including furniture-making, cabinetry, and decorative accents. We offer veneers in a range of species, finishes, and grades to suit any project."
        );

        break;
      case "HARDWARE":
        setArr(hardware);
        setInfo("Choose the right hardware components, to ensure that your door handle is secure, functional, and aesthetically pleasing.        ");
        setTitle("HARDWARE");
        break;
      case "PLYWOOD":
        setArr(plywood);
        setTitle("PLYWOOD");
        setInfo(
          "Products are available in a variety of thicknesses and grades, ranging from utility-grade to top-of-the-line hardwood plywood. We carry a range of wood species, including birch, oak, maple, cherry, and mahogany, among others."
        );

        break;
      case "DECORATIVES":
        setArr(decoratives);
        setInfo(
          "Decorative products include everything from edge banding and molding to hardware and accessories, designed to add the perfect finishing touches to your woodworking projects. Whether you're looking for a classic, traditional look or a modern, contemporary vibe, we have everything you need to bring your vision to life."
        );
        setTitle("DECORATIVES");
        break;

      default:
        break;
    }
  };

  return (
    <Box>
      <head>
        <Helmet>
          <title>
            
            Subhash Plywood- Collections of Veneer, Laminates, Hardware &
            Decoratives
          </title>
          {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.jpg" /> */}
          <meta
            name="description"
            content="Subhash Plywood is a collection of veneer, laminates, hardware & decoratives. Visit our store to design your home interior with us."
          />
        </Helmet>
      </head>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // Navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
        // navigation
        spaceBetween={10}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 6000 }}
        autoplayDisableOnInteraction={false}
      >
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              backgroundImage: "url(./images/slider.webp)",
              height: { md: "80vh", sm: "50vh", xs: "35vh" },
              justifyContent: "center",
              backgroundPosition: "center",
              backgroundSize: "cover",
              alignItems: "center",
              color: "white",
              mb: "2px",
              pl: { md: "200px", sm: "4px", xs: "10px" },
              pr: { md: "200px", sm: "20px", xs: "10px" },
              pt: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
                color: "white",
                backgroundColor: "rgba(0, 0, 0,.4)",
                padding: { md: "20px", xs: "5px" },
                borderRadius: "10px",
                textAlign: "center",
                m: { md: "4px", xs: "20px" },
                fontSize: { md: "20px", xs: "10px" },
              }}
              className="flip"
            >
              <h2>Wide Range of Quality Plywood</h2>
              <p style={{ textAlign: "center" }}>
                At SubhashPlywood you'll have a wide range of products in terms
                of styles, designs, colors & patterns. You can explore our
                gallery or directly visit our store.
              </p>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              backgroundImage: "url(./images/slider-2.webp)",
              height: { md: "80vh", sm: "50vh", xs: "35vh" },
              justifyContent: "center",
              backgroundPosition: "center",
              backgroundSize: "cover",
              alignItems: "center",
              color: "white",
              mb: "2px",
              pl: { md: "200px", sm: "4px", xs: "10px" },
              pr: { md: "200px", sm: "20px", xs: "10px" },
              pt: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
                color: "white",
                backgroundColor: "rgba(0, 0, 0,.5)",
                padding: { md: "20px", xs: "5px" },
                borderRadius: "10px",
                textAlign: "center",
                m: { md: "4px", xs: "20px" },
                fontSize: { md: "20px", xs: "10px" },
              }}
              className="flip"
            >
              <h2>Customize Your Requirement</h2>
              <p style={{ textAlign: "center" }}>
                Each customer is different. Each person's taste is unique. So,
                we always give a chance to the customer to select & design the
                interior on their own.
                <br />
                <br />
              </p>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              backgroundImage: "url(./images/sliderlaminate.webp)",
              height: { md: "80vh", sm: "50vh", xs: "35vh" },
              justifyContent: "center",
              backgroundPosition: "center",
              backgroundSize: "cover",
              alignItems: "center",
              color: "white",
              mb: "2px",
              pl: { md: "200px", sm: "4px", xs: "10px" },
              pr: { md: "200px", sm: "20px", xs: "10px" },
              pt: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
                color: "white",
                backgroundColor: "rgba(0, 0, 0,.3)",
                padding: { md: "20px", xs: "5px" },
                borderRadius: "10px",
                textAlign: "center",
                m: { md: "4px", xs: "20px" },
                fontSize: { md: "20px", xs: "10px" },
              }}
              className="flip"
            >
              <h2>Expert Interior Design </h2>
              <p style={{ textAlign: "center" }}>
                Based on the client requirement we always suggest the best to
                the client and to move forward. Delivering the best is always
                our concern as it builds trust.
              </p>
            </Box>
          </Box>
        </SwiperSlide>
        
       

        <br />
        <br />
      </Swiper>

      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          background: "rgb(200,200,200,.2)",
          justifyContent: "space-between",
          p: "2vw",
          textAlign: "center",
          color: "rgb(133, 94, 66)",
        }}
      >
        <Box
          sx={{
            borderBottom: "1px solid white",
            fontSize: { md: "15px", xs: "10px" },
          }}
        >
          <h3>25+ YEAR OF INDUSTRY EXPERIENCE</h3>
        </Box>
        <Box
          sx={{
            borderBottom: "1px solid white",
            fontSize: { md: "15px", xs: "10px" },
          }}
        >
          <h3>RETAIL STORE SPREAD OVER 20000 SFT.</h3>
        </Box>
        <Box
          sx={{
            borderBottom: "1px solid white",
            fontSize: { md: "15px", xs: "10px" },
          }}
        >
          <h3>WIDE RANGE OF COLOR OPTIONS</h3>
        </Box>
      </Box>
      <Box
        sx={{
          pl: { md: "85px", sm: "50px", xs: "10px" },
          pr: { md: "85px", sm: "50px", xs: "10px" },
        }}
      >
        <h1 style={{ color: "rgb(133, 94, 66)", textAlign: "center" ,textTransform:'uppercase'}}>
          About Us
        </h1>
        <p style={{ textAlign: "center" }}>
          Welcome to our plywood store! We are a one-stop-shop for all your
          plywood interior needs
        </p>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "40vw 40vw", xs: "80vw" },
            alignItems: "center",
            justifyContent: "center",
            p: "20px",
            mt: "30px",
          }}
        >
          <Box sx={{ alignItems: "center",
            justifyContent: "center",display:'flex'}}>
            <img
              src="./images/subhash-homepage.webp"
              alt="veneer"
              loading="lazy"
              style={{
                width: "80%",

                transition: "transform 1.5s ease-in-out",
                height: "300px"
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { md: "30vw", sm: "60vw", xs: "80vw" },

              flexDirection: "column",
              gap: "10px",

              backgroundColor: "white ",

              margin: "auto",
              fontSize: { md: "15px", xs: "10px" },
            }}
          >
            <p style={{ textAlign: "center" }}>
              Subhash Plywood Industries was established in 1986 & founded by
              Subash Chandra Agarwal & Rajesh Agarwal; one of the trusted
              Plywood dealers in Shivarampally (near Attapur) Hyderabad known
              for the quality service & customer-satisfaction. We are
              specialized in providing high-quality plywood material for all
              your home interior needs. Our portfolio includes a large variety
              of designs and collections which vary in thicknesses and grades,
              from basic utility plywood to premium plywood.
            </p>
          </Box>
        </Box>
      

        <Box
          sx={{ background: "rgb(200, 200, 200,.2)", p: "10px", mb: "30px" }}
        >
            <h1
          style={{
            color: "rgb(133, 94, 66)",
            textAlign: "center",
            marginTop: "50px",textTransform:'uppercase'
          }}
        >
          EXPLORE OUR COLLECTIONS
        </h1>
        <p style={{ textAlign: "center" }}>
          Our plywood products are crafted with precision, available in a wide
          selection of wood species, finishes, and sizes to meet your specific
          needs and preferences, making them a popular choice for builders,
          architects, and designers alike.
        </p>
          <Box
            sx={{
              display: "flex",

              mt: "10px",
              mb: "30px",
              pt: { md: "5px", sm: "0" },
            }}
          >
            <Box
              sx={{
                textAlign: "center",

                mt: { md: "10px", sm: "20px", xs: "10px" },
              }}
            >
              <Box sx={{ p: "20px", fontSize: { md: "15px", xs: "14px" } }}>
                <p>
                  Introducing our versatile range of laminates, hardware,
                  plywood, and veneer products! We offer a wide selection of
                  high-quality materials to meet all your construction,
                  furniture-making, and home decor needs. Our products are made
                  with care and attention to detail, ensuring that they are both
                  beautiful and functional. Whether you're a contractor,
                  designer, or DIY enthusiast, you can count on us for
                  premium-quality materials and outstanding customer service.
                  Browse our selection today and discover the perfect solutions
                  for your next project!
                </p>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                lg: "20vw 20vw 20vw 20vw",
                md: "25vw 25vw 25vw",
                sm: "40vw 40vw",
                xs: "90vw",
              },
              gridGap: "10px",
              justifyContent: "center",
              p: { md: "30px", sm: "20px", xs: "10px" },
            }}
          >
             <ProductLisst
              qu="PLYWOOD"
              des="Experience the durability and versatility of our plywood products! Our plywood is engineered to withstand the test of time and is suitable for a wide range of applications,from construction to furniture-making."
              img="./images/plywood-website-square-plys.webp"
              ur='plywood'
            />
             <ProductLisst
              qu="LAMINATES"
              des="Choose from a variety of finishes and designs with our veneer laminate products. Our laminates are easy to clean and maintain,and will add a touch of charm to your space for years to come,etc..................."
              img="./images/laminatessss.webp"
              ur='laminates'
            />
            <ProductLisst
              qu="VENEER"
              des="Enhance your interiors with our premium veneer laminate products! Our laminates are made of high-quality wood veneer and are designed to add a touch of elegance and sophistication to any surface ,etc..........."
              img="./images/plywood-website-square-veneers.webp"
              ur='veneer'
            />
           
           
            <ProductLisst
              qu="HARDWARE"
              des="Upgrade your furniture and décor with our top-of-the-line hardware products! Our hardware options range from stylish and functional hinges,knobs,handles,and locks,to provide the perfect finishing.etc............"
              img="./images/plywood-website-square-handles.webp"
              ur='/hardware'
            />
          </Box>
        </Box>

        <h1
          style={{
            textAlign: "center",
            marginTop: "70px",
            color: "rgb(133, 94, 66)",
          }}
        >
          GET IN TOUCH
        </h1>
        <p style={{ textAlign: "center" }}>
          
          We’re happy to assist you anytime. Visit our store to know more about
          the designs.
        </p>

        <Box  
          sx={{
            display: "grid",

            padding: "10px",
            justifyContent: "center",
            // backgroundColor: "rgb(205, 133, 63,.3)",
            gridGap: "50px",
     
            pb: "40px",
        
          }}
        >
          <Box
            sx={{
              borderRadius: "10px",
              textAlign: "center",
              pl: { md: "50px", xs: "0" },

              fontSize: { md: "15px", xs: "10px" },
            }}
         
          >
            <p>
              We are always available to assist you with any inquiries you may
              have about our products and services. Contact us today via phone,
              email or visit our store and our friendly and knowledgeable team
              will be more than happy to help you find the perfect plywood
              solutions for your project.
            </p>
            <Box
              sx={{
                pr: { md: "30px", sm: "10px", xs: "0px" },
                pl: { md: "30px", sm: "10px", xs: "0px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: { md: "row", xs: "column" },
                gap: "20px",
              }}
            >
              {/* <ContacForm /> */}
              <Box sx={{ mt: "10px" }}>
                <a
                  href="https://wa.me/9182709981"
                  target="_blank"
                  rel="noreferer"
                  style={{ textDecoration: "none", color: "rgb(133, 94, 66)" }}
                >
                  <Button
                   variant="outlined"
                    style={{
                      width: "130px",
                      height: "45px",
                      border: "1px solid rgb(133, 94, 66)",
                      display: "felx",
                      alignItems: "center",
                      justifyContent: "center",

                      color: "rgb(133, 94, 66)",
                      '&:hover':{background:'rgb(216, 159, 13)',color:'white'}
                    }}
                  >
                    whats app
                  </Button>
                </a>
              </Box>
              <Box sx={{ mt: "10px" }}>
                <a
                  href="tel:9182709981"
                  target="_blank"
                  rel="noreferer"
                  style={{ textDecoration: "none", color: "rgb(133, 94, 66)" }}
                >
                  <Button
                   variant="outlined"
                   style={{
                     
                   
                     width: "130px",
                     height: "45px",
                     border: "1px solid rgb(133, 94, 66)",
                     display: "felx",
                     alignItems: "center",
                     justifyContent: "center",
                     color: "rgb(133, 94, 66)",
                     '&:hover':{background:'rgb(216, 159, 13)',color:"white"}
                   }}
                  >
          
                    Call
                  </Button>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{background: "rgb(200, 200, 200,.2)",pt:"30px",overflow:'hidden'}}>
        <h1
          style={{
            textAlign: "center",
            marginTop: "70px",
            color: "rgb(133, 94, 66)",textTransform:'uppercase'
          }}
        >
          Explore the Designs to Meet Your Expectations
        </h1>
        <p
          style={{
            textAlign: "center",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
          
          We pride ourselves on offering a comprehensive range of top-quality
          products to meet all your woodworking needs.
        </p>

        <Box sx={{ textAlign: "center", mt: "60px" }}>
          
          <h2 style={{ color: "rgb(133, 94, 66)" }}>{title}</h2>
          <p
            style={{
              textAlign: "center",
              paddingLeft: "60px",
              paddingRight: "60px",
            }}
          >
            {info}
          </p>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "20vw 70vw", xs: "80vw" },
            pl: "20px",
            pr: "20px",
            alignItems: "center",
            mb: "50px",
          }}
        >
          <Box>
            <Box
              sx={{
                display: {md:"flex",xs:'none'},
                justifyContent: "center",
                p: "10px",
              }}
            >
              <img
                src="./images/logo.png"
                className="image3"
                alt="subashplywoodlogo"
                loading="lazy"
              />
            </Box>
            <Box
              sx={{
                display: { md: "flex", xs: "grid" },
                flexDirection: { md: "column", sm: "column" },
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
                p: "10px",
                gridTemplateColumns: "30% 30% 30%",overflow:'hidden'
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  left: 40,
                  width: "70%",
                  top: 240,
                  borderRadius: "30px",
                  p: "8px",
                  cursor: "pointer",
                  fontSize: { md: "17px", sm: "15px", xs: "12px" },
                }}
                onClick={() => toggle("PLYWOOD")}
              >
                <span
                  style={{ color: title == "PLYWOOD" ? "orange" : "black" }}
                >
                  PLYWOOD
                </span>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  left: 40,
                  width: "70%",
                  top: 240,
                  borderRadius: "30px",
                  p: "8px",
                  cursor: "pointer",
                  fontSize: { md: "17px", sm: "15px", xs: "12px" },
                }}
                onClick={() => toggle("LAMINATE")}
              >
                <span
                  style={{ color:title == "LAMINATES" ? "orange" : "black" }}
                >
                LAMINATES
                </span>
              </Box>

              <Box
                sx={{
                  textAlign: "center",
                  left: 40,
                  width: "70%",
                  top: 240,
                  borderRadius: "30px",
                  p: "8px",
                  cursor: "pointer",
                  fontSize: { md: "17px", sm: "15px", xs: "12px" },
                }}
                onClick={() => toggle("VENEER")}
              >
                <span style={{ color: title == "VENEER" ? "orange" : "black" }}>
                  VENEER
                </span>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  left: 40,
                  width: "70%",
                  top: 240,
                  borderRadius: "30px",
                  p: "8px",
                  cursor: "pointer",
                  fontSize: { md: "17px", sm: "15px", xs: "12px" },
                }}
                onClick={() => toggle("HARDWARE")}
              >
                <span
                  style={{ color: title == "HARDWARE" ? "orange" : "black" }}
                >
                  HARDWARE
                </span>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  left: 40,
                  width: "70%",
                  top: 240,
                  borderRadius: "30px",

                  p: "8px",
                  cursor: "pointer",
                  fontSize: { md: "17px", sm: "15px", xs: "12px" },
                }}
                onClick={() => toggle("DECORATIVES")}
              >
                <span
                  style={{ color: title == "DECORATIVES" ? "orange" : "black" }}
                >
                  DECORATIVES
                </span>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mt: "40px",
              mb: "40px",
              ml: { md: "60px", sm: "20px", xs: "10px" },
              mr: { md: "60px", sm: "20px", xs: "10px" },
            }}
          >
            <Scroll arr={arr} />
          </Box>
        </Box>

        </Box>
        <Box sx={{ mt: "30px", mb: "90px", overflow: "hidden" }}>
          <Testimonial />
        </Box>
      </Box>
      <Box sx={{background: "rgb(200, 200, 200,.2)",pb:"60px",pt:'20px'}}>
      <h1 style={{ textAlign: "center", color: "rgb(133, 94, 66)" }}>
        ASSOCIATED PARTNERS
      </h1>
      <p
        style={{
          textAlign: "center",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
      >
        
        We are proud to partner with some of the best companies in the industry
        to deliver high-quality solutions and exceptional service to our
        clients. Together, we are committed to making a positive impact in our
        respective fields and driving meaningful change
      </p>

<Box sx={{display:{md:"flex",xs:"none"}}}>
<Swiper
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          // // Navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
          // navigation={{ nextEl: '.my-next-button', prevEl: '.my-prev-button' }}
          centerSlides
          spaceBetween={10}
          slidesPerView={4}
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
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
            height: { lg: "100px", md: "100px", sm: "70px", xs: "50px" },ml:'20px'
          }}
        >
          <img
            src="./images/Hafele.png"
            alt="greenply"
            loading="lazy"
            style={{
              width: "250px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/century_ply.png"
            alt="kitply"
            loading="lazy"
            style={{
              width: "250px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/greenply.png"
            alt="austinplywood"
            loading="lazy"
            style={{
              width: "250px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/ebco_logo.webp"
            alt="zenlayercdn"
            loading="lazy"
            style={{
              width: "250px",
              height: "120px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/mystic-mann.png"
            alt="zenlayercdn"
            loading="lazy"
            style={{
              width: "250px",
              height: "85px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/docowud.png"
            alt="zenlayercdn"
            loading="lazy"
            style={{
              width: "250px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>

          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/hettich.png"
            alt="zenlayercdn"
            loading="lazy"
            style={{
              width: "250px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/blum.png"
            alt="zenlayercdn"
            loading="lazy"
            style={{
              width: "250px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>

          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/Godrej_Logo.png"
            alt="zenlayercdn"
            loading="lazy"
            style={{
              width: "250px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
         
        </Swiper>
</Box>

<Box sx={{display:{md:"none",xs:"flex"},pb:'40px'}}>
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
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
            height: { lg: "100px", md: "100px", sm: "70px", xs: "50px" },ml:'20px'
          }}
        >
          <img
            src="./images/Hafele.png"
            alt="greenply"
            loading="lazy"
            style={{
              width: "250px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/century_ply.png"
            alt="kitply"
            loading="lazy"
            style={{
              width: "250px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/greenply.png"
            alt="austinplywood"
            loading="lazy"
            style={{
              width: "250px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/ebco_logo.webp"
            alt="zenlayercdn"
            loading="lazy"
            style={{
              width: "250px",
              height: "60px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/mystic-mann.png"
            alt="zenlayercdn"
            loading="lazy"
            style={{
              width: "250px",
              height: "65px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/docowud.png"
            alt="zenlayercdn"
            loading="lazy"
            style={{
              width: "250px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>

          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/hettich.png"
            alt="zenlayercdn"
            loading="lazy"
            style={{
              width: "250px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/blum.png"
            alt="zenlayercdn"
            loading="lazy"
            style={{
              width: "200px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>

          <SwiperSlide>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
            borderRadius: "20px",
           
          }}
        >
          <img
            src="./images/Godrej_Logo.png"
            alt="zenlayercdn"
            loading="lazy"
            style={{
              width: "250px",
              height: "70px",
              ":hover": { filter: "none" },
              transition: "filter 0.5s ease",
            }}
          />
        </Box>
          </SwiperSlide>
         
        </Swiper>
</Box>
      </Box>
    </Box>
  );
}

export default Home;
