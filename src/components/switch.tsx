import React, { useEffect, Dispatch } from 'react'
import '../styles/switch.scss'
import { isEqual } from 'lodash'

import { IoMdPartlySunny } from 'react-icons/io'
import { IoMdCloudyNight } from 'react-icons/io'

interface Props {
	theme: ThemeState
	setTheme: SetTheme
}

const Switch: React.FC<Props> = ({ theme, setTheme }) => {

	const BRIGHT = { bright: true, night: false }
	const NIGHT = { bright: false, night: true }

	function set(MODE: ThemeState) {
		setTheme(MODE)
		localStorage.setItem('theme-settings', JSON.stringify(MODE))
	}

	function brightMode() {
		document.documentElement.style.setProperty('--app-background', '#fff')
		document.documentElement.style.setProperty('--app-alt-bg', '#ebebeb')
		document.documentElement.style.setProperty('--app-text', '#000')
	}
	function nightMode() {
		document.documentElement.style.setProperty('--app-background', '#000')
		document.documentElement.style.setProperty('--app-alt-bg', '#161616')
		document.documentElement.style.setProperty('--app-text', '#fff')
	}

	useEffect(() => {
		const TS = localStorage.getItem('theme-settings')
		if (TS) {
			isEqual(theme, JSON.parse(TS))
				? theme.bright
					? brightMode()
					: nightMode()
				: setTheme(JSON.parse(TS))
		}
	}, [theme])

	return (
		<>
			<div className="switch">
				{theme.bright && <p onClick={() => set(NIGHT)}><IoMdPartlySunny /></p>}
				{theme.night && <p onClick={() => set(BRIGHT)}><IoMdCloudyNight /></p>}
			</div>
		</>
	)
}

export default Switch