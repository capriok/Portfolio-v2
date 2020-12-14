import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"


import { MdExpandMore, MdExpandLess } from 'react-icons/md'

import '../../styles/sections/projects-map.scss'
import ProjectCard from '../project-card'

const ProjectsMap = () => {
  const [pg, setPg] = useState<number>(6)
  const [projects, setProjects] = useState<any[]>([])

  let atHome
  if (typeof window !== `undefined`) {
    atHome = window.location.pathname === '/'
  }
  const data = useStaticQuery(graphql`
  {
    allFeaturedJson{
      edges{
        node{
          slug
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

  useEffect(() => {
    const slugs = data.allFeaturedJson.edges.map(({ node: f }) => f.slug)

    let filteredProjects = [...data.allProjectsJson.edges].filter(({ node: p }) => {
      if (!atHome) return p
      if (slugs.some(s => s === p.slug)) return
      return p
    })
    setProjects(filteredProjects)
  }, [])

  return (
    <div className="projects-map-section">
      <h1 className="section-title">Full Collection</h1>
      <div className="cards-cont">
        {projects.slice(0, atHome ? pg : projects.length).map(({ node: project }, i) => (
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
          disabled={pg >= projects.length}>
          <MdExpandMore />
        </button>
      </div>}
    </div>
  )
}

export default ProjectsMap
