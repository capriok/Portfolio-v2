import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layouts/home-layout"
import ProjectView from '../components/project-view'

export const query = graphql`
	query ($slug: String!){
		projectsJson(slug:{eq: $slug}) {
			title
			description
			source
			images{
				childImageSharp{
					fluid{
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`

const ProjectTemplate = ({ data }) => {
	const project = data.projectsJson
	return (
		<Layout>
			<ProjectView project={project} />
		</Layout>
	)
}

export default ProjectTemplate	
