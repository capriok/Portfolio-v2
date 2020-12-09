/*eslint  jsx-a11y/no-static-element-interactions: "off"*/
/*eslint  jsx-a11y/click-events-have-key-events: "off"*/
/*eslint  react-hooks/exhaustive-deps: "off"*/
import React, { useEffect, useLayoutEffect } from 'react'
import Image from 'gatsby-image'
import '../styles/full-view.scss'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const FullView = ({ images, view, set }) => {
	const first = 0
	const last = images.length - 1

	useLayoutEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => document.body.style.overflow = 'initial'
	}, [])

	useEffect(() => {
		window.addEventListener('keydown', handleKey)
		return () => {
			window.removeEventListener('keydown', handleKey)
		}
	}, [])

	function handleKey(e) {
		switch (e.key) {
			case 'ArrowLeft':
				prevImage()
				break;
			case 'ArrowRight':
				nextImage()
				break;
			case 'Escape':
				close()
				break;
			default:
				break;
		}
	}

	function prevImage() {
		set(v => {
			return { open: true, image: v.image === first ? last : v.image - 1 }
		})
	}

	function nextImage() {
		set(v => {
			return { open: true, image: v.image === last ? first : v.image + 1 }
		})
	}

	function close() {
		set({ open: false, image: null })
	}

	return (
		<>
			{view.open &&
				<div className="full-view">
					{view.open && <div className="view-clickout" onClick={() => close()} />}
					{images[view.image].extension === 'jpg'
						? <Image
							className="image"
							fadeIn={true}
							fluid={images[view.image].childImageSharp.fluid}
							alt={images[view.image].publicURL} />
						: <img
							className="image"
							src={images[view.image].publicURL}
							alt={images[view.image].publicURL} />
					}
					<div className="controls">
						<button onClick={() => prevImage()}>
							<MdChevronLeft />
						</button>
						<button onClick={() => nextImage()}>
							<MdChevronRight />
						</button>
					</div>
				</div>
			}
		</>
	)
}

export default FullView
