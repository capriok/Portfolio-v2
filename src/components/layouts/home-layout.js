import React, { useState, useEffect } from 'react'

import '../../styles/layouts/home-layout.scss'

import Header from "../common/header"
import Stars from '../stars'

const Layout = ({ children }) => {
  const [In, isIn] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    scrollPosition >= 400 && isIn(false)
    scrollPosition <= 400 && isIn(true)
  }, [scrollPosition])


  return (
    <>
      {In && <Stars />}
      <Header />
      <div className="home-layout">
        <main>{children}</main>
        <footer className="home-footer">© {new Date().getFullYear()}, Kyle Caprio
        </footer>
      </div>
    </>
  )
}

export default Layout
