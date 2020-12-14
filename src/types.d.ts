interface Project {
	title: string
	slug: string
	description: string
	writing: {
		process: string
		processSub: string
		conclusion: string[]
	}
	stack: string[]
	tags: string[]
	source: string
	demo: string
	thumb: Image
	images: Image[]
	resources: string[]
}

interface Feature {
	title: string
	slug: string
	description: string
	tags: string[]
	source: string
	demo: string
	thumb: Image
}

interface Image {
	childImageSharp: any
	publicURL: string
	extension: string
}

interface ViewState {
	open: boolean
	image: number
}

interface ThemeState {
	bright: boolean
	night: boolean
}

type SetViewState = React.Dispatch<ViewState>
type SetTheme = React.Dispatch<ThemeState>