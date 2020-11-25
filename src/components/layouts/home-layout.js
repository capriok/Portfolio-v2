/*eslint react-hooks/exhaustive-deps: "off"*/
import React, { useState, useEffect } from 'react'
import { useScrollDirection } from "react-hooks-lab";
import '../../styles/layouts.scss'
import '../../styles/footer.scss'

import Header from "../header"
import Stars from '../stars'

const Layout = ({ children }) => {
  const value = v => document.documentElement.style.setProperty('--star-color', `rgba(70, 131, 180, ${v})`)
  let atHome
  if (typeof window !== `undefined`) {
    atHome = window.pathname === '/'
  }

  const [dir, setDir] = useState('top')
  const [pos, setPos] = useState(0)

  const scrollingDir = useScrollDirection();

  useEffect(() => {
    let delay = setTimeout(() => {
      setDir(scrollingDir)
      clearTimeout(delay)
    }, 50)
  }, [pos, scrollingDir])

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (typeof window !== `undefined`) {
        window.removeEventListener('scroll', handleScroll)
      }
    };
  }, []);

  const handleScroll = () => {
    let position
    if (typeof window !== `undefined`) {
      position = window.pageYOffset
    }
    setPos(position)
  };

  useEffect(() => {
    pos > 500 && value(0.3)
    pos <= 500 && value(0.4)
    pos <= 400 && value(0.5)
    pos <= 300 && value(0.6)
    pos <= 200 && value(0.7)
    pos <= 100 && value(0.8)
    !atHome && value(0.3)
  }, [pos])


  return (
    <>
      <Stars />
      <Header dir={dir} pos={pos} atHome={atHome} />
      <div className="home-layout">
        <main>{children}</main>
        <footer className="home-footer">
          <p>Built by Kyle Caprio | {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
