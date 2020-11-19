import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="home-header">
    <div className="head-cont">
      <h1 className="title"><Link to="/">Kyle Caprio</Link></h1>
      <div className="navs">
        <span><Link to="/">Home</Link></span>
        <span><Link to="/about">About Me</Link></span>
        <span><Link to="/projects">Projects</Link></span>
        <span><Link to="/resume">Resume</Link></span>
      </div>
    </div>
  </header>
)


export default Header
