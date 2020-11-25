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
			{project.writing.process && <>
				<h2>The Process</h2>
				<p className="process">{project.writing.process}</p>
				<p className="process">{project.writing.processSub}</p>
			</>}
			<h2>Take Aways</h2>
			<ul>
				{project.writing.conclusion.map((conclusion, i) => (
					<li key={i}>{conclusion}</li>
				))}
			</ul>
			<h2>Technology stack</h2>
			<ul>
				{project.stack.map((stack, i) => (
					<li key={i}>{stack}</li>
				))}
			</ul>
			{project.resources.length > 0 && <>
				<h2>Resources</h2>
				<ul>
					{project.resources.map((resource, i) => (
						<li key={i}>
							<a href={resource} target="_blank" rel="noreferrer">
								{resource}
							</a>
						</li>
					))}
				</ul>
			</>}
			<h2>Links</h2>
			<div className="links">
				<Link to={`/`} className="link">
					<p><AiOutlineHome /></p>
					<p>Home</p>
				</Link>
				<a className="link" href={project.source} target="_blank" rel="noreferrer">
					<p><AiFillGithub /></p>
					<p>Github</p>
				</a>
				<a className="link" href={project.demo} target="_blank" rel="noreferrer">
					<p><RiExternalLinkFill /></p>
					<p>Demo</p>
				</a>
			</div>
		</div>
	)
}

export default ProjectView
