import React from 'react'
import Layout from '../components/layouts/resume-layout'
import '../styles/resume.scss'

import Contact from '../components/sections/contact'

// const FILE = 'https://files.kylecaprio.dev/Kyle-Caprio-Resume.pdf'

const Resume = () => {
	let isMobile
	if (typeof window !== `undefined`) {
		isMobile = window.innerWidth > 500
	}
	return (
		<Layout>
			<br />
			<br />
			<br />
			<center>Workin on it.</center>
			<br />
			<br />
			<br />
			<Contact />
			{isMobile
				? <div className="resume">
					{/* <object
						data={FILE}
						type="application/pdf"
						width="100%"
						height="100%"
					>Resume</object> */}
				</div>
				: <div className="resume-mobile">
					{/* <button className="resume-btn" text="View Resume" onClick={() => {
						window.open(FILE)
					}}>
						View Resume
					</button> */}
				</div>
			}
		</Layout>
	)
}

export default Resume