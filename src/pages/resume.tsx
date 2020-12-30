import React from 'react'
import Layout from '../components/layouts/resume-layout'
import '../styles/resume.scss'

import Contact from '../components/sections/contact'

// const PDF = process.env.GATSBY_RESUME

const Resume: React.FC = () => {
	let isMobile: boolean
	if (typeof window !== `undefined`) {
		isMobile = window.innerWidth > 500
	}
	return (
		<Layout>
			<div style={{ margin: '50px 0', display: 'flex', justifyContent: 'center' }}>Workin on it</div>
			<Contact />
			{isMobile
				? <div className="resume">
					{/* <object
						data={PDF}
						type="application/pdf"
						width="100%"
						height="100%"
					>Resume</object> */}
				</div>
				: <div className="resume-mobile">
					{/* <button className="resume-btn" text="View Resume" onClick={() => {
						window.open(PDF)
					}}>
						View Resume
					</button> */}
				</div>
			}
		</Layout>
	)
}

export default Resume