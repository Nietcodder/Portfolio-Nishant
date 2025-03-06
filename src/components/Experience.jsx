import React from 'react';
import './Experience.css';
import { useState } from 'react';
import cppImage from './C++.png';
import htmlImage from './html-5-logo.png';
import jsImage from './java-script.png';
import mongoImage from './Mongodb.png';
import cssImage from './CSS.png';
import reactImage from './React.png';
import expressImage from './Express.js.png';
import leetcodeImage from './Leetcode.png';

const Experience = () => {

  // const [clicks,setClicks] = useState({Leetcode:0});

  const handleClick = (key,url) => {
    //this is code is used to preserve previous count and update the previous count
    // setClicks(prev => ({...prev,[key]:prev[key]+1}));
    window.open(url,'_blank');

  }
  return (  
    <div>
      <div className="card-container">

        <div className="card" id="Graduation" onClick={()=>handleClick('leetcode','https://leetcode.com/u/Nishantcodder/')}>
          <h3>LeetCode</h3>
          {/* <p>Clicks:{clicks.Leetcode}</p> */}
          <img src={leetcodeImage} alt="leetcode" className="card-image"/>
        </div>

        <div className="card" id="Diploma">
          <img src={cppImage} alt="C++" className="card-image"/>
        </div>

        <div className="card" id="School"> 
          
          <img src={htmlImage} alt="HTML" className="card-image"/>
        </div> 

        <div className="card" id="JavaScript">
          <h3>JAVASCRIPT</h3>
          <img src={jsImage} alt="JavaScript" className="card-image"/>
        </div>

        <div className="card" id="MongoDB">
          <h3>MONGODB</h3>
          <img src={mongoImage} alt="MongoDB" className="card-image"/>
        </div>

        <div className="card" id="CSS">
          <h3>CSS</h3>
          <img src={cssImage} alt="CSS" className="card-image"/>
        </div>

        <div className="card" id="react">
          <h3>React</h3>
          <img src={reactImage} alt="react" className="card-image"/>
        </div>

        <div className="card" id="Express">
          <h3>Express </h3>
          <img src={expressImage} alt="Express" className="card-image"/>
        </div>

      </div> 
    </div> 
  ); 
}; 

export default Experience;
