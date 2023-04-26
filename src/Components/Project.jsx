import { Link } from 'react-router-dom';
import React from 'react';

import calculator from '../Img/calcy-removebg-preview.png';
import labour from '../Img/labor-removebg-preview.png';
import tictoe from '../Img/toe-removebg-preview.png';
import Header from './Header';
import './Project.css';
import Below from './Below';

const Project = () => {
  return (

    <div className="bodyaboutp">
    <Header />
    {/* <h1 className="headingaboutme"><u>About Me</u> </h1>  */}
<div className="aboutp">

<div className="subgridp">
<div className="imagep">
  <img  classname="calcy" src={calculator }  alt="PROJECTS"/>
</div>
<div className="contentp">
<u><h2>Scientific Calculator (06/2022 - 07/2022)</h2></u>
  <text>
  This project totally based on REACTJS,HTML and CSS.<br/>
If you wanna see whole project</text><br/>
      <Link to={"https://github.com/Ashup393"}>See more--></Link>
    
      </div>
      </div>

<div className="subgridp">
<div className="imagep">
  <img src={tictoe } style={{size:'40%'}} alt="PROJECTS"/>
</div>
<div className="contentp">
<u><h2>Tic tac Toe Game(07/2022)</h2></u>
  <text>
  This project totally based on REACTJS,HTML and CSS.<br/>
If you wanna see whole project</text><br/>
      <Link to={"https://github.com/Ashup393"}>See more--></Link>
    
      </div>
</div>
<div className="subgridp">
<div className="imagep">
  <img src={labour}  alt="PROJECTS"/>
</div>
<div className="contentp">
<u><h2>Masons Labour(09/2022-Present)</h2></u>
  <text>
  This project totally based on REACTJS,HTML and CSS.<br/>
If you wanna see whole project</text><br/>
      <Link to={"https://github.com/Ashup393"}>See more--></Link>
    
      </div>
  
</div> 

</div> 
    <div className='code2'>
    <Below />
    </div>
</div> 
    
  )
}

export default Project


 /* <div className='projectHome'>
       <Header />
    /  {/* <div className='forgridchange'> */
       /* <div className='forgridview'>
    //   <div className="subgrid">       */
    //   {/* <div className='forimg'>
    //    <img src={proimage} style={{size:'40%'}} alt="PROJECTS"/>
    //   </div> */}
    /* //   <div  className='Contentdiv'>
    //   <div className='forimg'>
     
    //  <img src={calculator}  alt="PROJECTS"/>
    // </div>
    //    <div className='forhead'><h2>Scientific Calculator (06/2022 - 07/2022)</h2></div>
    //    <div className='forsubhead'>This project totally based on REACTJS,HTML and CSS</div>
    //    <div className='fordata'><text>If you wanna see whole project></text>
    //     <Link to={"https://github.com/Ashup393"}>See more --></Link>
    //    </div>
    //     </div>
    //     </div>
      
    //     <div className="subgrid"> */
    //   {/* <div className='forimg'>
     
    //    <img src={proimage} style={{size:'40%'}} alt="PROJECTS"/>
    //   </div> */}
    /* //   <div  className='Contentdiv'>
    //   <div className='forimg'> */
     
    //  <img src={ login} style={{size:'40%'}} alt="PROJECTS"/>
    // </div>
    //    <div className='forhead'><h2>Login functionality with formik Library</h2></div>
    //    <div className='forsubhead'>This project totally based on REACTJS,HTML and CSS</div>
    //    <div className='fordata'><text>If you wanna see whole project></text>
    //     <Link to={"https://github.com/Ashup393"}>See more --></Link>
    //    </div>
    //     </div>
    //   </div>
    //     <div className="subgrid"> */
    //   {/* <div className='forimg'>
    //    <img src={proimage} style={{size:'40%'}} alt="PROJECTS"/>
    /* //   </div> */
    /* //   <div  className='Contentdiv'>
    //   <div className='forimg'>
     
    //  <img src={tictoe} style={{size:'40%'}} alt="PROJECTS"/>
    // </div>
    //   <h2>Tic tac Toe Game</h2>
    //  This project totally based on REACTJS,HTML and CSS
    //    If you wanna see whole project>
    //     <Link to={"https://github.com/Ashup393"}>See more --></Link>
    //    </div>
    //     </div> */
   
    //     {/* <div className="subgrid">
    //   {/* <div className='forimg'>
    //    <img src={proimage} style={{size:'40%'}} alt="PROJECTS"/>
    //   </div> */}
    //   {/* <div  className='Contentdiv'>
    //   <div className='forimg'>
     
    //  <img src={proimage} style={{size:'40%'}} alt="PROJECTS"/>
    // </div>
    //    <div className='forhead'><h2>Scientific Calculator (06/2022 - 07/2022)</h2></div>
    //    <div className='forsubhead'>This project totally based on REACTJS,HTML and CSS</div>
    //    <div className='fordata'><text>If you wanna see whole project></text>
    //     <Link to={"#"}>See more --></Link>
    //    </div>
    //     </div>
    //    </div> */} 
  /* //    </div>
    //    </div>
    </div>
    </div> */
   
    
 
    
  

