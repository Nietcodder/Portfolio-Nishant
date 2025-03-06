import React from 'react'
import './Certificate.css'


const Certificate = () => {
  //here Key is used for the function of which value or card is clicked
  const handleClick = (key,url) =>{
    window.open(url,'_blank');
  } 
  return (
    <div>
       <div className="card-container">
      <div className="card" id="Graduation" onClick={()=>{handleClick("")}}>
        <h3>DSA</h3>
      </div>

      <div className="card" id="Diploma">
        <h3>Coursera WEB DEVLOPMENT</h3>
      </div>

      <div className="card" id="School">
        <h3>JAVA</h3>
      </div>

      <div className="card" id="School">
        <h3>Programing in C</h3>
      </div>

      <div className="card" id="School" onClick={()=>handleClick('Infosys Certificate','https://infyspringboard.onwingspan.com/auth/realms/infyspringboard/protocol/openid-connect/auth?client_id=portal&redirect_uri=https%3A%2F%2Finfyspringboard.onwingspan.com%2Fweb%2Fen%2F%2Fapp%2Fprofile%2Fcompetency%2Fcertificate&state=3b39ee83-25bd-49c0-8a7d-82e0eeacb71c&response_mode=fragment&response_type=code&scope=openid&nonce=6699593e-fa3c-45a1-816b-1d8c2bfae617')}>
        <h3>Infosys Certificate</h3>
      </div>

      <div className="card" id="School">
        <h3>Goldman Sachs</h3>
      </div>

      <div className="card" id="School">
        <h3>Goldman Sachs</h3>
      </div>



    </div>
    </div>
  )
}

export default Certificate
