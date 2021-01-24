import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Layout from 'components/Layout'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import TopBanner from 'components/TopBanner'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


const styles = theme => ({
	contentWrapper: {
		[theme.breakpoints.down('sm')]: {
			minWidth: 0,
			padding: "16px 16px",
		},
		[theme.breakpoints.between('sm', 'lg')]: {
			padding: "16px 24px",
		},
		[theme.breakpoints.up('lg')]: {
			minWidth: 936,
			padding: "16px 48px",
		},
	},
	hspacing: {
		margin: "32px 0px 0px 0px",
	},
	pspacing: {
		margin: "8px 0px 0px 0px",
	},
	bannerImage: {
		backgroundImage: "url('/images/hmf-bg.png')",
		height: "300px",
		backgroundRepeat: 'no-repeat',
  		backgroundSize: 'contain cover',
	},
	decorativeText: {
		color: '#4E68F2',
		fontSize: "1rem",
		fontWeight: "550",
		marginRight: "16px",
		lineHeight: '1.8',
	},
	vl: {
		borderLeft: "2px solid #4E68F2",
		height: '90px',
	},
	separator: {
		marginLeft: '24px',
	},
	separator2: {
		margin: "24px 0px",
	},
	timeline: {
		width: "100%",
		height: "auto",
	},
	divider: {
		border: '1px solid #c4c4c4',
		margin: '16px 0px',
	},
	graph: {
		width: "350px",
		height: 'auto',
		margin: "16px 0px",
	},
	containerBg:{
		backgroundColor: "#E6EAF0",
		[theme.breakpoints.down('sm')]: {
			minWidth: 0,
			padding: "16px 16px",
		},
		[theme.breakpoints.between('sm', 'lg')]: {
			padding: "16px 24px",
		},
		[theme.breakpoints.up('lg')]: {
			minWidth: 936,
			padding: "16px 48px",
		},
	},
	listFont:{
		fontSize: '16px',
		lineHeight: '1.5',
	},
	styleguide:{
		width: "100%",
		height: 'auto',
	},
	graphBox: {
		width: '100%',	
		height: 'auto',
	},
	dashboard: {
		maxWidth:"1400px",
		width:'100%',
		height:'auto',
	},
	specialBox: {
		borderLeft: '2px solid #4E68F2',
		paddingLeft: '24px',
		lineHeight: 1.8,
		marginTop:'24px',
	},
	whiteLine: {
		border: "3px solid #ffffff",
		margin: "0px",
	},
	blueBackground: {
		background: "#4e68f2",
		marginTop: '32px',
		paddingTop:"24px",
	},
	whiteHeading: {
		color: "#ffffff",
		marginTop:"24px",
	},
	whiteText2: {
		color: "#ffffff",
		marginTop: '8px',
		fontSize:"1rem",
	},
	yellowHighlight: {
		color: "#ffd826",
		fontWeight: '600',
	},
	image: {
		maxWidth: '1400px',
		width:'100%',
		height:'auto',
	}
})

function MySection({classes, h_section, p_content}) {
	return(
		<Grid>
			<Typography className={classes.hspacing} component="h2" variant="display" color="primary" align="left" gutterBottom>
			{h_section}
			</Typography>
			<Typography className={classes.pspacing} component="p" varient="body1" color="textPrimary" align="left" gutterBottom>
			{p_content} 
			</Typography>
		</Grid>
	)
}

function MySection2({classes, h_section, p_content}) {
	return(
		<Grid>
			<Typography className={classes.hspacing} component="h3" variant="display" color="primary" align="left" gutterBottom>
			{h_section}
			</Typography>
			<Typography className={classes.pspacing} component="p" varient="body1" color="textPrimary" align="left" gutterBottom>
			{p_content} 
			</Typography>
		</Grid>
	)
}


