import React from 'react';
import './AppCard.css'; // Importing the CSS file
import {useState} from 'react'

const AppCard = () => {
    const[display,setDisplay] = useState('')
    const handleClick = (key,url) =>{
      window.open(url,'_blank');
    } 
  return (
    <div className="card-container">
      <div className="card" id="Graduation" onClick={()=>{handleClick}}>
        <h3>Bachelor </h3>
      </div>

      <div className="card" id="Diploma">
        <h3>Diploma in Electrical Engineering</h3>
      </div>

      <div className="card" id="School">
        <h3>10th & 12th</h3>
      </div>

      <div className='card' id="linkedin" onClick={()=>handleClick('linkedin','https://www.linkedin.com/in/nishant-kumar-singh-800316235')}>
        <h3>Linkedin</h3>
      </div>

      <div className='card' id="Resume"onClick={()=>handleClick('Resume','https://drive.google.com/file/d/13Y23lItdrn1T5KecXvO3iQNItKuKDTIX/view?usp=drivesdk')}>
        <h3>Resume</h3>
      </div>

      <div className='card' id="Internship">
        <h3>InternShips</h3>
      </div>


      
    </div>
  );
}

export default AppCard;
