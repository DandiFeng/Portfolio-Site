import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Layout from 'components/Layout'
import Card from 'components/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/typography'

const styles = theme => ({
	contentWrapper: {
		[theme.breakpoints.down('sm')]: {
			minWidth: 0,
			padding: "24px 16px",
		},
		[theme.breakpoints.between('sm', 'lg')]: {
			padding: "24px 24px",
		},
		[theme.breakpoints.up('lg')]: {
			minWidth: 936,
			padding: "24px 48px",
		},
	}, 
	spacing: {
		marginbBottom: '48px',
	  }
}) 

function reading({ location, classes }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<div className={classes.contentWrapper}>
				<Typography component="h2" variant="display" color="primary" align="left" gutterBottom>
					Reading Next
				</Typography>
				<Grid container alignItems="top">
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/how_to_speak_machine.jpg"
							bookTitle="How to Speak Machine: Computational Thinking for the Rest of Us"
							bookCategory="Tech and Design"
						/>
					</Grid>
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/research_practice.jpg"
							bookTitle="Research Practice:Perspectives from UX Researchers in A Changing Field"
							bookCategory="Research Methods"
						/>
					</Grid>
					
				</Grid>
				<br/>
				<br/>
				<Typography component="h2" variant="display" color="primary" align="left" gutterBottom>
					Favourite and Recent Reads
				</Typography>
				<Grid container alignItems="top">
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/deep_work.jpg"
							bookTitle="Deep Work"
							bookCategory="Productivity"
						/>
					</Grid>
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/taking_the_stage.jpg"
							bookTitle="Taking the Stage"
							bookCategory="Social Awareness"
						/>
					</Grid>
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/ride_of_a_lifetime.jpg"
							bookTitle="The Ride of A Lifetime"
							bookCategory="Leadership"
						/>
					</Grid>
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/innovators_dilemma.jpg"
							bookTitle="The Innovator's Dilemma"
							bookCategory="Leadership"
						/>
					</Grid>
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/prediction_machine.jpg"
							bookTitle="Prediction Machines"
							bookCategory="Economics"
						/>
					</Grid>
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/start_with_why.jpg"
							bookTitle="Start With Why"
							bookCategory="Leadership"
						/>
					</Grid>
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/originals.jpg"
							bookTitle="Originals: How Non-Conformists Move the World"
							bookCategory="Entrepreneurship"
						/>
					</Grid>
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/a-concise-introduction-to-mixed-methods-research.jpg"
							bookTitle="A Concise Introduction to Mixed Methods Research"
							bookCategory="Research Methods"
						/>
					</Grid>
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/value_prop_design.jpg"
							bookTitle="Value Proposition Design"
							bookCategory="Design"
						/>
					</Grid>
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/thinking_fast_and_slow.jpg"
							bookTitle="Thinking Fast and Slow"
							bookCategory="Problem-solving"
						/>
					</Grid>
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/statistics_using_r.jpg"
							bookTitle="Discovering Statistics Using R"
							bookCategory="Research Methods"
						/>
					</Grid>
					<Grid className={classes.spacing} item lg={4} sm={12}>
						<Card 
							bookCover="/books/quiet.jpg"
							bookTitle="Quiet"
							bookCategory="Personality"
						/>
					</Grid>
				</Grid>
			</div>
		</Layout>
		
	)
}
reading.propTypes = {
	location: PropTypes.object,
}
export default withStyles (styles)(reading)