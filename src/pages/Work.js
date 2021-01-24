import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Content from 'components/Content'

function ProjectPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<Content 				
				mytext='APPR: Customer Service Hub to Enhance Post-travel Experiences'
				myimage="/images/asset-porter.png"
				mypage='porter'
				subtitle='Porter Airlines'
				descr='Led the design development and usability testing of the new customer service hub, claims platform, and customer service related web forms. Delivered high quality information design, created intuitive flow, and digitalized internal teams’ manual workflow.'
			/> 
			<Content
				mytext='#HowsMyFlattening: A Full-Fledged Ontario COVID-19 Data Visualization Hub'
				myimage="/images/asset-HMF.png"
				mypage='/howsmyflattening'
				subtitle='#HowsMyFlattening'
				descr='Developed a design system that streamlines design and front-end development. Greatly improved information architecture, information design, understandability, and visual design of the website, published data visualizations and data dashboard.'
			/>
		</Layout>
	)
}

/* 			<Content
				mytext='Improve Indoor Navigation Experience in Hospitals'
				myimage="/images/asset-wayfinding-illustration.png"
				mypage='/wayfinding.js'
				subtitle='University Health Network  |  2018'
				descr='Gathered design requirements through participatory design for the first standalone outpatient renal dialysis unit in the NARP program, which serves over 4500 patients, including over 900 dialysis patients from northern and central Alberta.'
			/> */
			
ProjectPage.propTypes = {
	location: PropTypes.object,
}
export default ProjectPage
