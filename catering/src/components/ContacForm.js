import React,{useRef, useState} from 'react'
import "./Home.css"
import emailjs from '@emailjs/browser';
import Button from "@mui/material/Button";

function ContacForm() {
    const form = useRef();
    const [phone,setP]=useState('');
    const [name,setN]=useState('');
    const [email,setE]=useState('');
     const[succes,setSucces]=useState(false)
const [err, setErr]=useState(false)



  const  sendMail=(e)=>{
e.preventDefault();
if(phone&&name&&email){  
emailjs.sendForm('service_8c1ourc', 'template_2qoaqda', form.current, 'z86VQrtxn2rT7uLbC')
.then((result) => {
    console.log(result.text);
    setSucces(true)
}, (error) => {
    console.log(error.text);
});}
  }
  return (
    <form action="sc" ref={form} onSubmit={
  
        sendMail
        }>
    <div  className='contact'>
<div className="name">
    <label htmlFor="name">Name</label>
    <input type="text"  name="user_name" value={name} onChange={(e)=>setN(e.target.value)}/>
</div>
<div className="name">
<label htmlFor="name" >Email</label>

    <input type="email"  name="user_email" value={email} onChange={(e)=>setE(e.target.value)}/>
</div>
<div className="name">
<label htmlFor="name"  >Phone</label>

    <input type="number" name="user_phone" value={phone} onChange={(e)=>setP(e.target.value)}/>
</div>
<div className="name">
<label htmlFor="name">Message</label>

   <textarea name="message" id="" cols="20" rows="6" ></textarea>
</div>
<div className="name">
    <Button variant='contained' type='submit' onClick={()=>{
       Error()
    }}>Submit</Button>
</div>
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