import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Content from 'components/Content'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { spacing } from '@material-ui/system'
import { Divider } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const styles = theme => ({
	contentWrapper:{
		[theme.breakpoints.up('sm')]: {
			minWidth: 375,
		},
		[theme.breakpoints.up('lg')]: {
			minWidth: 936,
		},
		padding: "24px 48px",
	},
	spacing: {
		margin: "16px 0px 16px 0px",
	},
	banner:{
		backgroundColor: "#4e68f2",
		padding: "48px 48px",
	},
	smallGrid:{
		margin:"32px 0px",
		width: '280px',
	},
	divider:{
		border: "1px solid #ffffff"
	},
	whiteTextLarge: {
		color: "#ffffff",
		fontSize: 32,
	},
	whiteTextSmall: {
		color: "#ffffff",
		fontSize: 16,
	},
	yellowText:{
		position: "relative",
  		display: "block",
		color:"#ffd826",
		fontSize: 16,
		fontWeight: 600,
		marginBottom: '10px',
	},
	scalePortrait: {
		width: '100%',
		height: 'auto',
	}
})


function ReferenceBox({ classes, highlight, body}) {
	return (
		<Typography className={classes.spacing} component="p" variant="body1" color="textPrimary" align="left" gutterBottom> 
			<strong>{highlight}</strong><br/>
			{body}
		</Typography>
	)
}


function HomePage({ classes, data, location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<Grid className={classes.contentWrapper} container spacing={3}>
				<Grid item lg ={6} xs={12}>
					<Grid>
						<Typography component="h1" variant="display" color="textPrimary" align="left" gutterBottom>
						Dandi Feng
						</Typography>
					</Grid>
					<Grid>
						<Typography component="subtitle1" className={classes.spacing} variant="subtitle1" color="primary" align="left">
						UX Researcher / Designer
						</Typography>
						<Typography component="p" className={classes.spacing} variant="body1" color="textPrimary" align="left"> 
						Hello! I am a creative, system thinker researching for product and design. 
						</Typography> 
						<Typography component="p" className={classes.spacing} variant="body1" color="textPrimary" align="left"> 
						I work with quantitative research methods to identify macro-trends and employ qualitative research methods to uncover concrete, vertical data. 
						</Typography>
						<Typography component="p" className={classes.spacing} variant="body1" color="textPrimary" align="left"> 
						My work usually spans all aspects of product development. Therefore, I employ a systems approach towards design, simplifying bigger problems into manageable pieces. I run on Agille and tell compelling stories about humans and machines in an authentic voice.
						</Typography>
						<Typography component="p" className={classes.spacing} variant="body1" color="textPrimary" align="left"> 
						When I am not working, I am probably racing on my bikes 🚴‍♀️, road-tripping across North America ⛰️, or aquascaping aquariums 🐠. 
						</Typography>
					</Grid>
				</Grid>
				<Grid item lg={6} xs={12} align='center'>
					<img className={classes.scalePortrait} src="/images/portrait.svg" alt=""/>
				</Grid>
			</Grid>

			<div className={classes.banner} container spacing={3}>
				<span className={classes.whiteTextLarge}> 
				“On a relentless pursuit of perfection for the greater good.” [1]
				</span>
				<Grid className={classes.smallGrid}>
					<Divider className={classes.divider}/>
				</Grid>
				<span className={classes.yellowText}>
				[1] Robert Iger, Former CEO of Disney. 2019. In A Ride of A Lifetime. 
				</span>
				<span className={classes.whiteTextSmall}>
				I resonate deeply with the legendary CEO Bob Iger‘s view on what it means to have a gowth mindset. I believe there is always room to perfect my craft, to achieve greater goals, and to create values for the society we live in from the bottom upwards. 	
				</span>
			</div>

			<Grid className={classes.contentWrapper} container spacing={2}>
				<Grid item lg ={6} xs={12}>
					<Typography className={classes.spacing} component="h2" variant="display" color="primary" align="left" gutterBottom>
					Education
					</Typography>
					<ReferenceBox classes={classes} highlight="M.I. (User Experience Design)" body="University of Toronto, Toronto, ON, Canada."/> 
					<ReferenceBox classes={classes} highlight="Hon BSc" body="University of Toronto, Toronto, ON, Canada."/>
					<ReferenceBox classes={classes} highlight="Advanced Google Analytics" body="Analytics Academy, Google, online."/>
				</Grid>
				<Grid item lg ={5} xs={12}>
					<Typography className={classes.spacing} component="h2" variant="display" color="primary" align="left" gutterBottom>
					In the Community
					</Typography>
					<ReferenceBox classes={classes} highlight="Careers Panel Panelist" body="University of Toronto - Human Factors Interest Group, Toronto, ON, March 2020 "/>
					<ReferenceBox classes={classes} highlight="Speaker for talk on “Designing Digital Solutions in a Multi-Lingual Context”" body="World Information Architecture Day (WIAD). Toronto, ON, February 2020"/>
					<ReferenceBox classes={classes} highlight="New Members Facilitator (Slack Community)" body="UX Research collective. Toronto, ON, 2019"/>
					<ReferenceBox classes={classes} highlight="Presentation on Hospital Indoor Way-finding" body="The 18th Inter-University Workshop (Industrial Engineering & Human Factors Departments UBuffalo, UWaterloo and UofT).Toronto, ON, November 2018."/>
				</Grid>
			</Grid>
		</Layout>
	)
}





HomePage.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}
export default withStyles(styles)(HomePage)
