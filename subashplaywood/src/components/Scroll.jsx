import { Box } from '@mui/system'
import React, { useState ,useRef, useEffect} from 'react'


import { IoIosArrowDropleftCircle ,  IoIosArrowDroprightCircle} from "react-icons/io";
function Scroll( {children,arr}) {
    const divRef = useRef(null);
    const [left, setLeft] = useState(true);
    const [right, setright] = useState(true);


    const [categories,setCategories]=useState([])

    // function handleLeftClick() {
    //     const div = document.querySelector("#yourDivId");
    //     div.scrollLeft -= 250;
    //     div.behaviour= "smooth"

    //   }
      useEffect(()=>{
      setCategories(arr)
      })
    //   function handleRightClick() {
    //     const div = document.querySelector("#yourDivId");
    //     div.scrollLeft += 250;
    //     div.behaviour= "smooth"
    //   }
    function handleScroll(event) {
        if (event.target.scrollLeft >= 250 * 4) {
          setLeft(true)
        }
        if (event.target.scrollRight >= 20 * 4) {
            setright(true)
          }
      }
      
      const handleLeftClick = () => {
        const isMobile = window.innerWidth <= 768;
        const scrollAmount = isMobile ? -200 : -400;
      
        divRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth"
        });
      };
      
    
      const handleRightClick = () => {
        const isMobile = window.innerWidth <= 768;
        const scrollAmount = isMobile ? 280 : 400;

        divRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth"
        });
      };
      

    const array=[
        {
            img:'./images/hardware.jpg',
            title:"laminate1"
        },
        {
            img:'./images/image_1.png',
            title:"laminate2"
        },{
            img:'./images/laminate_3.jpg',
            title:"laminate3"
        },{
            img:'./images/laminate2.jpg',
            title:"laminate4"
        },{
            img:'./images/veneer_2.jpg',
            title:"laminate5"
        },{
            img:'./images/venners.jpg',
            title:"lainate6"
        }
    ]
  return (
    <Box sx={{position:'relative'}}>
 <Box sx={{display:"flex",overflowX:'scroll',alignItems:'center'}} id="yourDivId" ref={divRef}>
 {categories.map((data)=>(<Box key={data.name} sx={{position:'relative',ml:{md:'20px',xs:'41px'},mr:{md:'20px',xs:'41px'},display:'flex',justifyContent:'center',mt:'10px',pl:'2vw',pr:'2vw',flexDirection:'column'}}>
  

   <Box sx={{height:{md:'280px',sm:'250px',xs:'160px'},width:{md:'240px',sm:'200px',xs:'180px'}}}> <img src={data.img} alt={data.name} loading="lazy" style={{width:'100%',height:"100%"}}/></Box>

   <Box sx={{textAlign:'center'}}>
    <p>{data.name}</p>
   </Box>




</Box>)) }


{children}
 </Box>

 {left?<Box sx={{position:'absolute',left:-7,top:{lg:140,md:170,sm:120,xs:85 }}}><IoIosArrowDropleftCircle  size="40px"  onClick={handleLeftClick} style={{color:'rgb(219, 177, 99)'}}/> </Box>
:""}
{right?<Box sx={{position:'absolute',right:0,top:{lg:140,md:170,sm:120,xs:85}}}> <IoIosArrowDroprightCircle size="40px" onClick={handleRightClick} style={{color:'rgb(219, 177, 99)'}}/> </Box>:""
 }
 </Box>
  )
}

export default Scroll