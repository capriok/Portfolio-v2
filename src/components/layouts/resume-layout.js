import React from "react"

import Header from "../common/header"

import '../../styles/layouts/resume-layout.scss'

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div className="resume-layout">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
