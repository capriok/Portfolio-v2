import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import '../../styles/sections/featured-map.scss'

import FeaturedCard from '../feature-card'

const ProjectsMap: React.FC = () => {
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
      <h1 className="section-title">Featured Collection</h1>
      {data.allFeaturedJson.edges.map(({ node: project }, i: number) => (
        <FeaturedCard key={i} project={project} index={i} />
      ))}
    </div>
  )
}

export default ProjectsMap
