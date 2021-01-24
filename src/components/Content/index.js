import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Layout from 'components/Layout'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { spacing } from '@material-ui/system'

const styles = theme => ({
	container: {
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
	paper: {
		margin:"0px",
		overflow: 'hidden',
		padding:'56px 16px',
		[theme.breakpoints.up('sm')]: {
			minWidth: 375,
		},
		[theme.breakpoints.up('lg')]: {
			minWidth: 936,
		},
	},
	searchBar: {
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
	},
	block: {
		display: 'block',
	},
	addUser: {
		marginRight: theme.spacing.unit,
	},
	contentWrapper: {
		height: 280,
	},
	button: {
		background:'#4e68f2',
 		color: '#ffffff',
 		textAlign: 'center',
 		textDecoration: 'none',
 		display: 'inline-block',
 		fontSize: 16,
 		cursor: 'pointer',
 		borderradius: 6,
 		borderColor: '#4e68f2',
 		marginTop: '20px',
 		padding: '8px 20px',
 		'&:hover': {
 		border: '1px solid',
 		borderColor: '#4e68f2',
		background: '#ffffff',
		color:'#4e68f2',
		cursor: 'pointer',
		borderradius:6,
		boxShadow: '4px 4px 10px #dcdcdc'
		},
		[theme.breakpoints.down('md')]: {
			minWidth: 0,
			width:'100%',
		},
	},
	spacing: {
		margin: '0px 0px 10px 0px',
	},
	imageBox: {
		maxWidth: '330px',
		width: '100%',
		height:'auto',
	},
	spacingLeft: {
		margin: '0px 24px',
	}
})



function Content({ classes, mytext, myimage, mypage, subtitle, descr}) {
	return (
		<div className={classes.container}>
			<Paper className={classes.paper}>
				<Grid 
					container
					spacing={3}
					wrap
					alignItems="start"
					justify="center"
				>
					<Grid lg={4} xs={10} align="center">
						<img className={classes.imageBox} src={myimage}/>
					</Grid>
					<Grid className={classes.spacingLeft} lg={6} xs={12} item>
						<Grid>
							<Typography component="h2" variant="display1" color="textSecondary" align="left" gutterBottom>
							{mytext} 
							</Typography>
						</Grid>
						<Grid className={classes.spacing}>
							<Typography component="subtitle1" variant="subtitle1" color="primary" align="left">
							{subtitle}
							</Typography>
						</Grid>
						<Grid>
							<Typography component="body1" variant="body1" color="textPrimary" align="left">
							{descr} 
							</Typography>
						</Grid>
						<Grid>
							<Button className={classes.button} href={mypage}>
							Take a Look
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	)
}


Content.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Content)
