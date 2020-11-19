import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import '../styles/project-view.scss'

const ProjectView = ({ project }) => {
	return (
		<div className="project-view">
			<h1>{project.title}</h1>
			<div className="img-cont">
				{project.images.map((image, i) => (
					<Image key={i} fluid={image.childImageSharp.fluid} alt={project.title} />
				))}
			</div>
			<p>{project.description}</p>
			<Link to={project.url}>View project demo</Link><br />
			<Link to={`/`}>Back to home</Link>
		</div>
	)
}

export default ProjectView
