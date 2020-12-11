/*eslint  jsx-a11y/control-has-associated-label: "off"*/
import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import '../styles/feature-card.scss'

import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkFill } from 'react-icons/ri'

interface Props {
	project: Feature
	index: number
}

const FeaturedCard: React.FC<Props> = ({ project, index }) => (
	<ScrollAnimation
		className="feature-anim"
		initiallyVisible={true}
		animateIn="pulse"
		animateOnce={true}
		duration={.5}>
		<div className={index !== 1 ? "feature-card" : "feature-card inverted"}>
			<div className="thumb-cont">
				<div className="img-cont">
					<Link to={`/${project.slug}`}><div className="overlay"></div></Link>
					<Image fluid={project.thumb.childImageSharp.fluid} alt={project.title} />
				</div>

			</div>
			<div className="content-cont">
				<Link to={`/${project.slug}`}><h5 className="mono">Featured Project</h5></Link>
				<Link to={`/${project.slug}`}><h2>{project.title}</h2></Link>
				<p className="description-cont">{project.description}</p>
				<div className="tags">
					{project.tags.map(t => (
						<span key={t} className="mono">{t}</span>
					))}
				</div>
				<div className="navigation">
					<a href={`${project.source}`} target="_blank" rel="noreferrer"><AiFillGithub /></a>
					<a href={`${project.demo}`} target="_blank" rel="noreferrer"><RiExternalLinkFill /></a>
				</div>
			</div>
		</div>
	</ScrollAnimation>
)

export default FeaturedCard
