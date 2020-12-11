import React from "react"

import Header from "../header"

import '../../styles/layouts.scss'

const Layout: React.FC = ({ children }) => {
  let atHome
  if (typeof window !== `undefined`) {
    atHome = window.location.pathname === '/'
  }

  return (
    <>
      <Header atHome={atHome} />
      <div className="resume-layout">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
