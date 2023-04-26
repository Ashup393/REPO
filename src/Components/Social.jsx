import React from 'react'
import vector from '../Img/Vector.png';
import vector1 from '../Img/Vector (1).png';
import vector2 from '../Img/Vector (2).png';
import vector3 from '../Img/Vector (3).png';
import './Homepage.css';


const Social = () => {
  return (
    
    <div className='socialmedia'>
     <p ><a href="https://github.com/Ashup393"><img src={vector} alt='d'></img></a>&nbsp;
         <a href="https://dev.twitter.com/web/intents"><img src={vector1} alt='d'></img></a>&nbsp;
         <a href="https://www.linkedin.com/in/ashup393"><img src={vector2} alt='d'></img></a>&nbsp;
         <a href="https://mail.google.com/mail/u/0/?fs=1&to=ashup393@gmail.com&su=Intrested to Hire me&body=Hi Ashu,&bcc=someone.else@example.com&tf=cm">
         <img src={vector3} alt='d'></img></a>
        
    </p>
   
    </div>
  )
}

export default Social ;
