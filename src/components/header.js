import React from "react"
import { Link } from "gatsby"

import '../styles/header.scss'

const Header = ({ dir, pos, atHome }) => {

  const headerClass = () => {
    let CLASS = 'home-header'
    if (pos >= 300) CLASS += ' fill'
    if (!atHome && pos > 0) CLASS += ' fill'
    switch (dir) {
      case 'down':
        return CLASS += ' hide'
      case 'up':
        return CLASS += ' show'
      case 'top':
        return CLASS
      default:
        break;
    }
    return CLASS
  }

  return (
    <header className={headerClass()}>
      <div className="head-cont">
        <Link to="/"> <h1 className="title">KC</h1></Link>
        <div className="navs">
          <Link to="/about"><span className="mono">About</span></Link>
          <Link to="/work"><span className="mono">Work</span></Link>
          <a href="mailto:capriodev@gmail.com" target="_blank" rel="noreferrer">
            <span className="mono">Contact</span>
          </a>
          <Link to="/resume"><span className="mono">Resume</span></Link>
        </div>
      </div>
    </header>
  )
}


export default Header
