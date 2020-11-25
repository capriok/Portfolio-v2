import React from 'react'
import Layout from '../components/layouts/home-layout'
import ProjectsMap from '../components/sections/projects-map'
import SEO from '../components/seo'

const Projects = ({ projects }) => (
	<Layout>
		<SEO title="Work" />
		<ProjectsMap projects={projects} />
	</Layout>
)

export default Projects
