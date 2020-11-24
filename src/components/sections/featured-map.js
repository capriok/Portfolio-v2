import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"

import '../../styles/sections/featured-map.scss'

import FeaturedCard from '../common/feature-card'

const ProjectsMap = () => {
  const data = useStaticQuery(graphql`
  {
    allFeaturedJson{
      edges{
        node{
          title
          slug
          description
          tags
          source
          demo
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
    <div className="featured-map-section">
      <h1 className="section-title">My Best Work</h1>
      {data.allFeaturedJson.edges.map(({ node: project }, i) => (
        <FeaturedCard key={i} project={project} i={i} />
      ))}
    </div>
  )
}

export default ProjectsMap
