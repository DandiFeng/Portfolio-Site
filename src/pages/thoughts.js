import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Content from 'components/Content'

function ThoughtsPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<Content 
				mytext='Recently read & my all-time favourite books'
				myimage='/images/reading.png'
				mypage='/reading'
				subtitle='Book log'
				descr='“Either we shall find what it is we are seeking or at least we shall free ourselves from the persuasion that we know what we do not know.”
						― Plato, The Republic  '
			/>
			<Content 
				mytext='A study on the relationship between personality and job interviews'
				myimage='/images/ihi-drawing.png'
				mypage='/pdf/ihi_paper_-_dandi_feng.pdf'
				subtitle='Research report'
				descr='The Information Horizon Interviews (IHI) is a research method that allows a researcher to obtain a visual representation of information behaviours in context. I conducted 3 interviews to understand how introversion affect and changes job interview strategies.'
			/>
		</Layout>
		
	)
}
ThoughtsPage.propTypes = {
	location: PropTypes.object,
}
export default ThoughtsPage
