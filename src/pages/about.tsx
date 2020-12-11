import React from 'react'

import Layout from '../components/layouts/home-layout'
import Contact from '../components/sections/contact'
import SEO from '../components/seo'

import '../styles/about.scss'

const About: React.FC = () => (
  <Layout>
    <SEO title="About Me" />
    <div className="about-route">
      <h1 className="section-title">About me</h1>
      <div className="about-cont">
        <h2>Background</h2>
        <p className="info">
          My name is Kyle. I'm a self taught software developer turned college student based Arizona.
          I found my passion for learning computer sciences at the age of 16 and have been programming ever since.
          I've dedicated countless hours to learning and expanding this passion.
          Being able to effectively teach myself is something I am most proud of about myself.
          I have developed an avid work ethic and disciplinary skills along my journey in life.
          Strong creative and critical thinking skills have helped me to excel in areas
          like web development as well as functional and object oriented programming.
          In free my time, I immerse myself in learning new programming technologies and how to better myself as a programmer
          but also find joy with meditaion, music, hiking, and spending time under the sun.
        </p>
        <h2>Education</h2>
        <ul>
          <li>
            <p>Associate Degree in Web Programming</p>
            <p>Deans List, 4.0 GPA</p>
          </li>
          <li>
            <p>High School Diploma</p>
            <p>Honor Roll, 3.7 GPA</p>
          </li>
        </ul>
        <h2 >Experience</h2>
        <ul>
          <li>
            <p>Under 1 year</p>
            <p>Distributing web graphics and designs to various clients.</p>
            <p>Designing, building and maintaining client web applications.</p>
          </li>
          <li>
            <p>Over 2 years</p>
            <p>Contributing to open source user authentication application.</p>
          </li>
        </ul>
      </div>
      <Contact />
    </div>
  </Layout>
)

export default About
