import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
	textStyle: {
		textAlign:'center',
		marginTop:'10px',
	},
	cover: {
		height: '330px',
		width: '255px',
	},
	spacing: {
	  margin: '24px 48px',
	}
	
})

// write a function that takes the following arguments {cover_cover} {book_title} {book_category}
// filter by books read by {book_category}

function card({classes, bookCover, bookTitle, bookCategory}) {
	return (
		<div className={classes.spacing}>
			<center>
			<img className={classes.cover} src={bookCover}/>
			<Typography className={classes.textStyle} component="h3" variant="display" color="textPrimary" align="center" gutterBottom>
			{bookTitle} 
			</Typography>
			<Typography component="p" variant="display" color="primary" align="center" gutterBottom>
			{bookCategory} 
			</Typography>
			</center>
		</div>
	)
}

card.propTypes = {
	classes: PropTypes.object.isRequired,
	bannerImage: PropTypes.object.isRequired,
	title: PropTypes.object.isRequired,
}

export default withStyles(styles)(card)