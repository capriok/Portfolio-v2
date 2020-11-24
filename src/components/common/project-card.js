import React from 'react'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkFill } from 'react-icons/ri'

const ProjectCard = ({ project }) => {
	return (
		<ScrollAnimation
			className="project-anim"
			initiallyVisible={true}
			animateIn="pulse"
			duration={.5}>
			<div className="project-card">
				<div className="header">
					<div className="folder-closed"><Link to={`/${project.slug}`}><AiOutlineFolder /></Link></div>
					<div className="folder-open"><Link to={`/${project.slug}`}><AiOutlineFolderOpen /></Link></div>
					<Link to={`/${project.slug}`}><h3>{project.title}</h3></Link>
				</div>
				<div className="description">
					<p>{project.description}</p>
				</div>
				<div className="navigation">
					<a href={`${project.source}`} target="_blank"><AiFillGithub /></a>
					<a href={`${project.demo}`} target="_blank"><RiExternalLinkFill /></a>
				</div>
			</div>
		</ScrollAnimation>
	)
}

export default ProjectCard
