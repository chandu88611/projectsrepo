
import { HiPhone } from "react-icons/hi";
import Home from './components/Home.js';
import Header from './components/Header.jsx';
import './App.css';
import Footer from './components/Footer.js';
import { BsWhatsapp} from "react-icons/bs";
import Layout from "./components/Layout.js";
import Veneer from './components/Veneer.js';
import Laminates from './components/Laminates.js';
import Contact from './components/Contact.js';
import Hardware from './components/Hardware.js';
import Playwood from './components/Playwood.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from '@mui/system';
import About from './components/About.js';
import Decoretives from "./components/Decoretives.js";
import Privacypolicy from "./components/privacy-policy.js";
import Termsandconditions from "./components/termsandconditions.js";
import Notfound from "./components/Notfound.jsx";
function App() {
  // const location = useLocation();

  // useEffect(() => {
   
  // }, [location]);
  return (
    <div >
     
      <Router>

       
      {/* <Header/> */}

  
      <Routes>
    <Route path="/" element={  <Layout> <Home /> </Layout>} />  
    
         <Route path="/veneer" element={ <Layout> <Veneer/></Layout>} />
           <Route path="/laminates" element={ <Layout> <Laminates /> </Layout>}/>
        <Route path="/plywood" element={ <Layout> <Playwood /> </Layout>}/>
   

         
         
       
          
          <Route path="/about" element={ <Layout> <About /> </Layout>}/>



          <Route path="/contact" element={ <Layout> <Contact /> </Layout>}/>
          
          <Route path="/hardware" element={ <Layout> <Hardware /> </Layout>} />
          <Route path="/decoratives" element={ <Layout> <Decoretives/> </Layout>} />
          <Route path="/terms-and-conditions" element={ <Layout> <Termsandconditions/> </Layout>} />
          <Route path="/privacy-policy" element={ <Layout><Privacypolicy/></Layout>} />
          <Route path="*" element={<Notfound />}/>
        </Routes>
    
        <Box sx={{  display:"flex",position: "fixed", bottom: "10%",width:'30px',height:'30px',padding:"10px",zIndex:10,alignItems:'center',justifyContent:'center' }} className="left">
          <a href="https://wa.me/9182709981" className="anchor" target="_blank" rel="noreferrer" >
            <BsWhatsapp size={"46px"} color="green"  />
          </a>
        </Box>  
       
      {/* <Footer/> */}

      
      </Router>
      
      
    </div>
  );
}

export default App;
