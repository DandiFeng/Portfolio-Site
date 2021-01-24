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
import { createMuiTheme } from '@material-ui/core/styles'


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
	pspacing: {
		margin: "8px 0px 16px 0px",
	},
	bannerImage: {
		backgroundImage: "url('/images/porter-overview-banner.png')",
		height: "300px",
		backgroundRepeat: 'no-repeat',
  		backgroundSize: 'contain cover',
	},
	listStyle: {
		fontSize: '16px',
		lineHeight: '1.5',
	},
	hspacing: {
		margin: "40px 0px 0px 0px",
	},
	myApproach: {
		width: "100%",
		height: "auto",
	},
	iconSize: {
		width: '28px',
		height: '28px',
	}, 
	divider: {
		border: '1px solid #c4c4c4',
		margin: '16px 16px',
	},
	greyBackground: {
		background: "#a2a2a2",
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
	textHighlight:{
		color: '#4e68f2',
	},
	listFont: {
		fontSize: "1rem",
		color: "#ffffff",
		lineHeight:"1.8",
		marginTop:"40px",
		paddingLeft:"16px",
	},
	displayText: {
		display: "block",
		fontSize: "1rem",
		color:"#ffd826",
	}, 
	whiteLine: {
		border: "2px solid #ffffff",
		margin: "0px",
	},
	alignCardSort: {
		width:"100%",
		height:"auto",
	},
	imgBox: {
 		display:"block",
 		marginTop:"24px",
 		objectFit: "cover",
	},
	alignSEQ: {
		maxWidth:"640px",
		width:"100%",
		height:"auto",
	},
	alignEligibility: {
		maxWidth:"1100px",
		width: "100%",
		height: "auto",
	},
	missingBaggage:{
		maxWidth:"1100px",
		width:'100%',
		height:'auto',
	},
	claimImage: {
		maxWidth:"400px",
		width: '100%',
		height: 'auto',
	},
	decobox: {
		borderLeft: '2px solid #4E68F2',
		lineHeight: 1.8,
		margin:'24px 0px 24px 0px',
	}
})

const theme = createMuiTheme({
  overrides: {
    MuiTableHead: {
      text: {
        color: 'white',
      },
    },
  },
})

function MyList({classes, icon, altText, text}) {
	return(
		<ListItem>
		<ListItemIcon>
			<img src={icon} alt={altText}/>
  		</ListItemIcon>
  		<ListItemText primary={text}/>
  		</ListItem>
	)
}

