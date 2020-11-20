import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="home-header">
    <div className="head-cont">
      <Link to="/"> <h1 className="title">Kyle Caprio</h1></Link>
      <div className="navs">
        <Link to="/about"><span className="mono">About</span></Link>
        <Link to="/projects"><span className="mono">Skills</span></Link>
        <Link to="/projects"><span className="mono">Work</span></Link>
        <Link to="/resume"><span className="mono">Resume</span></Link>
      </div>
    </div>
  </header>
)


export default Header
