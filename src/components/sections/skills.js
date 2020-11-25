import React, { useState } from 'react'

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

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Skills = () => {
	const [section, setSection] = useState({ b: true })

	const Anim = ({ children }) => (
		<ScrollAnimation className="project-anim" initiallyVisible={true} animateIn="pulse" duration={.5}>
			{children}
		</ScrollAnimation>
	)

	return (
		<div>
			<div className="skills-section">
				<h1 className="section-title">Specialties</h1>
				<div className="skills-cont">
					<ul className="navigation">
						<li className={section.a ? 'active-nav' : ''} onClick={() => setSection({ a: true })}>Programming Languages</li>
						<li className={section.b ? 'active-nav' : ''} onClick={() => setSection({ b: true })}>Front-end Technologies</li>
						<li className={section.c ? 'active-nav' : ''} onClick={() => setSection({ c: true })}>Back-end Technologies</li>
						<li className={section.d ? 'active-nav' : ''} onClick={() => setSection({ d: true })}>Database Infrastructure</li>
						<li className={section.e ? 'active-nav' : ''} onClick={() => setSection({ e: true })}>Storage and Deployment</li>
					</ul>
					{section.a && <section>
						<ul>
							<Anim><li><p><SiJavascript /></p><p>JavaScript</p></li></Anim>
							<Anim><li><p><SiTypescript /></p><p>TypeScript</p></li></Anim>
							<Anim><li><p><SiCsharp /></p><p>CSharp</p></li></Anim>
							<Anim><li><p><SiJava /></p><p>Java</p></li></Anim>
						</ul>
					</section>}

					{section.b && <section>
						<ul>
							<Anim><li><p><DiDotnet /></p><p>ASP.NET</p></li></Anim>
							<Anim><li><p><SiReact /></p><p>React</p></li></Anim>
							<Anim><li><p><SiRedux /></p><p>Redux</p></li></Anim>
							<Anim><li><p><RiGatsbyLine /></p><p>Gatsby</p></li></Anim>
							<Anim><li><p><SiNextDotJs /></p><p>Next</p></li></Anim>
							<Anim><li><p><RiHtml5Line /></p><p>HTML</p></li></Anim>
							<Anim><li><p><RiCss3Fill /></p><p>CSS</p></li></Anim>
							<Anim><li><p><DiSass /></p><p>SASS</p></li></Anim>
						</ul>
					</section>}

					{section.c && <section>
						<ul>
							<Anim><li><p><SiNodeDotJs /></p><p>Express.js</p></li></Anim>
							<Anim><li><p><GiKoala /></p><p>Koa.js</p></li></Anim>
							<Anim><li><p><GrMysql /></p><p>SQL</p></li></Anim>
							<Anim><li><p><SiApollographql /></p><p>Apollo</p></li></Anim>
							<Anim><li><p><SiSocketDotIo /></p><p>Socket.io</p></li></Anim>
						</ul>
					</section>}

					{section.d && <section>
						<ul>
							<Anim><li><p><SiMysql /></p><p>MySQL</p></li></Anim>
							<Anim><li><p><DiPostgresql /></p><p>PostgreSQL</p></li></Anim>
							<Anim><li><p><SiGraphql /></p><p>GraphQL</p></li></Anim>
							<Anim><li><p><SiMicrosoftsqlserver /></p><p>SQL Server</p></li></Anim>
							<Anim><li><p><VscDatabase /></p><p>NoSQL</p></li></Anim>
							<Anim><li><p><SiMongodb /></p><p>Mongo DB</p></li></Anim>
							<Anim><li><p><SiMariadbfoundation /></p><p>Maria DB</p></li></Anim>
						</ul>
					</section>}

					{section.e && <section>
						<ul>
							<Anim><li><p><SiAmazonaws /></p><p>AWS</p></li></Anim>
							<Anim><li><p><SiMicrosoftazure /></p><p>Azure</p></li></Anim>
							<Anim><li><p><SiGithub /></p><p>Github</p></li></Anim>
							<Anim><li><p><SiNetlify /></p><p>Netlify</p></li></Anim>
							<Anim><li><p><SiNpm /></p><p>NPM</p></li></Anim>
							<Anim><li><p><RiGatsbyLine /></p><p>Gatsby Cloud</p></li></Anim>
							<Anim><li><p><SiHeroku /></p><p>Heroku</p></li></Anim>
						</ul>
					</section>}
				</div>
			</div>
		</div >
	)
}

export default Skills
