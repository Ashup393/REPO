import React from 'react'
// import {Link} from 'react-router-dom'
// import frontend from '../Img/frontend.png'
import Header from './Header'


import ladyimg from '../Img/c.jpg';
import './Homepage.css';
import Social from './Social';
// import workexp from '../Img/hh-removebg-preview.png';
// import Education from '../Img/education-removebg-preview (1).png';
// import Skills from '../Img/kk-removebg-preview.png';
// import Certification from '../Img/pp-removebg-preview.png';
// import Achievements from '../Img/achievments-removebg-preview.png';
// import organization from '../Img/organization-removebg-preview.png';
// import calculator from '../Img/calcy-removebg-preview.png';
// import labour from '../Img/labor-removebg-preview.png';
// import tictoe from '../Img/toe-removebg-preview.png';
// import { Link } from 'react-router-dom';
// import Below from './Below';
// import Hire from './Hire';


const paragraph = <text>To pursue a job opportunity in a competitive environment that will
challenge me to push my boundaries and
  expand my knowledge in the field of Designing while
 allowing me to add value to the dynamics of the company.</text>
 


const Homepage = () => {
  return (
    <div className='Homee'>
 
    <div className='navbar'>
    <Header />
     {/* <img src ={frontend} alt='imgdiv'></img> */}

    {/* <div className='navbarlinkdiv'>
    <nav>
        <Link to ='/' className="navbarlink" underline="hover" color="inherit">
         Home
       </Link>
       <Link to ='/Aboutme' className="navbarlink" underline="hover" color="inherit" >
         About Me
       </Link>
       <Link to ='/Project' className="navbarlink" underline="hover" color="inherit">
         Featured Projects
       </Link>
       <Link to='/Contact' className="navbarlink" underline="hover" color="inherit">
         contacts 
       </Link>
       {/* <Hire/>   */}
       {/* </nav> */}
     
   
     </div>  
    <div className="images" style={{margintop:"70px"}} >
        <img src ={ladyimg} alt='imgdiv'></img>
    </div>
    <div className='contents'>
    <div className="introduction">
            <h2 className="hi">Hi,</h2>
            {/* <h2 style={{color:"blue"}}>I'm Ashu Singh</h2>  */}
            </div>
            <div className="paragraph">
            <h2 style={{color:"black"}}>I'm Ashu Singh</h2> 
            <p className="Objective" style={{color:"black"}}>{paragraph}</p>
            </div>
            <div className='social'>
            <Social /></div>
            </div>

       
</div>
 

        
          
           
            
    

  )
}

export default Homepage
