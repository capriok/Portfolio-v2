/*eslint  jsx-a11y/no-noninteractive-element-interactions: "off"*/
import React, { useRef } from 'react'
import Image from 'gatsby-image'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import '../styles/carousel.scss'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Carousel = ({ images }) => {
	let ref = useRef()

	let isMobile
	if (window !== undefined) {
		isMobile = window.innerWidth > 500
	}
	const handleOnDragStart = (e) => e.preventDefault()
	const responsive = { 0: { items: 1 }, 1024: { items: 2 } };

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
				<button onClick={() => ref.slidePrev()}>
					<MdChevronLeft />
				</button>
				<button onClick={() => ref.slideNext()} >
					<MdChevronRight />
				</button>
			</div>
		</>
	)
}

export default Carousel
