import { Box } from "@mui/system";
import React, { useState, useRef, useEffect } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
function Scroll() {
  const divRef = useRef(null);
  const [left, setLeft] = useState(true);
  const [right, setright] = useState(true);

  SwiperCore.use([Autoplay]);

  // const [categories,setCategories]=useState([])

  // // function handleLeftClick() {
  // //     const div = document.querySelector("#yourDivId");
  // //     div.scrollLeft -= 250;
  // //     div.behaviour= "smooth"

  // //   }

  // //   function handleRightClick() {
  // //     const div = document.querySelector("#yourDivId");
  // //     div.scrollLeft += 250;
  // //     div.behaviour= "smooth"
  // //   }
  // function handleScroll(event) {
  //     if (event.target.scrollLeft >= 250 * 4) {
  //       setLeft(true)
  //     }
  //     if (event.target.scrollRight >= 20 * 4) {
  //         setright(true)
  //       }
  //   }

  const handleLeftClick = () => {
    const isMobile = window.innerWidth <= 768;
    const scrollAmount = isMobile ? -200 : -400;

    divRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    const isMobile = window.innerWidth <= 768;
    const scrollAmount = isMobile ? 250 : 400;

    divRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{ position: "relative", p: { md: "30px", sm: "10px", xs: "5px" } }}
    >
      <Box
        sx={{ display: { md: "flex", sm: "none", xs: "none" }, p: "10px" }}
        ref={divRef}
      >
        <Swiper
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          // Navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
          // navigation
          centerSlides
          spaceBetween={30}
          slidesPerView={3}
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 2000 }}
          autoplayDisableOnInteraction={false}
        >
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                ml: "20px",
                height: "500px",
              }}
            >
              <Box>
                <img
                  src="/construction-permissions.jpg"
                  alt="construction-permissions"
                  loading="lazy"
                  className="imageScrol"
                />
              </Box>{" "}
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                  pb: "2px",
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  Construction Permissions <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>
                </p>
                <br />
                <Box
                  sx={{
                    fontSize: { md: "17px", xs: "14px" },
                    color: "grey",
                    height: "500px",
                  }}
                >
                  <p>
                    Legal approval granted by a government or regulatory
                    authority that allows an individual or organization to
                    proceed with building or altering a structure on a
                    particular piece of land.
                  </p>
                </Box>
                {/* <span>
            We perform soil investigation reports to know the load bearing capacity and to analyze other metrics.
            </span> */}
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                height: "500px",
              }}
            >
              <img
                src="/civil-construction.jpg"
                alt="civil-construction"
                loading="lazy"
                className="imageScrol"
              />
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  Civil Construction <br></br>
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>{" "}
                </p>
                <Box
                  sx={{
                    fontSize: { md: "17px", xs: "14px" },
                    color: "grey",
                    pt: "17px",
                  }}
                >
                  <p>
                    These projects are critical for economic development and
                    play a vital role in improving the quality of life of people
                    by providing essential infrastructure such as roads, water
                    supply, sanitation, and power supply.
                  </p>
                </Box>
                {/* <span style={{ fontSize: "17px" }}>
            Create essential blueprints that provide a detailed overview of a building's design and layout. 
            </span> */}
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                height: "500px",
              }}
            >
              <img
                src="/interior-works.jpg"
                alt="interior-works"
                loading="lazy"
                className="imageScrol"
              />
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  {" "}
                  Interior Works <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>
                </p>
                <br />
                <Box
                  sx={{ fontSize: { md: "17px", xs: "14px" }, color: "grey" }}
                >
                  <p>
                    {" "}
                    Improve the functionality and appearance of a space, making
                    it more comfortable and inviting, or simply updating it to
                    reflect current design trends.
                  </p>
                </Box>{" "}
                {/* <span style={{ fontSize: "17px" }}> 
            Ensure that buildings are safe and meet all necessary building codes and regulations.
            </span> */}
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                height: "500px",
              }}
            >
              <img
                src="/automation-works.jpg"
                alt="automation-works"
                loading="lazy"
                className="imageScrol"
              />
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  {" "}
                  Automation Works
                  <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>
                </p>
                <br />
                <Box
                  sx={{ fontSize: { md: "17px", xs: "14px" }, color: "grey" }}
                >
                  <p>
                    {" "}
                    By implementing automation works such as 3D printing,
                    robotics, building information modeling, house construction
                    companies can improve the speed, efficiency, and quality of
                    their construction processes, which can lead to increased
                    customer satisfaction and improved profitability.
                  </p>{" "}
                  {/* <span style={{ fontSize: "17px" }}>Crucial process in construction and manufacturing industries, as it helps to ensure that materials used in products and structures are of the required quality and strength.</span> */}
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                height: "500px",
              }}
            >
              <img
                src="/AMC_Artboard.jpg"
                alt="AMC"
                loading="lazy"
                className="imageScrol"
              />
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  {" "}
                  AMC
                  <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>
                </p>
                <br />
                <Box
                  sx={{ fontSize: { md: "17px", xs: "14px" }, color: "grey" }}
                >
                  <p>
                    {" "}
                    Beneficial service which provides a guarantee to the client
                    that any issues that may arise in the construction will be
                    addressed in a timely and efficient manner. Typically covers
                    regular maintenance and repair services for the building,
                    such as cleaning, painting, plumbing, electrical repairs,
                    and HVAC maintenance.
                  </p>{" "}
                  {/* <span style={{ fontSize: "17px" }}>Crucial process in construction and manufacturing industries, as it helps to ensure that materials used in products and structures are of the required quality and strength.</span> */}
                </Box>{" "}
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>

      <Box
        sx={{ display: { md: "none", sm: "flex", xs: "none" }, p: "10px" }}
        ref={divRef}
      >
        <Swiper
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          // Navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
          // navigation
          centerSlides
          spaceBetween={30}
          slidesPerView={2}
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 2000 }}
          autoplayDisableOnInteraction={false}
        >
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                ml: "20px",
                height: "500px",
              }}
            >
              <Box>
                <img
                  src="/construction-permissions.jpg"
                  alt="construction-permissions"
                  loading="lazy"
                  className="imageScrol"
                />
              </Box>{" "}
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                  pb: "2px",
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  Construction Permissions <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>
                </p>
                <br />
                <Box
                  sx={{
                    fontSize: { md: "17px", xs: "14px" },
                    color: "grey",
                    height: "500px",
                  }}
                >
                  <p>
                    Legal approval granted by a government or regulatory
                    authority that allows an individual or organization to
                    proceed with building or altering a structure on a
                    particular piece of land.
                  </p>
                </Box>
                {/* <span>
            We perform soil investigation reports to know the load bearing capacity and to analyze other metrics.
            </span> */}
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                height: "500px",
              }}
            >
              <img
                src="/civil-construction.jpg"
                alt="civil-construction"
                loading="lazy"
                className="imageScrol"
              />
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  Civil Construction <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>
                </p>
                <Box
                  sx={{ fontSize: { md: "17px", xs: "14px" }, color: "grey" }}
                >
                  <p>
                    These projects are critical for economic development and
                    play a vital role in improving the quality of life of people
                    by providing essential infrastructure such as roads, water
                    supply, sanitation, and power supply.
                  </p>
                </Box>
                {/* <span style={{ fontSize: "17px" }}>
            Create essential blueprints that provide a detailed overview of a building's design and layout. 
            </span> */}
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                height: "500px",
              }}
            >
              <img
                src="/interior-works.jpg"
                alt="interior-works"
                loading="lazy"
                className="imageScrol"
              />
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  {" "}
                  Interior Works <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>{" "}
                </p>
                <br />
                <Box
                  sx={{ fontSize: { md: "17px", xs: "14px" }, color: "grey" }}
                >
                  <p>
                    {" "}
                    Improve the functionality and appearance of a space, making
                    it more comfortable and inviting, or simply updating it to
                    reflect current design trends.
                  </p>
                </Box>{" "}
                {/* <span style={{ fontSize: "17px" }}> 
            Ensure that buildings are safe and meet all necessary building codes and regulations.
            </span> */}
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                height: "500px",
              }}
            >
              <img
                src="/automation-works.jpg"
                alt="automation-works"
                loading="lazy"
                className="imageScrol"
              />
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  {" "}
                  Automation Works
                  <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>
                </p>
                <br />
                <Box
                  sx={{ fontSize: { md: "17px", xs: "14px" }, color: "grey" }}
                >
                  <p>
                    {" "}
                    By implementing automation works such as 3D printing,
                    robotics, building information modeling, house construction
                    companies can improve the speed, efficiency, and quality of
                    their construction processes, which can lead to increased
                    customer satisfaction and improved profitability.
                  </p>{" "}
                  {/* <span style={{ fontSize: "17px" }}>Crucial process in construction and manufacturing industries, as it helps to ensure that materials used in products and structures are of the required quality and strength.</span> */}
                </Box>{" "}
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                height: "500px",
              }}
            >
              <img
                src="/AMC_Artboard.jpg"
                alt="AMC"
                loading="lazy"
                className="imageScrol"
              />
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  {" "}
                  AMC
                  <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>
                </p>
                <br />
                <Box
                  sx={{ fontSize: { md: "17px", xs: "14px" }, color: "grey" }}
                >
                  <p>
                    {" "}
                    Beneficial service which provides a guarantee to the client
                    that any issues that may arise in the construction will be
                    addressed in a timely and efficient manner. Typically covers
                    regular maintenance and repair services for the building,
                    such as cleaning, painting, plumbing, electrical repairs,
                    and HVAC maintenance.
                  </p>{" "}
                  {/* <span style={{ fontSize: "17px" }}>Crucial process in construction and manufacturing industries, as it helps to ensure that materials used in products and structures are of the required quality and strength.</span> */}
                </Box>{" "}
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box
        sx={{ display: { md: "none", sm: "none", xs: "flex" }, p: "0" }}
        ref={divRef}
      >
        <Swiper
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          // Navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
          // navigation
          centerSlides
          spaceBetween={0}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 2000 }}
          autoplayDisableOnInteraction={false}
        >
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                height: "500px",
              }}
            >
              <Box>
                <img
                  src="/construction-permissions.jpg"
                  alt="construction-permissions"
                  loading="lazy"
                  className="imageScrol"
                />
              </Box>{" "}
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                  pb: "2px",
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "35px" }}>
                  Construction Permissions <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>
                </p>
                <br />
                <Box
                  sx={{
                    fontSize: { md: "17px", xs: "14px" },
                    color: "grey",
                    height: "500px",
                  }}
                >
                  <p>
                    Legal approval granted by a government or regulatory
                    authority that allows an individual or organization to
                    proceed with building or altering a structure on a
                    particular piece of land.
                  </p>
                </Box>
                {/* <span>
            We perform soil investigation reports to know the load bearing capacity and to analyze other metrics.
            </span> */}
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                height: "500px",
              }}
            >
              <img
                src="/civil-construction.jpg"
                alt="civil-construction"
                loading="lazy"
                className="imageScrol"
              />
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  Civil Construction <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>
                </p>

                <Box
                  sx={{ fontSize: { md: "17px", xs: "14px" }, color: "grey" }}
                >
                  <p>
                    These projects are critical for economic development and
                    play a vital role in improving the quality of life of people
                    by providing essential infrastructure such as roads, water
                    supply, sanitation, and power supply.
                  </p>
                </Box>
                {/* <span style={{ fontSize: "17px" }}>
            Create essential blueprints that provide a detailed overview of a building's design and layout. 
            </span> */}
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                height: "500px",
              }}
            >
              <img
                src="/interior-works.jpg"
                alt="interior-works"
                loading="lazy"
                className="imageScrol"
              />
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  {" "}
                  Interior Works <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>
                </p>
                <br />
                <Box
                  sx={{ fontSize: { md: "17px", xs: "14px" }, color: "grey" }}
                >
                  <p>
                    {" "}
                    Improve the functionality and appearance of a space, making
                    it more comfortable and inviting, or simply updating it to
                    reflect current design trends.
                  </p>
                </Box>{" "}
                {/* <span style={{ fontSize: "17px" }}> 
            Ensure that buildings are safe and meet all necessary building codes and regulations.
            </span> */}
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                height: "500px",
              }}
            >
              <img
                src="/automation-works.jpg"
                alt="automation-works"
                loading="lazy"
                className="imageScrol"
              />
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  {" "}
                  Automation Works
                  <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>
                </p>
                <br />
                <Box
                  sx={{ fontSize: { md: "17px", xs: "14px" }, color: "grey" }}
                >
                  <p>
                    {" "}
                    By implementing automation works such as 3D printing,
                    robotics, building information modeling, house construction
                    companies can improve the speed, efficiency, and quality of
                    their construction processes, which can lead to increased
                    customer satisfaction and improved profitability.
                  </p>{" "}
                  {/* <span style={{ fontSize: "17px" }}>Crucial process in construction and manufacturing industries, as it helps to ensure that materials used in products and structures are of the required quality and strength.</span> */}
                </Box>{" "}
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                background: "white",
                borderRadius: "10px",
                p: "20px",
                height: "500px",
              }}
            >
              <img
                src="/AMC_Artboard.jpg"
                alt="AMC"
                loading="lazy"
                className="imageScrol"
              />
              <Box
                sx={{
                  textAlign: "center",
                  pt: "5px",
                  fontSize: { md: "15px", xs: "16px" },
                }}
              >
                <p style={{ fontWeight: "bold", lineHeight: "10px" }}>
                  {" "}
                  AMC
                  <br />
                  <span
                    style={{
                      padding: "2px",
                      width: "40px",
                      background: "orange",
                    }}
                  ></span>
                </p>
                <br />
                <Box
                  sx={{ fontSize: { md: "17px", xs: "14px" }, color: "grey" }}
                >
                  <p>
                    {" "}
                    Beneficial service which provides a guarantee to the client
                    that any issues that may arise in the construction will be
                    addressed in a timely and efficient manner. Typically covers
                    regular maintenance and repair services for the building,
                    such as cleaning, painting, plumbing, electrical repairs,
                    and HVAC maintenance.
                  </p>{" "}
                  {/* <span style={{ fontSize: "17px" }}>Crucial process in construction and manufacturing industries, as it helps to ensure that materials used in products and structures are of the required quality and strength.</span> */}
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}

export default Scroll;
