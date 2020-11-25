import React from 'react'

import Layout from '../components/layouts/home-layout'
import SEO from '../components/seo'

import '../styles/about.scss'

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <div className="about-route">
      <h1 className="section-title">About me</h1>
      <div className="about-cont">
        <h2 className="section-title">Background</h2>
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
        <h2 className="section-title">Specialities</h2>
        <ul>
          <li><span className="type">Programming Languages:</span><span> JavaScript, TypeScript, C#, ASP.NET Core and Java</span></li>
          <li><span className="type">Front-End Technologies:</span><span> React.js, Redux, Gatsy.js, Next.js, HTML5, CSS and SASS</span></li>
          <li><span className="type">Back-End Technologies:</span><span> SQL, Express.js, Koa.js and Socket.io</span></li>
          <li><span className="type">Databases:</span><span> GraphQL, MySQL, NoSQL, PostgreSQL, MS SQL Server and MongoDB</span></li>
          <li><span className="type">Library use:</span><span> Axios, Lodash and Formik</span></li>
          <li><span className="type">Cloud Platforms:</span><span> AWS, Netlify, Gatsby Cloud and Heroku</span></li>
          <li><span className="type">UI Development:</span><span> Figma and Adobe XD</span></li>
          <li><span className="type">Tools:</span><span> Git, NPM, Webpack, Babel, Lodash, JWT, CORS, Serverless-http and Postman</span></li>
        </ul>
        <h2 className="section-title">Education</h2>
        <ul>
          <li><span>Associate Degree in Web Programming - Deans List, 4.0 GPA</span></li>
          <li><span>High School Diploma - Honors List, 3.7 GPA</span></li>
        </ul>
        <h2 className="section-title">Experience</h2>
        <ul>
          <li><span>&lt; 1 year, distributing web graphics and design to clientele.</span></li>
          <li><span>&gt; 1 year, designing, building and maintaining client web applications.</span></li>
          <li><span>&gt; 2 years, contributing to open source user authentication application.</span></li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default About
