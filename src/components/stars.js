import React, { useState, useEffect } from 'react'
import '../styles/stars.scss'

const Stars = () => {

	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="stars-cont">
			<div className="stars">
				<div className="small"></div>
				<div className="medium"></div>
				<div className="big"></div>
			</div>
		</div>
	)
}

export default Stars
