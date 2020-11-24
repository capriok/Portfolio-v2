import React from 'react'
import { Link } from 'gatsby'

import '../styles/project-view.scss'
import Carousel from '../components/common/carousel'

const ProjectView = ({ project }) => {
	return (
		<div className="project-view">
			<h1>{project.title}</h1>
			<div className="carousel-cont">
				<Carousel images={project.images} />
			</div>
			<p>{project.description}</p>
			<Link to={project.demo}>View project demo</Link><br />
			<Link to={`/`}>Back to home</Link>
		</div>
	)
}

export default ProjectView
