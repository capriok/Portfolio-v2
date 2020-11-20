import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const ProjectCard = ({ project }) => {
	return (
		<div className="project-card">
			<div className="thumb-cont">
				<div className="img-cont">
					<Image fluid={project.thumb.childImageSharp.fluid} alt={project.title} />
				</div>
			</div>
			<div className="content-cont">
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<p><Link to={`/${project.slug}`}>See In Depth</Link></p>
			</div>
		</div>
	)
}

export default ProjectCard
