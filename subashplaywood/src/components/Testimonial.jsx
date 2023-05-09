import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { BsDot } from "react-icons/bs";
function Testimonial() {
  const [slide1, setSlide1] = useState(true);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);



  useEffect(()=>{
 const interval= setInterval(()=>{
     if(slide2)
             { setTimeout(()=>{
        setSlide1(true)
        setSlide2(false)
             },3000)}
      if(slide1){
      setTimeout(()=>{
        setSlide2(true)
        setSlide1(false)
      },3000)}
    },7000)
    return () => clearInterval(interval);
  },[slide1,slide2])
  const toggle = (state) => {
    switch (state) {
      case "slide1":
        setSlide1(true);
        setSlide2(false);
        setSlide3(false);
        setSlide4(false);
        break;
      case "slide2":
        setSlide2(true);
        setSlide1(false);
        setSlide3(false);
        setSlide4(false);
        break;
      case "slide3":
        setSlide3(true);
        setSlide2(false);
        setSlide1(false);
        setSlide4(false);
        break;
      case "slide4":
        setSlide4(true);
        setSlide2(false);
        setSlide3(false);
        setSlide1(false);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "rgb(133, 94, 66)" }}>
        OUR HAPPY CUSTOMERS
      </h1>
      <p style={{ textAlign: "center"}}>Clients sharing experience with us. Next it’s your turn to get your dream house with us.</p>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          flexDirection: "column",
          p: "15px",
          width:{md:'65%',sm:'70%',xs:'90%'},      
          // backgroundColor: "rgb(205, 133, 63,.2)",
          textAlign: "center",
          m:'auto'
        }}
      >
        <Box sx={{ display: "grid" ,pt:{md:'50px',xs:'50px'},pb:{md:'50px',xs:'0'},pl:{md:'50px',xs:'0'},pr:{md:'50px',xs:'5px'},fontSize:{md:'15px',xs:'10px'},background:'white',overflow:'hidden',borderRadius:'6px'}}>
          {" "}
          {slide1 ? (
            <Box className="animation" sx={{display:'grid',gridTemplateColumns:{md:'25vw 25vw',sm:'80%',xs:'80%'},justifyContent:'center',gridColumnGap:'50px',gridRowGap:"80px"}} >
              <Box sx={{position:'relative',background:'rgb(200,200,200,.4)',textAlign:'center',p:'20px',borderRadius:'10px'}}>
              <Box sx={{position:'absolute',left:{md:"38%",sm:'37%',xs:'32%'},top:-55}}> <img src="./images/suresh.webp" style={{width:'100px'}} /></Box>
              
              <p style={{paddingLeft:'10px',paddingRight:'10px',paddingTop:'60px',marginTop:'30px'}}>
                 <span style={{fontWeight:'bold',fontSize:'20px'}}> Suresh</span> <br/>
                {" "}
                Couldn't be happier with the laminate portfolio available at
                Subhash Plywood Shivarampally. All the products I purchased here
                at an affordable price & it was superb with the output.
              </p>
              </Box>
              <Box sx={{position:'relative',background:'rgb(200,200,200,.4)',textAlign:'center',p:'20px',borderRadius:'10px'}}> 
              <Box sx={{position:'absolute',left:{md:"38%",sm:'37%',xs:'32%'},top:-55}}> <img src="./images/umangagarwal.webp" style={{width:'100px'}} /></Box>
              <p style={{paddingLeft:'10px',paddingRight:'10px',textAlign:'center',paddingTop:'60px',marginTop:'30px'}}
                 >
                 <span style={{fontWeight:'bold',fontSize:'20px'}}> Umang Agarwal</span> <br/>
              Overall, I was impressed with the level of professionalism and organization displayed during the meeting.  I would highly recommend attending future meetings organized by this group and am looking forward to the next one.
              </p>
              
              </Box>
            </Box>
          ) : (
            ""
          )}
          {slide2 ? (
            <Box className="animation" sx={{display:'grid',gridTemplateColumns:{md:'25vw 25vw',sm:'80%',xs:'80%'},justifyContent:'center',gridColumnGap:'50px',gridRowGap:"80px"}} >
             <Box sx={{position:'relative',background:'rgb(200,200,200,.4)',textAlign:'center',p:'20px',borderRadius:'10px'}}> 
             <Box sx={{position:'absolute',left:{md:"38%",sm:'37%',xs:'32%'},top:-55}} > <img src="./images/mayank.webp" style={{width:'100px'}} /></Box>
             
              <p style={{paddingLeft:'10px',paddingRight:'10px',paddingTop:'60px',marginTop:'30px'}}>
              <span style={{fontWeight:'bold',fontSize:'20px'}}> Mayank</span> <br/>

              Amazing stuff. Stunned with the high-end collections of veneer available at Subhash Plywood of different designs & textures. Definitely would recommend if anyone are looking for luxurious veneer interior designs.

              </p>
              </Box>
              <Box sx={{position:'relative',background:'rgb(200,200,200,.4)',textAlign:'center',p:'20px',borderRadius:'10px'}}> 
              <Box sx={{position:'absolute',left:{md:"38%",sm:'36%',xs:'32%'},top:-55}} > <img src="./images/subhashgallery.webp" style={{width:'100px'}} /></Box>
              <p style={{paddingLeft:'10px',paddingRight:'10px',paddingTop:'60px',marginTop:'30px'}}>
              <span style={{fontWeight:'bold',fontSize:'20px'}}> Mitesh</span> <br/>

              One stop solution for interior materials such as plywood, laminates, veneers, hardware and fevicol at an affordable price. I liked the samples which they showed in the store & the product knowledge is amazing with the staff & owner.
              </p>
              </Box>
            </Box>
          ) : (
            ""
          )}
          {/* {slide3 ? (
            <Box className="animation">
              <RxAvatar size={"70px"} />
              <p style={{paddingLeft:'10px',paddingRight:'10px'}}>
              One stop solution for interior materials such as plywood, laminates, veneers, hardware and fevicol at an affordable price. I liked the samples which they showed in the store & the product knowledge is amazing with the staff & owner.
              </p>
            </Box>
          ) : (
            ""
          )}
          {slide4 ? (
            <Box    className="animation" >
              <RxAvatar size={"70px"}  />
              <p style={{paddingLeft:'10px',paddingRight:'10px'}}>
              Overall, I was impressed with the level of professionalism and organization displayed during the meeting.  I would highly recommend attending future meetings organized by this group and am looking forward to the next one.
              </p>
            </Box>
          ) : (
            ""
          )} */}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ cursor: "pointer" }} onClick={() => toggle("slide1")}>
            <BsDot size="40px" style={{ color: slide1 ? "brown" : "black" }} />
          </Box>
          <Box sx={{ cursor: "pointer" }} onClick={() => toggle("slide2")}>
            <BsDot size="40px" style={{ color: slide2 ? "brown" : "black" }} />
          </Box>
          

          <Box></Box>
        </Box>
      </Box>
    </>
  );
}

export default Testimonial;
