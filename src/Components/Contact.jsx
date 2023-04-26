import React from 'react'
// import proimage1 from '../Img/c.jpg'
// import { Link } from 'react-router-dom'
import Social from './Social'
import './Contact.css'
import Header from './Header'
import Below from './Below'


const Contact = () => {
  return (
    <div className="bodyabout">
   <Header />
    <div className='bodylayout1'>
   
     <div className='forimgs'>
      {/* <form>
        <label className='labels'>Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input className='inputbox' placeholder='Enter name'></input><br/>
        <label className='labels'>Email:</label>&nbsp;
        <input className='inputbox' placeholder='Enter your Email'></input><br/>
        <label className='labels'>Message:</label>&nbsp;
        <input className='message' placeholder='Enter your message and send , 
        \it will come back to my mail .Thanks you'></input><br/>
        <button className=''>Send</button>
      </form> */}
    </div>
    <div  className='Contentdiv1'>
       <div className='forhead1'>
       Gmail:- &nbsp;   
       <a href='https://mail.google.com/mail/u/0/?fs=1&to=ashup393@gmail.com&su=Intrested to Hire me&body=Hi Ashu,&bcc=someone.else@example.com&tf=cm' className="navbarlink1" underline="hover" color="inherit">
         Ashup393@gmail.com
       </a><br /><br />
       Schedule Meeting From :- <br/><br/>
       <a href ='https://meet.google.com/' className="navbarlink2" underline="hover" color="inherit">
        Google Meet,
       </a>&nbsp;&nbsp;
       <a href ='https://www.microsoft.com/en-in/microsoft-teams/group-chat-software' className="navbarlink2" underline="hover" color="inherit">
        Teams,
       </a>&nbsp;&nbsp;
       <a href ='https://calendly.com/' className="navbarlink2" underline="hover" color="inherit">
        Calendly 
       </a>
       </div>
       <div className='socialicon'>
            <Social />
    </div>
    </div>
   
    </div>
    <div className='belowcode1'>
    <Below />
    </div>
   
    </div>
  )
}

export default Contact
