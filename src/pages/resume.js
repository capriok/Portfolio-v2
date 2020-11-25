import React from 'react'
import Layout from '../components/layouts/resume-layout'
import '../styles/resume.scss'

const Resume = () => {
	let isMobile
	if (window !== undefined) {
		isMobile = window.innerWidth > 500
	}
	return (
		<>
			{isMobile
				? <Layout >
					<div className="resume">
						<object
							data="https://files.kylecaprio.dev/Kyle-Caprio-Resume.pdf"
							type="application/pdf"
							width="100%"
							height="100%"
						>Resume</object>
					</div>
				</Layout>
				: <Layout>
					<div className="resume-mobile">
						<button className="resume-btn" text="View Resume" onClick={() => {
							window.open('https://files.kylecaprio.dev/Kyle-Caprio-Resume.pdf')
						}}>
							View Resume
					</button>
					</div>
				</Layout>
			}
		</>
	)
}

export default Resume