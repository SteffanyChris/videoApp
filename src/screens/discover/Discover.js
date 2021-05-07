import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { createStructuredSelector } from 'reselect';

import { fetchPopularShowsStart } from '../../redux/tv/actions';
import { fetchPopularMoviesStart } from '../../redux/movies/actions';
import Screen from '../screen/Screen';
import { screenWidth } from '../../utils/screenUtils';
import { cardSize } from '../../components/card/Card.styles';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import { selectPopularMovies } from '../../redux/movies/selectors';
import { selectIsLoading, selectPopularTvShows } from '../../redux/tv/selectors';
import WithSpinner from '../../utils/hoc/withSpinner';
import { selectAssetsByGenres, selectGenreIsLoading } from '../../redux/assetsByGenre/selectors';
import { fetchTvGenreStart } from '../../redux/assetsByGenre/actions';

const SpinnerCarousel = WithSpinner(CarouselComponent);

function Discover({
	popularMovies,
	popularShows,
	loadPopularMovies,
	loadPopularShows,
	loadTvByGenre,
	assetsByGenres,
	genresLoading
}) {

	const [pagination, setPagination] = useState({
		moviesPage: 2,
		showsPage: 2,
	})

	useEffect(() => {
		loadPopularMovies(1),
		loadPopularShows(1),
		loadTvByGenre()
	}, [loadPopularShows, loadPopularMovies])

	return(
		<Screen>
			<ScrollView>
				<CarouselComponent
					cardSize={screenWidth}
					header='Popular Movies'
					data={popularMovies}
					onEndReached={() => {
						loadPopularMovies(pagination.moviesPage)
						setPagination({...pagination, moviesPage: pagination.moviesPage+1})
					}}
				/>
				<CarouselComponent
					cardType='vertical'
					header='Popular Tv Shows'
					cardSize={cardSize+8}
					data={popularShows}
					onEndReached={() => {
						loadPopularShows(pagination.showsPage)
						setPagination({...pagination, showsPage: pagination.showsPage+1})
					}}
				/>
				<SpinnerCarousel
					isLoading={genresLoading}
					cardType='vertical'
					header='Family and Documentary'
					cardSize={cardSize+8}
					data={assetsByGenres}
				/>
			</ScrollView>
		</Screen>
	)
}

const mapDispatchToProps = dispatchEvent => ({
	loadPopularShows: (page) =>dispatchEvent(fetchPopularShowsStart(page)),
	loadPopularMovies: (page) =>dispatchEvent(fetchPopularMoviesStart(page)),
	loadTvByGenre: () => dispatchEvent(fetchTvGenreStart())
})

const mapStateToProps = createStructuredSelector({
	popularMovies: selectPopularMovies,
	popularShows: selectPopularTvShows,
	assetsByGenres: selectAssetsByGenres,
	tvLoading: selectIsLoading,
	genresLoading: selectGenreIsLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(Discover);