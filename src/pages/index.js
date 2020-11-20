import React from "react"

import Layout from "../components/layouts/home-layout"
import SEO from "../components/seo"
import Introduction from '../components/intro'
import Skills from '../components/skills'
import FeaturedMap from '../components/featured-map'
import Contact from '../components/contact'

import "../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Introduction />
      <Skills />
      <FeaturedMap />
      <Contact />
    </Layout>
  )
}

export default IndexPage