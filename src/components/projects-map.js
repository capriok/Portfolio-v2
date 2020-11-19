import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import ProjectCard from './project-card'

import '../styles/projects-map.scss'

const ProjectsMap = () => {
  const data = useStaticQuery(graphql`
  {
    allProjectsJson{
      edges{
        node{
          title
          slug
          description
          thumb {
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`)

  return (
    <div className="projects-map">
      {data.allProjectsJson.edges.map(({ node: project }, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  )
}

export default ProjectsMap
