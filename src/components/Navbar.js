import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import "./Home.js";
import  logo from "./images/logo.png";

function Navbar() {
  return (
//     <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
//     <div className="container">
//   <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo.."/></a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
//     <ul className="navbar-nav ">
//       <li className="nav-item active">
//         <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/About">About</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/Resume">Resume</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/Project">Project</a>
//       </li>

//       <li className="nav-item">
//         <a className="nav-link" href="/Contact">Contact</a>
//       </li>
    
//     </ul>
    
//   </div>

//   </div>
// </nav>
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/"><img className='logo' src={logo} alt="logo.."/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Project">Project</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <Home /> */}
    </nav>
    

  )
}

export default Navbar