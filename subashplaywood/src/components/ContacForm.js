import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import Button from "@mui/material/Button";
import { Box, TextField } from '@mui/material';


function ContacForm() {
    const form = useRef();
    const [phone,setP]=useState('');
    const [name,setN]=useState('');
    const [email,setE]=useState('');
    const [city,setC]=useState('');
   


     const[succes,setSucces]=useState(false)
const [err, setErr]=useState(false)



const sendMail=(e)=>{
e.preventDefault();
if(phone&&name&&email){  
emailjs.sendForm('service_8c1ourc', 'template_2qoaqda', form.current, 'z86VQrtxn2rT7uLbC')
.then((result) => {
    console.log(result)
    if(result.status===200){
    setSucces(true)
    setErr(false)
    }else{
    setSucces(false)
    setErr(true)
    }

    });}
    }
  return (
    <form action="sc" ref={form} onSubmit={
        sendMail
        } style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <div  className='contact'>
        <div >
        <h4 style={{textAlign:'center',color:"rgb(97, 51, 36)" ,fontSize:'30px'}}>REQUEST A CALL BACK</h4>

        </div>
<div className="name">
    
    <TextField label="Name" variant="standard" type="text"  name="user_name" value={name}  onChange={(e)=>setN(e.target.value)} className="input"/>
    <TextField type="email"  name="user_email" value={email} label="Email" variant="standard"   onChange={(e)=>setE(e.target.value)} className="input"/>
</div>

<div className="name">


    <TextField type="number" name="user_phone" value={phone} label="Phone" variant="standard"   onChange={(e)=>setP(e.target.value)} className="input"/>
    <TextField type="number" name="user_phone" value={city} label="City" variant="standard"   onChange={(e)=>setC(e.target.value)} className="input"/>
   
</div>


<div>

   <textarea name="message" id=""  style={{width:'100%',fontSize:'15px',marginTop:'40px'}} placeholder="Enquiry"  rows="3"  className="input"></textarea>
</div>
<Box sx={{display:{lg:"flex",md:'flex',sm:'flex',xs:'block'},gap:'10px',padding:'7px',justifyContent:'space-betwen',width:'100%'}}>
    <Box>
    By submitting this form, you agree to <span style={{color:'orange'}}> the privacy policy </span>& <br/> <span style={{color:'orange'}}>terms and conditions</span> 
    </Box>
    <Box >
    </Box>
</Box>
<Box sx={{display:'flex',justifyContent:'center'}}> 
    <Button variant='contained' type='submit' sx={{'&:hover': {
      backgroundColor: 'green'
    } ,ml:'2vw',backgroundColor: 'rgb(133, 94, 66)',mt:'5px'}}   onClick={()=>{
      
        if(!phone&&!name&&!email){
setErr(true)
        }
        
    }}>Submit  <span style={{margin:"auto"}}></span> </Button></Box>
{succes?
<div style={{color:'green'}}>  message sent Succesfully!</div>:''
}
{err?
<div style={{color:'Red'}}>  Fill All Mandatory fields !</div>:''
}

    </div></form>
  )
}

export default ContacForm