import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const ProjectCard = ({ project }) => {
	console.log(project.thumb.childImageSharp.fluid);
	return (
		<div className="project-card">
			<p>{project.title}</p>
			<p>{project.description}</p>
			<div className="img-cont">
				<Image fluid={project.thumb.childImageSharp.fluid} alt={project.title} />
			</div>
			<Link to={`/${project.slug}`} >{project.title}</Link>
		</div>
	)
}

export default ProjectCard