function howsmyflattening({ classes, data, location, title}) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
		return (
			<Layout location={location} title={pageTitle}>
				<TopBanner 
					lg={6} xs={12}
					bannerImage={classes.bannerImage}
					title='Design a Centralized Data Analytics and Visualizations Hub'
				/>
				<div className={classes.contentWrapper}>
					<MySection
						classes={classes}
						h_section='A Grassroot initiative to respond to COVID-19 '
						p_content='#HowsMyFlattening is an initiative started by a group of MDs, industry professionals, and graduate school students affiliated with the University of Toronto in light of COVID19. I joined the project as the Design Lead coming from the industry. '
					/>
					<MySection
						classes={classes}
						h_section='Our goal'
						p_content='During this pandemic, our goal is to aggregate public health units (PHU) level data and produce data visualizations all in one place to help policy makers with decision-making and fill any information gaps that exist in our provincial monitoring systems.'
					/>
					<Grid 
						container
						spacing={3}
						wrap
						alignItems="flex-end"
					>
						<Grid item lg={8} xs={12}>
							<MySection
								classes={classes}
								h_section='Accomplishments'
								p_content='With a multi-disciplinary team of under 15 people, we posted near real-time data for 34 Ontario Public Health Units (PHUs) in the form of a live dashboard. We also generated over 15 usable, accessible datasets, and received a featured in the Toronto Star.'
							/>
							<a href="https://www.thestar.com/news/canada/2020/05/27/we-in-ontario-are-flying-blind-how-top-minds-teamed-up-to-give-us-the-covid-19-data-the-province-couldnt.html">Read our featured article in the Toronto Star <FontAwesomeIcon icon={faExternalLinkAlt}/></a>
						</Grid>		
						<Grid item lg={4} xs={12}>	
							<div className={classes.pspacing}/>
								<div className={classes.vl}>
								<div className={classes.separator}>
									<Typography component="p" variant="body1" color="textPrimary" align="left">
										<span className={classes.decorativeText}>3000+</span> 
										Weekly visitors
									</Typography>
									<Typography component="p" variant="body1" color="textPrimary" align="left">
										<span className={classes.decorativeText}>20+</span> 
										KPIs monitored in near real-time
									</Typography>
									<Typography component="p" variant="body1" color="textPrimary" align="left">
										<span className={classes.decorativeText}>15+</span> 
										detailed data analysis reports
									</Typography>
								</div>
							</div>
						</Grid>
					</Grid>
				</div>

				<div className={classes.hspacing}>
					<img className={classes.timeline} src="/images/hmf-timeline.svg" alt=""/>
				</div>
				<div className={classes.containerBg}>
					<Typography className={classes.separator2} component="h2" variant="display" color="primary" align="left" gutterBottom>
					Before joining: my assumptions of what I would be doing
					</Typography>
					<Grid container spacing={6} wrap alignItems="start">
						<Grid item lg={6} xs={12}>
							<img src="/images/easy-label.svg" alt="easy"/>
							<Typography className={classes.pspacing} component="p" varian="body1" color="textPrimary" align="left" gutterBottom>
							Follow a design system that is already created by other designers in the group to design new modules and web pages.
							</Typography>
						</Grid>
						<Grid item lg={6} xs={12}>
							<img src="/images/intermediate-label.svg" alt="intermediate"/>
							<Typography className={classes.pspacing} component="p" varian="body1" color="textPrimary" align="left" gutterBottom>
							Conduct user research and testing amid the COVID19 pandemic with limited resources while people practice social distancing. 
							</Typography>
						</Grid>
						<Grid item lg={6} xs={12}>
							<img src="/images/easy-label.svg" alt="easy"/>
							<Typography className={classes.pspacing} component="p" varian="body1" color="textPrimary" align="left" gutterBottom>
							Designing good, understandable data visualization is straight-forward because guidelines for designing data vizzes are well established. The big data science community can support us too.
							</Typography>
						</Grid>
						<Grid item lg={6} xs={12}>
							<img src="/images/challenging-label.svg" alt="challenging"/>
							<Typography className={classes.pspacing} component="p" varian="body1" color="textPrimary" align="left" gutterBottom>
							Form and work on a high-performing team that passes the norming stage of team formation so we can head towards our goals faster.
							</Typography>
						</Grid>
						<Grid item lg={6} xs={12}>
							<img src="/images/easy-label.svg" alt="easy"/>
							<Typography className={classes.pspacing} component="p" varian="body1" color="textPrimary" align="left" gutterBottom>
							Determine success metrics and KPIs for the data vizzes and the project.  
							</Typography>
						</Grid>
						<Grid item lg={6} xs={12}>
							<img src="/images/challenging-label.svg" alt="challenging"/>
							<Typography className={classes.pspacing} component="p" varian="body1" color="textPrimary" align="left" gutterBottom>
							Make data visualizations accessible to users with different abilities and needs. Avoid being overly reliant on color-coding.
							</Typography>
						</Grid>
					</Grid>
				</div>

				<div className={classes.contentWrapper}>
					<Typography className={classes.separator2} component="h2" variant="display" color="primary" align="left" gutterBottom>
					After joining: what I did not expect I would do
					</Typography>
					<Grid item lg={12} xs={12}>
						<img src="/images/easy-label.svg" alt="easy"/>
						<Typography className={classes.pspacing} component="p" varian="body1" color="textPrimary" align="left" gutterBottom>
						At first, I thought I would follow a design style guide laid out by other designers in the group to build new modules and web pages.
						</Typography>
					</Grid>
					<hr className={classes.divider}/>
					<Grid item lg={12} xs={12}>
						<img src="/images/intermediate-label.svg" alt="intermidiate"/>
						<Typography className={classes.pspacing} component="p" varian="body1" color="textPrimary" align="left" gutterBottom>
						<strong>Turns out, the project adopted a crowd-source model early on. With pressing needs to push out new content and data visualizations on a timely basis, designers and developers prioritized on completing tasks rather than setting up a pipeline or standard. As a result, data vizzes and the website were developed at different times by different people. There was very little consistentcy from page to page.</strong>
						</Typography>
					</Grid>
					<Grid container spacing={6} wrap alignItems="start">
						<Grid item lg={6} xs={12}>
							<MySection2
								classes={classes}
								h_section="Action items"
								p_content="Develop a design style guide on both the design and development sides to recognize re-usable elements, standardize components and modules in code and style. The design style guide should also outline how colour is used in data visualizations and be used to onboard new designers joinning the group. Product(s): a design style guide in Figma & a global style sheet."
							/>
						</Grid>
						<Grid item lg={6} xs={12}>
							<Typography className={classes.hspacing} component="h3" variant="display" color="primary" align="left" gutterBottom>
							Re-estimated effort
							</Typography>
							<img className={classes.graph} src="/images/styleguide-effort.svg" alt=" "/>
						</Grid>	
					</Grid>
					<Typography className={classes.hspacing} component="h3" variant="display" color="primary" align="left" gutterBottom>
					Designing a design system to streamline design and development
					</Typography>
					<Grid className={classes.separator2}>
						<img className={classes.image} src="/images/style-guide-building-steps.svg" alt=''/>
					</Grid>
					<Typography className={classes.hspacing} component="p" variant="body1" color="textPrimary" align="left" gutterBottom>
					The reason why I pushed to start a style guide despite knowing we are a small team (meaning we do not have a lot of time to dedicate to building a full design system) is so we can achieve 3 important organizational goals which would be extremely beneficial: 
					</Typography>
						<ul className={classes.listFont}>
							<li>A design style guide helps with vision alignment by documenting the purpose of compoenents, grounding them in user needs.</li>
							<li>Documentation of tested, ready-to-use components we could reuse when building something new in order to limit rework. It would also help onboard new members.</li>
							<li>Lastly, a design style guide enables communications of changes in which every team member can track and see.</li>
						</ul>
					<a target="_blank" href="/images/styleguide.svg">
						<img className={classes.styleguide} src="/images/styleguide.svg" alt="develop a style guide that standadize commonly used components"/> 
					</a>

					<Typography className={classes.separator2} component="h2" variant="display" color="primary" align="left" gutterBottom>
					Framing Questions and Set Targets
					</Typography>
					<Grid item lg={12} xs={12}>
						<img src="/images/easy-label.svg" alt="easy"/>
						<Typography className={classes.pspacing} component="p" varian="body1" color="textPrimary" align="left" gutterBottom>
						Designing data visualization is easy and straight-forward because design guidelines for designing data vizzes are well established. 						
						</Typography>
					</Grid>
					<hr className={classes.divider}/>
					<Grid item lg={12} xs={12}>
						<img src="/images/challenging-label.svg" alt="challenging"/>
						<Typography className={classes.pspacing} component="p" varian="body1" color="textPrimary" align="left" gutterBottom>
						<strong>Lots of nuances. I quickly found out that data vizzes need to fit into a bigger narrative, tell a story, or answer one or a set of questions. Open end-users to interpret data freely may cause confusion, especially for people who are new to data science. If the data vizzes are not designed using visual communication principles with clear intention, users could misunderstand the story/insights behind data.</strong>
						</Typography>
					</Grid>
					<Grid container spacing={2}>
						<Grid item lg={6} xs={12}>	
							<Typography className={classes.hspacing} component="h3" variant="display" color="primary" align="left" gutterBottom>
							Action item
							</Typography>
							<Typography className={classes.pspacing} component="p" variant="body1" color="textPrimary" align="left" gutterBottom>
							Guide users through the data visualizations using guided storytelling. (UX writing & content design are crucial in accomplishing this task.) <strong>Product(s):</strong> come up with data stories. 
							</Typography>
							<Typography className={classes.pspacing} component="p" variant="body1" color="textPrimary" align="left" gutterBottom>
							Very complex; requires a lot of UX research and best practice research but important							
							</Typography>
						</Grid>
						<Grid item lg={6} xs={12}>
							<Typography className={classes.hspacing} component="h3" variant="display" color="primary" align="left" gutterBottom>
							Re-estimate of effort
							</Typography>
							<img className={classes.graph} src="/images/data-story-effort.svg" alt=""/>
						</Grid>
					</Grid>

					<Typography className={classes.hspacing} component="h3" variant="display" color="primary" align="left" gutterBottom>
					The UX goal for data visuaizations
					</Typography>
					<ul className={classes.listFont}>
						<li>What is the (social/political/business) context of creating a data viz?</li>
						<li>What is the message the data visualization hopes to send across?</li>
						<li>Who is the data visualization intended for?</li>
						<li>Why should they care about this data visualization / data story? Do they care? (validate) </li>
					</ul>			
					<Typography className={classes.hspacing} component="h3" variant="display" color="primary" align="left" gutterBottom>
					KPIs and UX metrics for good data viz
					</Typography>
					<Typography className={classes.pspacing} component="p" variant="body1" color="textPrimary" align="left" gutterBottom>
					<strong>Information processing.</strong> Readability, discoverability, navigation (for interactive data visualization especially), labelling: the key principles of Information Architecture still apply for data visualizations. 
					</Typography>	
					<Typography className={classes.pspacing} component="p" variant="body1" color="textPrimary" align="left" gutterBottom>
					<strong>Clicks / Downloads / New Users / Return Users / Promotion.</strong> Track 1 & 2: I helped the team to divide KPIs and feedback into 2 tracks. The 1st track collects quantitative data focusing on measurable metrics such as “downloads”, and the 2nd track collects qualitative data that assess “promotion/attitudes”.
					</Typography>
					<Typography className={classes.hspacing} component="h3" variant="display" color="primary" align="left" gutterBottom>
					Guide users through visualizations
					</Typography>
					<Grid container spacing={2}>
						<Grid className={classes.pspacing} item lg={6} xs={12}>
							<img className={classes.graphBox} src="/images/covid19-weekly-vs-all-1.png" alt="weekly covid19 cases versus all cases with regions coded in different colours."/>
							<div>
								<Typography component="p" variant="caption" color="textPrimary" align="left" gutterBottom>		
								<strong>This figure (left)</strong> focuses more on the inter-relationship positioning of different regions and the overall picture of new covid-19 cases versus all cases. 
								</Typography>
							</div>
						</Grid>
						<Grid className={classes.pspacing} item lg={6} xs={12}>
							<img className={classes.graphBox} src="/images/covid19-weekly-vs-all-2.png" alt="weekly covid19 cases versus all cases where only Ontario is coloured differently."/>
							<div>
								<Typography component="p" variant="caption" color="textPrimary" align="left" gutterBottom>		
								<strong>This figure (right)</strong> isolates Ontario and focuses on how Ontario situates among different regions and stes. 
								</Typography>
							</div>
						</Grid>
					</Grid>
					<Typography className={classes.pspacing} component="p" varian="body1" color="textPrimary" align="left" gutterBottom>		
					The point made here is that the same data visualization, when coded with different colours and labeling, tell very different stories. 
					</Typography>
					<MySection
						classes={classes}
						h_section="Building a near real-time data dashboard"
						p_content="There are many technical challenges with the Tableau API when it comes to aggregating multiple data visualizations into groups. Below shows the ideal, future state of a section of the dashboard. I communicate with the team daily to share new findings and solutions in an Agile way, so we can realize the design vision sooner."
					/>
					<Typography className={classes.pspacing} component="p" variant="body1" color="textPrimary" align="left" gutterBottom>
					<strong>Limitation:</strong> The design is restrained by Plotly functionalities and automatic mapping (automatically populate data onto each card). Due to this limitation, I had to design a layout that can be universally used for each of the card on the dashboard.
					</Typography>
				</div>
				<img className={classes.dashboard} src="/images/dashboard-options.png"/>
				<div className={classes.contentWrapper}>
					<MySection
						classes={classes}
						h_section="Ontario's Reopening Metrics Scorecard"
						p_content="In July 2020, as cities and townships in Ontario started to reopen, there is a need to monitor whether each region's COVID-19 situation is postively or negatively progressing after the region opens up. This data could help policy makers to quickly see whether the decision to re-open is beneficial or concerning."
					/>
					<div className={classes.specialBox}>
						<dl className={classes.listFont}>
							<dt><span className={classes.decorativeText}>Challenge:</span>Requirements gathering and visualizing the design vision by choosing the most appropriate chart for effective data communication.</dt>
							<dt><span className={classes.decorativeText}>Test participants:</span>4 participants (two health policy decision makers at the Cabinet Office, two interested members of the public).</dt>
							<dt><span className={classes.decorativeText}>Design iterations:</span>3 iterations. Two early low fidelity wireframes were used to help internal project sponsors validate concepts and set requirements.</dt>
						</dl>
					</div>
					<Typography className={classes.pspacing} component="p" varian="body1" color="textPrimary" align="left" gutterBottom>		
						<a href='https://howsmyflattening.ca/#/home' target='_blank'> View and interact with the live scorecard <FontAwesomeIcon icon={faExternalLinkAlt}/></a>
					</Typography>
					<Grid className={classes.pspacing} container spacing={2} alig="start">
						<Grid lg={6} xs={12}>
							<img src="/images/product-mvp.png" alt=""/>
							<Typography component="p" variant="caption" color="textPrimary" align="left" gutterBottom>
							<strong>Release 1. </strong>MVP product that transformed numetrical data into a visual tool (scorecard). 
							</Typography>
						</Grid>
						<Grid lg={6} xs={12}>
							<img src="/images/iterated-scorecard.png" alt=""/>
							<Typography component="p" variant="caption" color="textPrimary" align="left" gutterBottom>
							<strong>Release 2. </strong> The iterated version based on usability tests with 4 participants. Added explanations for metrics. 
							</Typography>
						</Grid>
					</Grid>

					<MySection
						classes={classes}
						h_section="Teamwork and learning"
						p_content="I had some statistics background, but most of my statistics knowledge were applied in applications rather than data visualizations. I knew I needed to learn from our data scientists on the team to understand how they visualize data. I also saw this collaboration as an opportunity for knowledge sharing, where I can teach our data scientists more about effective communication through information architecture, visual communication, and UX."
					/>
					<Grid className={classes.hspacing} align="center">
						<img className={classes.image} src="/images/Knowledge-flow-network-map.svg" alt=""/>
					</Grid>
				</div>	
			</Layout>
	)
}



howsmyflattening.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}
export default withStyles(styles)(howsmyflattening)