import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import CreateIcon from '@material-ui/icons/Create'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'

const categories = [
	{
		id: 'Menu',
		children: [
			{ id: 'Home', icon: <HomeIcon />, page: '/' },
			{ id: 'Work', icon: <CreateIcon />, page: '/Work' },
			{ id: 'Thoughts', icon: <EmojiObjectsIcon />, page: '/thoughts' },
		],
	},
]

const styles = theme => ({
	categoryHeader: {
		paddingTop: 40,
		paddingBottom: 16,
	},	
	categoryHeaderPrimary: {
		color: theme.palette.common.white,
		fontSize: 18,
	},
	item: {
		paddingTop: 4,
		paddingBottom: 4,
		color: theme.palette.common.white,
	},
	itemCategory: {
		backgroundColor: '#232f3e',
		boxShadow: '0 -1px 0 #232f3e inset',
		paddingTop: 24,
		paddingBottom: 56,
	},
	firebase: {
		fontSize: 24,
		fontFamily: theme.typography.fontFamily,
		color: theme.palette.common.white,
	},
	itemActionable: {
		'&:hover': {
			backgroundColor: 'rgba(78, 104, 242,0.5)',
		},
	},
	itemActiveItem: {
		color: '#4e68f2',
		fontWeight: 900,
	},
	itemPrimary: {
		color: 'inherit',
		fontSize: theme.typography.fontSize,
		'&$textDense': {
			fontSize: theme.typography.fontSize,
		},
	},
	marginAuto: {
		margin: 'auto'
   	},
	itemPosition:{
		position:'fixed',
		bottom:0,
	},
})

function Navigator({ classes, location = null, ...rest }) {
	const matchPath = location ? location.pathname.replace(/\//g, '') : null
	return (
		<Drawer variant="permanent" {...rest}>
			<List disablePadding>
				<ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
					<Grid container alignItems="center" spacing={5} direction="row">
						<Grid item>Dandi Feng</Grid>
					</Grid>
				</ListItem>

				
				{categories.map(({ id, children }) => (
					<React.Fragment key={id}>
						<ListItem className={classes.categoryHeader}>
							<ListItemText
								classes={{
									primary: classes.categoryHeaderPrimary,
								}}
							>
								{id}
							</ListItemText>
						</ListItem>

						{children.map(({ id: childId, icon, page = null }) => {
							return page ? (
								<Link
									key={childId}
									style={{ textDecoration: 'none', color: 'inherit' }}
									to={`${page}`}
								>
									<ListItem
										button
										dense
										className={classNames(
											classes.item,
											classes.itemActionable,
											(matchPath && page ? matchPath === page : false) && classes.itemActiveItem
										)}
									>
										<ListItemIcon>{icon}</ListItemIcon>
										<ListItemText
											classes={{
												primary: classes.itemPrimary,
												textDense: classes.textDense,
											}}
										>
											{childId}
										</ListItemText>
									</ListItem>
								</Link>
							) : (
								<div />
							)
						})}
					</React.Fragment>
				))}	
			</List>

			<div className={classes.marginAuto}></div>
			<ListItem className={classNames(classes.item, classes.itemCategory)} >
				<ListItemIcon>
					<a style={{ textDecoration:'none', color: 'inherit' }} target="_blank" href="https://www.linkedin.com/in/dandi-feng/">
					<LinkedInIcon />
					</a>
				</ListItemIcon>
				<ListItemIcon>
					<a style={{ textDecoration:'none', color: 'inherit' }} target="_blank" href="https://github.com/DandiFeng">
					<GitHubIcon />
					</a>
				</ListItemIcon>
				<ListItemIcon>
					<a style={{ textDecoration:'none', color: 'inherit' }} href="mailto:dandi21.feng@gmail.com">
					<EmailIcon />
					</a>
				</ListItemIcon>
			</ListItem>

		</Drawer>
	)
}

Navigator.propTypes = {
	classes: PropTypes.object.isRequired,
	location: PropTypes.object,
}

export default withStyles(styles)(Navigator)
