import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layouts/home-layout"
import ProjectView from '../components/project-view'

export const query = graphql`
	query ($slug: String!){
		projectsJson(slug:{eq: $slug}) {
			title
			description
			writing{
				process
				processSub
				conclusion
			}
			stack
			source
			demo
			resources
			images{
				extension
				publicURL
				childImageSharp{
					fluid(maxWidth: 2000, quality: 100){
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`

const ProjectTemplate = ({ data }) => (
	<Layout>
		<ProjectView project={data.projectsJson} />
	</Layout>
)

export default ProjectTemplate	
