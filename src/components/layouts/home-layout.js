import React from "react"

import Header from "../common/header"

import '../../styles/layouts/home-layout.scss'

const Layout = ({ children }) => {

  return (
    <>
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
