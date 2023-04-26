
import React from "react";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Aboutme from "./Components/Aboutme";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Nomatch from "./Components/Nomatch";
import Hireinfo from "./Components/Hireinfo";
// import DynamicRoute from "./Components/DynamicRoute";
// import DynamicDetail from "./Components/DynamicRoute";
// 
function App() {
  return (
    <div className="Homepage" >
    <BrowserRouter>
      <Routes>
       <Route path='/' element ={<Homepage />} />
       {/* <Route path='Aboutme' element ={<Aboutme />} /> */}
       <Route path='Aboutme' element ={<Aboutme />} />
       {/* <Aboutme /> */}
       <Route path='Project' element ={<Project />} />
       <Route path='/Contact' element ={<Contact />} />
       <Route path="/Hireinfo" element={<Hireinfo />} />
       {/* <Route path="/Dynamic"  element={<DynamicRoute/>} /> 
       <Route path="Dynamic|:DynamicID" element={<DynamicDetail />} /> */}
       <Route path="*" element={<Nomatch/>} />
      </Routes>
      
    </BrowserRouter>
   
    {/* <Hireinfo /> */}
    {/* <DynamicRoute /> */}
   
    </div>

  );
}

export default App;
