/*eslint  jsx-a11y/no-noninteractive-element-interactions: "off"*/
/*eslint  jsx-a11y/control-has-associated-label: "off"*/
/*eslint  jsx-a11y/click-events-have-key-events: "off"*/
import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import '../../styles/sections/skills.scss'

import {
	SiJavascript,
	SiTypescript,
	SiCsharp,
	SiJava,
	SiReact,
	SiRedux,
	SiNextDotJs,
	SiNodeDotJs,
	SiApollographql,
	SiSocketDotIo,
	SiMysql,
	SiGraphql,
	SiMicrosoftsqlserver,
	SiMongodb,
	SiMariadbfoundation,
	SiAmazonaws,
	SiMicrosoftazure,
	SiNetlify,
	SiHeroku,
	SiGithub,
	SiNpm,
} from 'react-icons/si';
import {
	DiSass,
	DiDotnet,
	DiPostgresql
} from 'react-icons/di';
import {
	RiGatsbyLine,
	RiHtml5Line,
	RiCss3Fill,
} from 'react-icons/ri';
import {
	GiKoala
} from 'react-icons/gi';
import {
	VscDatabase
} from 'react-icons/vsc';
import {
	GrMysql
} from 'react-icons/gr';

const Skills = () => {
	const [section, setSection] = useState({ b: true })

	const Anim = ({ children }) => (
		<ScrollAnimation
			className="project-anim"
			initiallyVisible={true}
			animateIn="pulse"
			animateOnce={true}
			duration={.5}>
			<li>{children}</li>
		</ScrollAnimation>
	)

	const Tab = ({ children, tab }) => (
		<li
			className={section[tab] ? 'active-Tab' : ''}
			onClick={() => setSection({ [tab]: true })}>
			{children}
		</li>
	)

	const Icons = ({ children, tab }) => (
		<>
			{section[tab] &&
				<section>
					<ul>
						{children}
					</ul>
				</section>
			}
		</>
	)

	return (
		<div>
			<div className="skills-section">
				<h1 className="section-title">Specialties</h1>
				<div className="skills-cont">
					<ul className="navigation">
						<Tab tab="a"><span>Programming </span><span>Languages</span></Tab>
						<Tab tab="b"><span>Front-end </span><span>Technologies</span></Tab>
						<Tab tab="c"><span>Back-end </span><span>Technologies</span></Tab>
						<Tab tab="d"><span>Database </span><span>Technologies</span></Tab>
						<Tab tab="e"><span>Storage and</span><span>Deployment</span></Tab>
					</ul>
					<Icons tab="a">
						<Anim><p><SiJavascript /></p><p>JavaScript</p></Anim>
						<Anim><p><SiTypescript /></p><p>TypeScript</p></Anim>
						<Anim><p><SiCsharp /></p><p>CSharp</p></Anim>
						<Anim><p><SiJava /></p><p>Java</p></Anim>
					</Icons>
					<Icons tab="b">
						<Anim><p><DiDotnet /></p><p>ASP.NET</p></Anim>
						<Anim><p><SiReact /></p><p>React</p></Anim>
						<Anim><p><SiRedux /></p><p>Redux</p></Anim>
						<Anim><p><RiGatsbyLine /></p><p>Gatsby</p></Anim>
						<Anim><p><SiNextDotJs /></p><p>Next</p></Anim>
						<Anim><p><RiHtml5Line /></p><p>HTML</p></Anim>
						<Anim><p><RiCss3Fill /></p><p>CSS</p></Anim>
						<Anim><p><DiSass /></p><p>SASS</p></Anim>
					</Icons>
					<Icons tab="c">
						<Anim><p><SiNodeDotJs /></p><p>Express.js</p></Anim>
						<Anim><p><GiKoala /></p><p>Koa.js</p></Anim>
						<Anim><p><GrMysql /></p><p>SQL</p></Anim>
						<Anim><p><SiGraphql /></p><p>GraphQL</p></Anim>
						<Anim><p><SiApollographql /></p><p>Apollo</p></Anim>
						<Anim><p><SiSocketDotIo /></p><p>Socket.io</p></Anim>
					</Icons>
					<Icons tab="d">
						<Anim><p><SiMysql /></p><p>MySQL</p></Anim>
						<Anim><p><DiPostgresql /></p><p>PostgreSQL</p></Anim>
						<Anim><p><SiMicrosoftsqlserver /></p><p>SQL Server</p></Anim>
						<Anim><p><VscDatabase /></p><p>NoSQL</p></Anim>
						<Anim><p><SiMongodb /></p><p>Mongo DB</p></Anim>
						<Anim><p><SiMariadbfoundation /></p><p>Maria DB</p></Anim>
					</Icons>
					<Icons tab="e">
						<Anim><p><SiAmazonaws /></p><p>AWS</p></Anim>
						<Anim><p><SiMicrosoftazure /></p><p>Azure</p></Anim>
						<Anim><p><SiGithub /></p><p>Github</p></Anim>
						<Anim><p><SiNetlify /></p><p>Netlify</p></Anim>
						<Anim><p><SiNpm /></p><p>NPM</p></Anim>
						<Anim><p><RiGatsbyLine /></p><p>Gatsby Cloud</p></Anim>
						<Anim><p><SiHeroku /></p><p>Heroku</p></Anim>
					</Icons>
				</div>
			</div>
		</div >
	)
}

export default Skills
