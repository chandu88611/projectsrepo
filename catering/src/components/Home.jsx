import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {SiZomato,SiSwiggy} from "react-icons/si";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiMountaintop } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";


import "./Home.css";
import "swiper/css";
import { Box } from "@mui/system";

function Home() {
  SwiperCore.use([Autoplay]);
  const location = useLocation();
  useEffect(() => {
    document.title = ` saikailashdhaba ${location.pathname}`;
  }, [location]);

  return (
    <div>
      <Box sx={{ display: "flex",zIndex:1 }}>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}

          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          autoplay={{ delay: 2000 }}
          autoplayDisableOnInteraction={false}
          // id='top'
        >
          {/* <SwiperSlide>{name()}</SwiperSlide> */}

          <SwiperSlide> {name1()}</SwiperSlide>
          <SwiperSlide> {name2()}</SwiperSlide>
        </Swiper>
      </Box>

      
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "3vw",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <GiMountaintop />{" "}
          <h2 style={{ color: " rgb(56, 63, 185)" }}>We Serve</h2>
          <GiMountaintop />{" "}
        </Box>
        <h2 style={{ textAlign: "center" }}>
          We Serve all these Items in all Functions{" "}
        </h2>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "75%",
              sm: "30vw 30vw 30vw ",
              lg: "20vw 20vw 20vw 20vw",
              md: "20vw 20vw 20vw 20vw",
            },
            gridGap: "3vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box className="box">
            <img
              src="./images/breakfast.png"
              alt="s"
              className="servicesImage"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                mt: "-4px",
                flexDirection: "column",
              }}
            >
              {" "}
              <h2>Beak Fast </h2>
              <p style={{ textAlign: "center" }}>
                We love breakfast catering. Check out our menu and let us make
                your next event amazing
              </p>
            </Box>
          </Box>
          <Box className="box">
            <img src="./images/lunch.png" alt="s" className="servicesImage" />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                mt: "-5px",
                flexDirection: "column",
              }}
            >
              {" "}
              <h2>Lunch</h2>
              <p style={{ textAlign: "center" }}>
                lunch catering service is the perfect way to get great food in
                your hands, fast. 🥘
              </p>
            </Box>
          </Box>
          <Box className="box">
            <img src="./images/dinner.png" alt="s" className="servicesImage" />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                mt: "-5px",
                flexDirection: "column",
              }}
            >
              {" "}
              <h2>Dinner</h2>
              <p style={{ textAlign: "center" }}>
                lunch catering service is the perfect way to get great food in
                your hands, fast. 🥘
              </p>
            </Box>
          </Box>
          <Box className="box">
            <img src="./images/custom.png" alt="s" className="servicesImage" />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                mt: "-5px",
                flexDirection: "column",
              }}
            >
              {" "}
              <h2>Custom</h2>
              <p style={{ textAlign: "center" }}>
                We are not just a caterer we are your friends and family and
                foodies too
              </p>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        id="Events"
        sx={{
          background: "grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
          padding: "3vw",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <GiMountaintop color="white" /> <h2> Our Services</h2>
          <GiMountaintop color="white" />{" "}
        </Box>
        <h2> We Provide All These Services</h2>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "75%",
              lg: "26vw 26vw 26vw",
              sm: "30vw 30vw 30vw ",
              md: "26vw 26vw 26vw",
            },
            gridGap: "3vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ boxShadow: "-2px -2px 1px white" }}>
            <img src="./images/wedding.jpg" alt="s" className="servicesImage" />
            <Box
              sx={{
                background: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                mt: "-4px",
              }}
            >
              {" "}
              <h2>Weddings </h2>
            </Box>
          </Box>
          <Box sx={{ boxShadow: "-2px -2px 1px white" }}>
            <img
              src="./images/corporate.jpg"
              alt="s"
              className="servicesImage"
            />
            <Box
              sx={{
                background: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                mt: "-5px",
              }}
            >
              {" "}
              <h2>Corporate Gatherings</h2>
            </Box>
          </Box>
          <Box sx={{ boxShadow: "-2px -2px 1px white" }}>
            <img
              src="./images/meetings.jpg"
              alt="s"
              className="servicesImage"
            />
            <Box
              sx={{
                background: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                mt: "-5px",
              }}
            >
              {" "}
              <h2>meetings</h2>
            </Box>
          </Box>
          <Box sx={{ boxShadow: "-2px -2px 1px white" }}>
            <img src="./images/baby.jpg" alt="baby" className="servicesImage" />
            <Box
              sx={{
                background: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                mt: "-5px",
              }}
            >
              {" "}
              <h2>Baby Showers</h2>
            </Box>
          </Box>
          <Box sx={{ boxShadow: "-2px -2px 1px white" }}>
            <img src="./images/house.jpg" alt="house" className="servicesImage" />
            <Box
              sx={{
                background: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                mt: "-5px",
              }}
            >
              {" "}
              <h2>House Warming</h2>
            </Box>
          </Box>
          <Box sx={{ boxShadow: "-2px -2px 1px white" }}>
            <img
              src="./images/bachelors.jpg"
              alt="bachelors"
              className="servicesImage"
            />
            <Box
              sx={{
                background: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                mt: "-5px",
              }}
            >
              {" "}
              <h2>Bachelorette</h2>
            </Box>
          </Box>
          <Box sx={{ boxShadow: "-2px -2px 1px white" }}>
            <img
              src="./images/birthday.jpg"
              alt="birthday"
              className="servicesImage"
            />
            <Box
              sx={{
                background: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                mt: "-5px",
              }}
            >
              {" "}
              <h2>Birthday Partys</h2>
            </Box>
          </Box>
          <Box sx={{ boxShadow: "-2px -2px 1px white" }}>
            <img src="./images/slider6.jpg" alt="thalies" className="servicesImage" />
            <Box
              sx={{
                background: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                mt: "-5px",
              }}
            >
              {" "}
              <h2>Special Corporate Thalies </h2>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ boxShadow: "0px -3px 5px ", padding: "3vh" }}>
        <h2 style={{ textAlign: "center" }}>
          Hygiene and Safety in our Catering Services
        </h2>
        <p style={{ textAlign: "center" }}>
          Safe Hygiene practices are part of our daily activities. We improved
          our safety and hygiene standards to new levels and adhering to them.
          Regular monitoring of quality and hygiene with advanced equipment. We
          always believe - Hygiene is TWO THIRD of Heath
        </p>
      </Box>

      <Box sx={{ background:'green',padding:'10px',color:'white'}}>
      <h2>Testimonials</h2>
      {/* <div className="swiper-button-prev"><AiFillCaretLeft/></div>
      <div className="swiper-button-next"><AiFillCaretRight/></div> */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          autoplay={{ delay: 2000 }}
        
          autoplayDisableOnInteraction={false}
          // id='top'
        >
          {/* <SwiperSlide>{name()}</SwiperSlide> */}

          <SwiperSlide> {name()}</SwiperSlide>
          <SwiperSlide> {nameT()}</SwiperSlide>
          <SwiperSlide> {nameT2()}</SwiperSlide>
          <SwiperSlide> {nameT3()}</SwiperSlide>
          <SwiperSlide> {nameT4()}</SwiperSlide>
        </Swiper>
      </Box>
<h2>We are also Available Here</h2>
<Box sx={{display:"grid",padding:'5px',gridTemplateColumns:{md:'30% 30% 30%',sm:'90%'},justifyContent:'center',alignItems:'center'}}>
<Box sx={{display:'flex',flexDirection:'column',alignItems:'center',height:'30vh'}} >
<a href="https://www.zomato.com/hyderabad/sai-kailash-dhaba-attapur" target="_blank" rel="noreferrer"> <div className="icon311" style={{background:'red'}}>
<SiZomato color='white' size='60px' />
    </div></a> 
    <Box sx={{display:'flex',gap:'5px',alignItems:'left',m:'5px',flexDirection:'column'}}>
<Box sx={{display:'flex',gap:'5px',alignItems:'center',m:'5px'}}>

    <Box sx={{width:'60px',background:'green',color:'white',borderRadius:'3px',height:'30px',display:'flex',gap:'5px',alignItems:'center',justifyContent:'center'}}>
    <h3>3.9 <RiStarSFill color="orange" /></h3>
   </Box>
    184
    Dining Reviews
    </Box>
    <Box sx={{display:'flex',gap:'5px',alignItems:'center'}}>

    <Box sx={{width:'60px',background:'green',color:'white',borderRadius:'3px',height:'30px',display:'flex',gap:'5px',alignItems:'center',justifyContent:'center'}}>
    <h3>4 <RiStarSFill color="orange" /></h3>
   </Box>
   8,688
Delivery Reviews
    </Box>
    </Box>
</Box>
<Box sx={{display:'flex',flexDirection:'column',alignItems:'center',height:'30vh'}}>
<a href="https://www.swiggy.com/restaurants/sai-kailash-dhaba-attapur-ambience-fort-hyderabad-9273" target="_blank" rel="noreferrer"> <div className="icon311" style={{background:'orange'}}>
<SiSwiggy color='white' size='60px'  />
    </div></a> 
    <Box sx={{display:'flex',gap:'5px',alignItems:'center',m:'5px'}}>

    <Box sx={{width:'60px',background:'green',color:'white',borderRadius:'3px',height:'30px',display:'flex',gap:'5px',alignItems:'center',justifyContent:'center'}}>
    <h3>4 <RiStarSFill color="orange" /></h3>
   </Box>
   500+
Ratings
    </Box>
</Box>
<Box sx={{display:'flex',flexDirection:'column',alignItems:'center',height:'30vh'}}>
<a href="https://www.dineout.co.in/hyderabad/sai-kailash-dhaba-attapur-south-hyderabad-56504/menu" style={{textDecoration:'none'}} target="_blank" rel="noreferrer"> <div className="icon311" style={{background:'rgb(226, 48, 12)'}}>
  <h3 style={{color:'white'}}>DineOut</h3> 
    </div></a> 
    <Box sx={{display:'flex',gap:'5px',alignItems:'center',m:'5px'}}>
    <Box sx={{width:'60px',background:'green',color:'white',borderRadius:'3px',height:'30px',display:'flex',gap:'5px',alignItems:'center',justifyContent:'center',m:'5px'}}>
    <h3>4.4 <RiStarSFill color="orange" /></h3>
   </Box>
   Ratings
   </Box>
</Box>


</Box>


      <Box>
        <Box sx={{ background: "grey", padding: "4vh" }}>
          <h2 style={{ color: "white"}}>BOOK AN EVENT</h2>
          <Box
            sx={{
              display: { lg: "grid" },
              gridTemplateColumns: {
                lg: "35vw 15vw 40vw",
                sm: "60vw",
                md: "35vw 15vw 40vw",
              },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                boxShadow: "-1px 1px 5px  ",
                background: "white",
                height: "10vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { sm: "60%" },
                ml: { sm: "20%" },
                borderRadius: "1vw",
              }}
            >
             <Box
                sx={{
                  background: "white",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid orange",
                }}
              >
                <BsTelephone size="30px" color="black" />
              </Box>  <h2> +91 9246565646</h2>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <Box
                sx={{
                  background: "white",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid orange",
                }}
              >
                contact
              </Box>
            </Box>
            <Box
              sx={{
                boxShadow: "-1px 1px 5px  ",
                background: "white",
                height: "10vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { sm: "60%" },
                ml: { sm: "20%" },
                borderRadius: "1vw",
              }}
            >
              <Box
                sx={{
                  background: "white",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid orange",
                }}
              >
                <AiOutlineMail  size="30px" color="black" />
              </Box> <h2>aniltayal@gmail.com</h2>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
function name() {
  return (
    <Box
      sx={{
        // height: "60vh",
        paddingLeft: { md: "200px", sm: "30px" },
        paddingRight: { md: "200px", sm: "30px" },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src="images/jyoti_ankola.png" alt="" />
      <h3>Jyoti Ankola</h3>
      <span>
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"}/>
        </span>
      <p style={{ textAlign: "center" }}>
        Nice and amazing food. Lots of variety in curries. . It start is very
        much unique tast. Good staff. Owner is there to attain and for
        feedback.they also have Jain food. Parking is there.
      </p>
    </Box>
  );
}
function nameT() {
  return (
    <Box
      sx={{
        // height: "60vh",
        paddingLeft: { md: "200px", sm: "30px" },
        paddingRight: { md: "200px", sm: "30px" },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src="images/harikrishna.png" alt="" />
      <h3>Hari Krishna</h3>
      <span>
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill  size={"30px"}/>
        </span>
      <p style={{ textAlign: "center" }}>
        Overall we had a good experience. Taste, quantities and service were
        good and nothing was too spicy. We had Arabian Crunchy Paneer and
        Mushroom Manchuria, Paneer Butter Masala and Paneer Biryani (yes, a
        whole lot of Paneer) and we enjoyed all. Tandoori Roti was white, so I
        wondered if it was made of Maida, but the waiter confirmed that it is
        made of Atta. We only finished half of the food and then learned that
        there is an option of ordering half bowl quantity as well. The A/C
        section was OK, but the outside section looked a bit off-putting.
      </p>
    </Box>
  );
}
function nameT2() {
  return (
    <Box
      sx={{
        // height: "60vh",
        paddingLeft: { md: "200px", sm: "30px" },
        paddingRight: { md: "200px", sm: "30px" },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src="images/Esthesham_Atif.png" alt="" />
      <h3>Esthesham Atif</h3>
      <span>
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill  size={"30px"}/>
        </span>
      <p style={{ textAlign: "center" }}>
        Save on time & your food bill! Book at the best restaurants under 18
        seconds flat. Get amazing offers on food & beverages at your favorite
        restaurants. Book your table Now! Timings, Address And More. No Meal
        Without Deal. Free Online Table Booking. Best Food Deals In Town.
      </p>
    </Box>
  );
}
function nameT3() {
  return (
    <Box
      sx={{
        // height: "60vh",
        paddingLeft: { md: "200px", sm: "30px" },
        paddingRight: { md: "200px", sm: "30px" },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src="images/Meenakshijain.png" alt="" />
      <h3>Meenakshi Jain</h3>
      <span>
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"}/>
        </span>
      <p style={{ textAlign: "center" }}>
        All items are good but personally I love that dragon paneer
      </p>
    </Box>
  );
}
function nameT4() {
  return (
    <Box
      sx={{
        // height: "60vh",
        paddingLeft: { md: "200px", sm: "30px" },
        paddingRight: { md: "200px", sm: "30px" },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src="images/Ruchi_Nagala.png" alt="" />
      <div>
        <h3>Ruchi_Nagala</h3>
        <span>
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"} />
          <RiStarSFill color="orange" size={"30px"}/>
        </span>
      </div>

      <p style={{ textAlign: "center" }}>
        A good fabulous good place for reasonable vegetarian food ! North Indian
        food is delicious! 😍
      </p>
    </Box>
  );
}
function name1() {
  return (
    <Box
      sx={{
        backgroundImage: "url(./images/Food2.jpg)",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        objectFit: "cover",
      }}
    >
      <h1 style={{ color: "white" }} className="text">
        Welcome To Our Dhaba
      </h1>
    </Box>
  );
}
function name2() {
  return (
    <Box
      sx={{
        backgroundImage: "url(./images/slider4.jpg)",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        objectFit: "cover",
      }}
    >
      <h1 style={{ color: "white" }} className="text">
        {" "}
        Enjoy Taste of our food
      </h1>
    </Box>
  );
}

export default Home;
