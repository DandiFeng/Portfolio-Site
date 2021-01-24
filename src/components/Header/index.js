import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import HelpIcon from '@material-ui/icons/Help'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { shadows } from '@material-ui/system'

const lightColor = 'rgba(255, 255, 255, 0.7)'

const styles = theme => ({
	secondaryBar: {
		zIndex: 0,
	},
	menuButton: {
		marginLeft: -theme.spacing.unit,
		[theme.breakpoints.up('sm')]: {
			display:'none',
		},
	},
	iconButtonAvatar: {
		padding: 4,
	},
	link: {
		color: lightColor,
		'&:hover': {
			color: theme.palette.common.white,
		},
	},
	button: {
		borderColor: lightColor,
	},
	avatar: {
		img: {
			margin: 0,
		},
	},
	dropSha:{
		boxShadow: '0px 5px 10px #c4c4c4',
	}
})

function Header({ classes, onDrawerToggle, title }) {
	return (
		<>
			{ <AppBar color="transparent" position="sticky" elevation={0}>
				<Toolbar color="transparent">
					<Grid item>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={onDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
					</Grid>
				</Toolbar>
			</AppBar>}
		</>
	)
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	onDrawerToggle: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
}

export default withStyles(styles)(Header)
