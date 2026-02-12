import React from 'react'
import "./Navbar.css"
import logoImg from "../assets/react.svg"
function Navbar() {
  return (
   <>
    <div className="navbar">
        <div className="logoSection">
            <div className="companyName">Farzi Company</div>
            <div className="logo">
                <img src={logoImg} alt="" />
            </div>
        </div>
        <div className="nav-links-section">
            <div className="navlinks">Home</div>
            <div className="navlinks">About</div>
            <div className="navlinks">Contact us</div>
        </div>
        <div className="searchSection">
            <input type="text" />
            <button>Search</button>
        </div>
    </div>
   </>
  )
}

export default Navbar