function Porter({ classes, data, location, title}) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
		return (
			<Layout location={location} title={pageTitle}>
				<TopBanner lg ={12} xs={12}
					bannerImage={classes.bannerImage}
					title='Making the Post-Travel Experience Digital and Trouble-Free (APPR)'
					/>
				<div className={classes.contentWrapper}>
					<Typography className={classes.hspacing} component="h2" variant="display" color="primary" align="left" gutterBottom>
					Challenge
					</Typography>
					<Typography className={classes.pspacing} component="p" variant="body1" color="textPrimary" align="left"> 
					The Air Passenger Protection Regulations (APPR) drove a fast-paced, high-stake, complex web project. The challenges are multi-fold: the regulations asked airlines to digitize their customer support and flight claim filing services, but it was unknown what pain points passengers had exactly using traditional means to submit claims. While facing a tight, on-negotiable deadline, workflows at many departments are not digitally mediated. The legal focus meant that I had to navigate legal complexities, digitize business operation, and solution for usable and pleasurable digital services to passengers. 
					</Typography>

					<Typography className={classes.hspacing} component="h2" variant="display" color="primary" align="left" gutterBottom>
					Timeline and responsibility
					</Typography>
					<Typography component="p" className={classes.pspacing} variant="body1" color="textPrimary" align="left"> 
					July - December 2019: 6 months. <br/>
					I was the only research resource placed on a large cross-functional project team with 30+ members.
					</Typography>

					<Typography className={classes.hspacing} component="h2" variant="display" color="primary" align="left" gutterBottom>
					Activities
					</Typography>
					<Typography component="p" className={classes.pspacing} variant="body1" color="textPrimary" align="left"> 
						<ul>
							<li>User interviews</li>
							<li>Cart sorting </li>
							<li>Heat Mmap - Hotjar</li>
							<li>SEQ - a method by Jeff Sauro</li>
							<li>Tracking daily traffic - Google Analytics </li>
							<li>Incoming feedback from Customer Relations team (Post launch)</li>
						</ul>
					</Typography>

					<Typography className={classes.hspacing} component="h2" variant="display" color="primary" align="left" gutterBottom>
					Outcome
					</Typography>
					<Typography component="p" variant="body1" color="textPrimary" align="left"> 
						<ul>
							<li>A multi-functional customer service platform that also serves as a post-travel information center, a neglected area by commercial airlines. </li>
							<li>A claims eligibility checking tool that helped over 300 customers in the first week of launch. </li>
							<li>Enabled flight cliam and expenses reimbursement claim submissions through online webforms</li>
							<li>Preserved data to provide the journey history for passengers which not only helps CR better investigate claims but also leverages customer retention.</li>
							<li>Enhanced passenger communication.</li>
							<li>Empowered passengers with greater digital self-service options.</li>
						</ul>
					</Typography>
				</div>

				<img className={classes.myApproach} src="/images/my-approach.svg" alt="My approach: understand law and business, define the problem, make hypotheses, secondary and primary research, card sort, design workshops, prototype, iterate, and hand off to development."/>
				<div className={classes.contentWrapper}>
					<Typography className={classes.hspacing} component="h2" variant="display" color="primary" align="left" gutterBottom>
					Methods and process
					</Typography>
					<Typography className={classes.pspacing} component="h3" variant="display" color="primary" align="left" gutterBottom>
					Background legal research
					</Typography>
					<Typography component="p" className={classes.pspacing} variant="body1" color="textPrimary" align="left"> 
					I performed background research and legal research of the <a href="https://otc-cta.gc.ca/eng/air-passenger-protection-regulations-highlights">Air Passengers Protection Regulations</a> to decipher which areas can be acted on from a usability or a digital experience perspective. 
					Based on ROI to maximize UX and business gains, my research concluded actions can be taken in 3 areas: 
					</Typography>
					<div className={classes.decobox}>
						<ol className={classes.listStyle}>
							<li> Streamline the delayed or cancelled flights notification system into the self-serviced claim flow;</li> 
							<li> Create a system provide clear messaging that conveys the reason for denied boarding & tarmac delays;</li> 
							<li> Design usable web forms for filing claims, digitize the lost or damaged baggage reporting procedure.</li> 
						</ol>
					</div>
					<Typography className={classes.pspacing} component="h3" variant="display" color="primary" align="left" gutterBottom>
					User Interviews
					</Typography>
					<Typography component="p" className={classes.pspacing} variant="body1" color="textPrimary" align="left"> 
					Following up my background research, I had 4 user interviews to study the particular pain points and touch points users had in each of the area. 
					</Typography>
					<Grid className={classes.pspacing} item lg={12} xs={12}>
						<img className={classes.alignCardSort} src="/images/busines_traveler_persona.png" alt="card sorting of participant 6"/>
					</Grid>

					<Typography className={classes.hspacing} component="h3" variant="display" color="primary" align="left" gutterBottom>
					Card sorting to establish IA
					</Typography>
					<div className={classes.decobox}>
						<MyList classes={classes}
							icon="/images/optimal-workshop-icon.png" 
							altText="optimal workshop icon"
							text="Optimal Sort and in-person card sorting"
						/>
					</div>
					<Typography className={classes.pspacing} compoenent="p" variant="body1" colour="textPrimary" align="left" gutterBottom>
					My research revealed that passengers' travel experience does not end after the flight departs. Passengers have a lot of questions post-travel, especially if their flights were delayed, or cancelled. In order to provide answers and information to passengers, navigation and discoverability are extremely important factors. <br/>
					<br/>
					I conducted 2 rounds of card sorting (15 users for each round) to answer:
					</Typography>
					<ul className={classes.listStyle}>
						<li>What are users’ <span className={classes.textHighlight}>mental models</span> when thinking about different services related to different tasks? </li>
						<li>Should information be grouped together according to <span className={classes.textHighlight}>the timeline of travel? Or customer journeys? </span></li>
						<li>Which labels and what type of language communicate information (especially legal info) most clearly?</li>
					</ul>
					<Grid container alignItems="center">
						<Grid className={classes.pspacing} item lg={6} xs={12}>
							<img className={classes.alignCardSort} src="/images/card-sorting-porter1.png" alt="card sorting of participant 6"/>
						</Grid>
						<Grid className={classes.pspacing} item lg={6} xs={12}>
							<img className={classes.alignCardSort} src="/images/card-sorting-porter2.png" alt="card sorting of participant 7"/>
						</Grid>
					</Grid>
					<Typography className={classes.pspacing} component="p" variant="body1" colour="textPrimary" align="left" gutterBottom>
					The minimum percentage agreement required for labels (sections) to be grouped together is 75%, as indicated by nodes on the dendrogram. This is to ensure reliability based on the selected sample. The final layout of page was informed by the groupings (representing users' mental models) derived from these card sort exercises. 
					</Typography>


					<Typography className={classes.hspacing} component="h3" variant="display" color="primary" align="left" gutterBottom>
					SEQ - a method by Jeff Sauro
					</Typography>
					<Grid container>
						<Grid className={classes.pspacing} lg={8} xs={8}>
							<img className={classes.alignSEQ} src="/images/seq-scale.svg" alt="SEQ"/>
						</Grid>
						<Grid className={classes.pspacing} lg={4} xs={8}>
							<Typography component="p" variant="body1" color="textPrimary" align="left" gutterBottom>
							<strong>Task 1:</strong> Discoverability task
							</Typography>
							<Typography component="p" variant="body1" color="textPrimary" align="left" gutterBottom>
							<strong>Task 2:</strong> Navigation task
							</Typography>
						</Grid>						
					</Grid>
					<Typography component="h3" variant="display1" color="textPrimary" align="left" gutterBottom>
					A story thedata told: 
					</Typography>
					<Typography className={classes.pspacing} component="p" varient="body1" colo="textPrimary" align="left" gutterBottom>
					This quick, simple, validated test showed me that despite our best effort, <strong>the score for task 2 is low, meaning users likely have trouble getting started on task.</strong> Once this problem was discovered, specific issues were analysed, ‘critical’ statuses was assigned, and actionable items were addressed in the subsequent release.
					</Typography>

					<Typography className={classes.hspacing} component="h2" variant="display1" color="primary" align="left" gutterBottom>
					Translating mental models into design
					</Typography>
					<Typography className={classes.pspacing} component="p" variant="body1" color="textPrimary" align="left" gutterBottom>
					Designing the Missing Baggage Report interactive web form was my favourite task of the entire project. The most common industry practice for reporting a piece of missing baggage is to have the user fill out a text area with textual description of what the missing bag looks like.
					</Typography>
					<Typography className={classes.pspacing} component="p" variant="body1" color="textPrimary" align="left" gutterBottom>
					It is no surprise that users say they often miss or forget about tiny visual details of their baggage. Discrepencies in how individuals understands textual descriptions also makes the task of looking for missing baggage harder for staff.
					</Typography>
					<Typography className={classes.pspacing} component="h3" variant="display1" color="primary" align="left" gutterBottom>
					The solution
					</Typography>
					<Typography className={classes.pspacing} component="p" variant="body1" color="textPrimary" align="left" gutterBottom>
					According to IA and usability principles, <strong>I incorporated visual imagery in the dropdown select to promote recognition and minimize recall. </strong>
					</Typography>
					<a target="_blank" href="/images/missing-baggage-form.png">
						<img className={classes.missingBaggage} src="/images/missing-baggage-form.png" alt="missing baggage form with a schematic diagram depicting the logic on the left and a graphical interface based on the loigic on the right."/>
					</a>
					<Typography component="p" variant="body1" color="textPrimary" align="center" gutterBottom>
					<strong>Fig.</strong> (Left) A schematic diagram the logic of the dropdown filter. (Right) A graphical interface that reflects the logic on the left. 
					</Typography>

					<Typography className={classes.hspacing} component="h2" variant="display1" color="primary" align="left" gutterBottom>
					End Product
					</Typography>
					<Typography className={classes.pspacing} component="p" variant="display1" color="textPrimary" align="left" gutterBottom>
					Porter Help and Contact <a href="https://www.flyporter.com/en-ca/customer-service/help-contact" target="_blank"> View it live 🔗 </a>
					<Typography className={classes.pspacing} component="p" variant="display1" color="textPrimary" align="left" gutterBottom></Typography>
					Flight Claim Eligibility Assessment Tool.
					<a href="https://www.flyporter.com/en-ca/customer-service/help-contact/claims/compensation-eligibility-check" target="_blank">View it live 🔗 </a>
					</Typography>
				</div>

				<div className={classes.greyBackground}>
					<hr className={classes.whiteLine}/>
					<div className={classes.contentWrapper}>
						<Grid container>
							<Grid className={classes.hspacing} sm={2}>
								<img src="/images/raccoon-icon.svg" alt="decorative raccoon icon"/>
	 						</Grid>
	 						<Grid sm={10}>
								<Typography className={classes.whiteHeading} component="h2" variant="display1"  align="left" gutterBottom>
								Lessons learned
								</Typography>
								<Typography className={classes.whiteText2} component="p" variant="body1" align="left" gutterBottom>
									<span className={classes.yellowHighlight}> During the project,</span> we assumed the starting point of users’ claim journey starts on the Help & Contact page. 
									<span className={classes.yellowHighlight}> However, when I conducted the post launch testing,</span> I found users land on the Help & Contact page from different places. Rarely do people access the Help & Contact directly.
								</Typography>
								<Typography className={classes.whiteText2} component="p" variant="body1" align="left" gutterBottom>
								This is a good lesson for me to understand that we need to step out of the project from time to time and review how our design fits into the grander scheme of things. 
								</Typography>
								<Typography className={classes.whiteHeading} component="h3" variant="display1" align="left" gutterBottom>
								How I fixed it
								</Typography>
								<Typography className={classes.whiteText2} component="p" variant="body1" align="left" gutterBottom>
								As a result of this follow-up testing, I recommended adding different access points into the claims flow using call-to-action buttons in:
								<span className={classes.displayText}> Home > Travel Information > Travel Disruption </span>
								<span className={classes.displayText}> Home > Manage Flights > Flight Status </span>
								<span className={classes.displayText}> Home > Help & Contact > Popular FAQs > Flight Delays & Cancellations </span>
								</Typography>
								<div className={classes.pspacing}>
									<img className={classes.claimImage} src="/images/claim-button.png"/>
								</div>
	 						</Grid>
						</Grid>
					</div>
				</div>
			</Layout>
	)
}

Porter.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}
export default withStyles(styles)(Porter)