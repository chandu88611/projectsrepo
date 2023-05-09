import React, { useState,useEffect } from 'react'
import "./Header.css"
import {AiOutlineClose } from "react-icons/ai";
import { VscThreeBars} from "react-icons/vsc";
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { Box } from '@mui/system';
function Header() {
    const[state,setState]=useState(false)
    const [service,setService]=useState(true)

    useEffect(() => {
   
      setInterval(()=>{
        $(".p").slideToggle(3000, function() {
       
        });
      },[])
   
     
    }, []);
  return (
    <>
    <div className="header_container">
  
 
<div className="menu_items" style={{
  marginLeft:!service?"25vw":"25vw"
  }}>
    <div className="menu" onClick={()=>setService(true)}>
  <Link to={'/'} className="hover" style={{textDecoration:'none'}}> Home </Link>
</div>
<div className="menu" onClick={()=>setService(false)}>  <Link to={'/about'} className="hover"style={{textDecoration:'none'}}> About  </Link>  </div>
 {/* <Router>{service?<div className="menu"><Link to={'#Events'}className="hover" style={{textDecoration:'none'}}> Services </Link> </div>
:''}</Router>  */}
<div style={{height:'9.5vh'}} >
    <img src="./images/newlogo.png" className="image" alt="" />
  </div>
<div className="menu" onClick={()=>setService(false)}><Link to={'/menu'} className="hover" style={{textDecoration:'none'}}> Menu  </Link> </div>

<div className="menu" onClick={()=>setService(false)}>
    <Link to={'/contact'} className="hover" style={{textDecoration:'none'}}>Contact  </Link>
</div>


</div>

<div style={{marginLeft:'20px'}}  className="logoshow">
    <img src="./images/newlogo.png" className="mobile_logo" alt="logo" />
  </div>
<div className="threeBars" >

<div style={{marginRight:'20px'}} > {state?<AiOutlineClose size={'5vh'} color='black' className='one' onClick={()=>setState(false)} />:<VscThreeBars size={'5vh'} className='two'   color='black' onClick={()=>{setState(true)
}
}/>}</div>
 
</div>

    </div>
   { state?<div className="menu_items_mobile">
   <Link to={'/'} className="hover" style={{textDecoration:'none'}} onClick={()=>setState(false)} ><div className="menu1">   Home 
</div></Link>
<Link to={'/about'} className="hover" style={{textDecoration:'none'}} onClick={()=>setState(false)}><div className="menu1">   About
</div></Link>
<Link to={'/menu'} className="hover" style={{textDecoration:'none'}} onClick={()=>setState(false)}> <div className="menu1">
Menu

</div> </Link>
<Link to={'/contact'} className="hover" style={{textDecoration:'none'}} onClick={()=>setState(false)}><div className="menu1">
 Contact

</div> </Link>

</div>:''}
    </>
  )
}

export default Header