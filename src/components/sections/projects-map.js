import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"


import { MdExpandMore, MdExpandLess } from 'react-icons/md'

import '../../styles/sections/projects-map.scss'
import ProjectCard from '../common/project-card'

const ProjectsMap = () => {
  const data = useStaticQuery(graphql`
  {
    allProjectsJson{
      edges{
        node{
          title
          slug
          description
          demo
          source
        }
      }
    }
  }
`)

  const [pg, setPg] = useState(6)

  return (
    <div className="projects-map-section">
      <h1 className="section-title">All of my work</h1>
      <div className="cards-cont">
        {data.allProjectsJson.edges.slice(0, pg).map(({ node: project }, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      {pg <= data.allProjectsJson.edges.length
        ? <button onClick={() => setPg(pg + 3)}><MdExpandMore /></button>
        : <button onClick={() => setPg(6)}><MdExpandLess /></button>
      }
    </div>
  )
}

export default ProjectsMap
