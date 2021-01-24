import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
	titleStyle: {
	  position: 'absolute',
	  bottom:'0',
	  left: '50%',
	  transform: 'translate(-50%, 0)',
	  marginBottom:'48px',
	},
	titleStyleAlt: {
	  position: 'relative',
	},
})


function TopBanner({classes, bannerImage, title}) {
	return (
		<div className={`${bannerImage} ${classes.titleStyleAlt}`}>
			<center>
			<Typography className={classes.titleStyle} component="h1" variant="display" color="textPrimary" align="center" gutterBottom>
			{title} 
			</Typography>
			</center>
		</div>
	)
}

TopBanner.propTypes = {
	classes: PropTypes.object.isRequired,
	bannerImage: PropTypes.object.isRequired,
	title: PropTypes.object.isRequired,
}

export default withStyles(styles)(TopBanner)