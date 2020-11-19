import React from "react"

import Layout from "../components/layouts/home-layout"
import SEO from "../components/seo"
import ProjectsMap from '../components/projects-map'

import "../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Intro</h1>
      <p>Sick software developer guy</p>
      <h1>Specialties</h1>
      <p>JavaScript, React, C#, ASP.NET Core</p>
      <h1>Projects</h1>
      <ProjectsMap />
      <h1>Contact</h1>
      <p>Reach out by email</p>
    </Layout>
  )
}

export default IndexPage