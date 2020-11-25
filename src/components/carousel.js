import React, { useRef } from 'react'
import Image from 'gatsby-image'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import arrow from '../assets/arrow1.png'

const Carousel = ({ images }) => {

	let ref = useRef()
	const isMobile = window.innerWidth < 500

	const handleOnDragStart = (e) => e.preventDefault()
	const responsive = { 0: { items: 1 }, 600: { items: 2 }, 1024: { items: 2 } };

	return (
		<>
			<AliceCarousel
				ref={(el) => (ref = el)}
				mouseTracking={isMobile ? true : false}
				infinite={true}
				responsive={responsive}
				disableButtonsControls={true}
				disableDotsControls={true}
				items={images.map((image, i) => (
					<div className="image-cont">
						{image.extension === 'jpg'
							? <Image
								key={i}
								className="image"
								fluid={image.childImageSharp.fluid}
								alt={image.publicURL}
								onDragStart={handleOnDragStart} />
							: <img
								className="image"
								key={i}
								src={image.publicURL}
								alt={image.publicURL}
								onDragStart={handleOnDragStart} />
						}
					</div>
				))}
			/>
			<div className="controls">
				<img src={arrow} alt="arrPrev"
					className="slide-btn next"
					onClick={() => ref.slidePrev()} />
				<img src={arrow} alt="arrNext"
					className="slide-btn"
					onClick={() => ref.slideNext()} />
			</div>
		</>
	)
}

export default Carousel
