import React from 'react'
import '../../styles/sections/contact.scss'
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
	return (
		<div className="contact-section">
			<div className="contact-cont">
				<h1>Feel free to reach out.</h1>
				<p>Direct Email</p>
				<a href="mailto:capriodev@gmail.com" target="_blank" referrerPolicy="np-referrer">
					<button><HiOutlineMail /></button>
				</a>
			</div>
		</div>
	)
}

export default Contact
