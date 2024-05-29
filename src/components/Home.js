import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import photo from './images/photo.jpg'



function Home() {
  return (
    <div className="home-container mt-5"> {/* Use a unique class for scoping */}
      <div className="row align-items-start">
        <div className="col-md-7">
          <span className='home-greeting'>Hello, </span><br></br>
          <span className='home-intro-text'>I'm <span className='home-name'>Nikhita</span></span>
          <p className='home-Dev'>Software Developer</p>
          <p className='home-para'>I am a skilled and passionate Software Developer with experience in creating visually appealing and user-friendly websites.</p>
          {/* Button with icon */}
          <Link to="/Contact">
            <button className='btn btn-primary home-btn'><i class="bi bi-bag-fill"></i> Hire Me</button>
          </Link>
        </div>
        <div className="col-md-5 align-items-start">
          {/* Add your image here */}
           <img src={photo} alt="Nikhita" className="img-fluid" /> 
        </div>
      </div>
    </div>

  )
}

export default Home