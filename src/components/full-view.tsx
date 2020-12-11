/*eslint  jsx-a11y/no-static-element-interactions: "off"*/
/*eslint  jsx-a11y/click-events-have-key-events: "off"*/
/*eslint  react-hooks/exhaustive-deps: "off"*/
import React, { useEffect } from 'react'
import Img from 'gatsby-image'
import '../styles/full-view.scss'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

interface Props {
	images: Image[]
	view: ViewState
	set: SetViewState
}

const FullView: React.FC<Props> = ({ images, view, set }) => {
	const first = 0
	const last = images.length - 1

	useEffect(() => {
		window.addEventListener('keydown', handleKey)
		return () => {
			window.removeEventListener('keydown', handleKey)
		}
	}, [])

	function handleKey(e: KeyboardEvent): void {
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

	function prevImage(): void {
		set({
			open: true,
			image: view.image === first ? last : view.image - 1
		})
	}

	function nextImage(): void {
		set({
			open: true,
			image: view.image === last ? first : view.image + 1
		})
	}

	function close(): void {
		set({ open: false, image: 0 })
	}

	return (
		<>
			{view.open &&
				<div className="full-view">
					{view.open && <div className="view-clickout" onClick={() => close()} />}
					{images[view.image].extension === 'jpg'
						? <Img
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
