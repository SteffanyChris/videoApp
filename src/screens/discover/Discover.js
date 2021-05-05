import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { fetchPopularMoviesStart, fetchPopularShowsStart } from '../../redux/moviesAndShows/actions';
import Screen from '../screen/Screen';

function Discover({loadMovies, loadShows}) {
	return(
		<Screen>
			<Button onPress={loadShows} title='Shows test'/>
			<Button onPress={loadMovies} title='Movies test'/>
		</Screen>
	)
}

const mapDispatchToProps = dispatchEvent => ({
	loadShows: () => dispatchEvent(fetchPopularShowsStart()),
	loadMovies: () => dispatchEvent(fetchPopularMoviesStart())
})

export default connect(null, mapDispatchToProps)(Discover);