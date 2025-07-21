import React from 'react'
import './navbar.css'
function navbar() {
  return (
    <>
   <nav className="navbar">
      <div className="navbar-logo">CodeReviewer</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="profile">Profile</a></li>
        <li><a href="login">login</a></li>
      </ul>
    </nav>
    </>
  )
}

export default navbar