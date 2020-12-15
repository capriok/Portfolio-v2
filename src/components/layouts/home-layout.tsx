/*eslint react-hooks/exhaustive-deps: "off"*/
import React, { useState, useEffect } from 'react'
import { useScrollDirection } from "react-hooks-lab";
import '../../styles/layouts.scss'
import '../../styles/footer.scss'

import Header from "../header"
import Switch from '../switch'
import Stars from '../stars'

const Layout: React.FC = ({ children }) => {
  const [dir, setDir] = useState<string>('top')
  const [pos, setPos] = useState<number>(0)

  const [theme, setTheme] = useState<ThemeState>({ bright: true, night: false })

  const scrollingDir = useScrollDirection()

  const value = v => {
    theme.bright
      ? document.documentElement.style.setProperty('--star-color', `rgba(70, 131, 180, ${v})`)
      : document.documentElement.style.setProperty('--star-color', `rgba(255, 255, 255, ${v})`)
  }
  let atHome
  let isMobile
  if (typeof window !== `undefined`) {
    atHome = window.location.pathname === '/'
    isMobile = window.innerWidth < 550
  }

  useEffect(() => {
    let delay = setTimeout(() => {
      setDir(scrollingDir)
      clearTimeout(delay)
    }, 50)
  }, [pos, scrollingDir])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    pos > 500 && value(0.3)
    pos <= 500 && value(0.4)
    pos <= 400 && value(0.5)
    pos <= 300 && value(0.6)
    pos <= 200 && value(0.7)
    pos <= 100 && value(0.8)
    !atHome && value(0.3)
  }, [pos, theme])

  function handleScroll(): void {
    let position
    if (typeof window !== `undefined`) {
      position = window.pageYOffset
    }
    setPos(position)
  }

  return (
    <>
      <Switch isMobile={isMobile} theme={theme} setTheme={setTheme} />
      <Stars />
      <Header dir={dir} pos={pos} atHome={atHome} isMobile={isMobile} />
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
