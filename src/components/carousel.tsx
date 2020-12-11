/*eslint  jsx-a11y/no-noninteractive-element-interactions: "off"*/
/*eslint  jsx-a11y/no-static-element-interactions: "off"*/
/*eslint  jsx-a11y/click-events-have-key-events: "off"*/
import React, { useRef } from 'react'
import Img from 'gatsby-image'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import '../styles/carousel.scss'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

interface Props {
	images: Image[]
	set: SetViewState
}

const Carousel: React.FC<Props> = ({ images, set }) => {
	let ref: any = useRef()

	let isMobile
	if (typeof window !== `undefined`) {
		isMobile = window.innerWidth < 500
	}
	const handleOnDragStart = (e) => e.preventDefault()
	const responsive = { 0: { items: 1 }, 1024: { items: 2 } }

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
					<div className="image-cont"
						onDragStart={handleOnDragStart}
						onClick={() => {
							!isMobile && set({ open: true, image: i })
						}}>
						{image.extension === 'jpg'
							? <Img
								key={i}
								className="image"
								fluid={image.childImageSharp.fluid}
								alt={image.publicURL} />
							: <img
								className="image"
								key={i}
								src={image.publicURL}
								alt={image.publicURL} />
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
