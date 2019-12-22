import React, { useState } from 'react'
import { Container, Card, Grid, Typography, TextField, Button } from '@material-ui/core'
import MovieIcon from '@material-ui/icons/Movie'

import styles from './style.js'

const Home = ({ history }) => {
	const [searchText, setSearchText] = useState('')
	const classes = styles()

	const handleSearchTextChange = event => {
		setSearchText(event.target.value)
	}

	const handleCleanTextClick = event => {
		setSearchText('')
	}

	const handleSearchTextOnClick = event => {
		history.push(`/results?movieName=${searchText}`)
	}

	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>
					<Grid>
						<Typography className={classes.title}>Bienvenido</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.movieIcon} />
					</Grid>
				</Grid>
				<TextField
					value={searchText}
					placeholder='Buscar...'
					className={classes.textFieldsearch}
					onChange={handleSearchTextChange} />
				<Grid className={classes.buttonsContainer}>
					<Button variant='contained' onClick={handleCleanTextClick}>Limpiar</Button>
					<Button variant='contained' className={classes.searchButton} color='primary' size='large' onClick={handleSearchTextOnClick}>Buscar</Button>
				</Grid>
			</Card>
		</Container>
	)
}

export default Home 