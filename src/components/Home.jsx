import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import {useState} from 'react'
import pic from './pic.jpeg'

//const[show,setshow]=useState()

const Home = () => {
  return (
    <div>
      <div id='home'>
      <h1>HI I'M NISHANT SINGH</h1>
      <h3>WEB DEVLOPER</h3>
      <div id='img'>
      <img src={pic}/>
      </div>
      <button><p>Explore More</p></button>
      
      </div>
    </div>
  )
}

export default Home
