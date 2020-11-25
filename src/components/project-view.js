import React from 'react'
import { Link } from 'gatsby'

import '../styles/project-view.scss'
import Carousel from '../components/carousel'

import { AiFillGithub, AiOutlineHome } from 'react-icons/ai'
import { RiExternalLinkFill } from 'react-icons/ri'

const ProjectView = ({ project }) => {
	return (
		<div className="project-view">
			<h1 className="section-title">{project.title}</h1>
			<div className="carousel-cont">
				<Carousel images={project.images} />
			</div>
			<p className="description">{project.description}</p>
			<hr />
			<h2>The Process</h2>
			<p className="process">{project.writing.process}</p>
			<p className="process">{project.writing.processSub}</p>
			<h2>Take Aways</h2>
			<ul>
				{project.writing.conclusion.map(conclusion => (
					<li>{conclusion}</li>
				))}
			</ul>
			<h2>Technology stack</h2>
			<ul>
				{project.stack.map(stack => (
					<li>{stack}</li>
				))}
			</ul>
			<h2>Resources</h2>
			<ul>
				{project.resources.map(resource => (
					<li><a href={resource}>{resource}</a></li>
				))}
			</ul>
			<h2>Links</h2>
			<div className="links">
				<Link to={`/`} className="link">
					<p><AiOutlineHome /></p>
					<p>Home</p>
				</Link>
				<a className="link"
					href={project.source}
					target="_blank"
					referrerPolicy="no-referrer">
					<p><AiFillGithub /></p>
					<p>Github</p>
				</a>
				<a className="link"
					href={project.demo}
					target="_blank"
					referrerPolicy="no-referrer">
					<p><RiExternalLinkFill /></p>
					<p>Demo</p>
				</a>
			</div>
		</div>
	)
}

export default ProjectView
