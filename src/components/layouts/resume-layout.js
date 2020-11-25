import React from "react"

import Header from "../header"

import '../../styles/layouts.scss'

const Layout = ({ location, children }) => {
  console.log(location);
  const atHome = location.pathname === '/'

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
