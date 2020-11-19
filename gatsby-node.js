exports.createPages = async ({ actions, graphql, reporter }) => {

	const result = await graphql(`
	{
		allProjectsJson {
			edges {
				node {
					slug
				}
			}
		}
	}
`)

	if (result.error) return reporter.panic('There was an error loading projects.')

	const projects = result.data.allProjectsJson.edges

	projects.map(({ node: project }) => {
		const slug = project.slug

		actions.createPage({
			path: `/${slug}/`,
			component: require.resolve('./src/templates/project-template.js'),
			context: { slug }
		})

	})

}