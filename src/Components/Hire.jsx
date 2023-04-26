import React from 'react'
import { Button } from '@mui/material';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';



const Hire = () => {
  const navigate =useNavigate();

  return (
    <div className='hires'>
       <Button  onClick = { ()=>navigate('/Hireinfo')}  variant="contained">Hire Me</Button>
    </div>
  )
}

export default Hire ;
