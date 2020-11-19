import React from 'react'
import Layout from '../components/layouts/home-layout'
import ProjectsMap from '../components/projects-map'

const Projects = ({ projects }) => (
	<Layout>
		<ProjectsMap projects={projects} />
	</Layout>
)

export default Projects
