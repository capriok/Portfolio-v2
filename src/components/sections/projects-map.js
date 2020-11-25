import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"


import { MdExpandMore, MdExpandLess } from 'react-icons/md'

import '../../styles/sections/projects-map.scss'
import ProjectCard from '../project-card'

const ProjectsMap = () => {
  let atHome
  if (typeof window !== `undefined`) {
    atHome = window.pathname === '/'
  }
  const data = useStaticQuery(graphql`
  {
    allFeaturedJson{
      edges{
        node{
          title
        }
      }
    }
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

  const filteredFeatures = [...data.allProjectsJson.edges].filter(({ node: p }) => {
    if (!atHome) return p
    const feat = data.allFeaturedJson.edges
    return p.title !== feat[0].node.title
      && p.title !== feat[1].node.title
      && p.title !== feat[2].node.title
  })

  return (
    <div className="projects-map-section">
      <h1 className="section-title">Full Collection</h1>
      <div className="cards-cont">
        {filteredFeatures.slice(0, atHome ? pg : filteredFeatures.length).map(({ node: project }, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      {atHome && <div className="button-cont">
        <button
          onClick={() => setPg(pg - 3)}
          disabled={pg === 6}>
          <MdExpandLess />
        </button>
        <button
          onClick={() => setPg(pg + 3)}
          disabled={pg >= filteredFeatures.length}>
          <MdExpandMore />
        </button>
      </div>}
    </div>
  )
}

export default ProjectsMap
