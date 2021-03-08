import React from 'react'
import Layout from '../components/layouts/resume-layout'
import '../styles/resume.scss'

const PDF = process.env.GATSBY_RESUME

const Resume: React.FC = () => (
	<Layout>
		<div className="resume">
			<object
				data={PDF}
				type="application/pdf"
				width="100%"
				height="100%">
				Resume
			</object>
		</div>
		<div className="resume-mobile">
			<button className="resume-btn" onClick={() => window.open(PDF)}>
				View Resume
			</button>
		</div>
	</Layout>
)

export default Resume