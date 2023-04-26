import React from 'react'
import './Homepage.css'
import { Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='navbar'>
    {/* <img src ={frontend} alt='imgdiv'></img> */}
    <div className='navbarlinkdiv'>
    <nav>
        <Link to ='/'   className="navbarlink" underline="hover" color="inherit">
         Home
       </Link>
       <Link to ='/Aboutme' className="navbarlink" underline="hover" color="inherit" >
         About me
       </Link>
       <Link to ='/Project' className="navbarlink" underline="hover" color="inherit">
         Featured Projects
       </Link>
       <Link to='/Contact' className="navbarlink" underline="hover" color="inherit">
         Contacts 
       </Link>
       {/* <Hire/>   */}
       </nav>
     
       </div>
    </div>
    </div>
  )
}

export default Header
