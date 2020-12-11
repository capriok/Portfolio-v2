import React from 'react'
import Layout from '../components/layouts/home-layout'
import ProjectsMap from '../components/sections/projects-map'
import SEO from '../components/seo'

import '../styles/index.scss'

const Work: React.FC = () => (
	<Layout>
		<SEO title="Work" />
		<div className="work-route">
			<ProjectsMap />
		</div>
	</Layout>
)

export default Work
