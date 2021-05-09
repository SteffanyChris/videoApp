import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native';
import {createStructuredSelector} from 'reselect';

import {fetchMoreTvStart, fetchPopularShowsStart} from '../../redux/tv/actions';
import {
  fetchMoreMoviesStart,
  fetchPopularMoviesStart,
} from '../../redux/movies/actions';
import Screen from '../screen/Screen';
import {screenWidth} from '../../utils/screenUtils';
import {cardSize} from '../../components/card/Card.styles';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import {
  selectIsLoadingMovies,
  selectMoreMoviesLoading,
  selectPopularMovies,
} from '../../redux/movies/selectors';
import {
  selectIsLoading,
  selectMoreIsLoading,
  selectPopularTvShows,
} from '../../redux/tv/selectors';
import WithSpinner from '../../utils/hoc/withSpinner';
import {
  selectAssetsByGenres,
  selectGenreIsLoading,
} from '../../redux/assetsByGenre/selectors';
import {fetchTvGenreStart} from '../../redux/assetsByGenre/actions';

const SpinnerCarousel = WithSpinner(CarouselComponent);

function Discover({
  popularMovies,
  popularShows,
  loadPopularMovies,
  loadPopularShows,
  loadMoreMovies,
  loadMoreShows,
  loadTvByGenre,
  assetsByGenres,
  genresLoading,
  moreMoviesLoading,
  moreTvLoading,
  movieLoading,
  tvLoading,
}) {
  const [pagination, setPagination] = useState({
    moviesPage: 2,
    showsPage: 2,
  });

  useEffect(() => {
    loadPopularMovies();
    loadPopularShows();
    loadTvByGenre();
  }, []);

  return (
    <Screen>
      <ScrollView>
        <SpinnerCarousel
          cardSize={screenWidth}
          header="Popular Movies"
          moreLoading={moreMoviesLoading}
          isLoading={movieLoading}
          data={popularMovies}
          onEndReached={() => {
            loadMoreMovies(pagination.moviesPage);
            setPagination({
              ...pagination,
              moviesPage: pagination.moviesPage + 1,
            });
          }}
        />
        <SpinnerCarousel
          cardType="vertical"
          header="Popular Tv Shows"
          moreLoading={moreTvLoading}
          isLoading={tvLoading}
          cardSize={cardSize + 8}
          data={popularShows}
          onEndReached={() => {
            loadMoreShows(pagination.showsPage);
            setPagination({...pagination, showsPage: pagination.showsPage + 1});
          }}
        />
        <SpinnerCarousel
          isLoading={genresLoading}
          cardType="vertical"
          header="Family and Documentary"
          cardSize={cardSize + 8}
          data={assetsByGenres}
        />
      </ScrollView>
    </Screen>
  );
}
/*
 * We use connect to connect to the redux store and retrives the needed values from state and the needed actions
 * We also use selectors from reselect library in order to avoid extra useless renders
 */
const mapDispatchToProps = dispatchEvent => ({
  loadPopularShows: () => dispatchEvent(fetchPopularShowsStart()),
  loadPopularMovies: () => dispatchEvent(fetchPopularMoviesStart()),
  loadMoreShows: page => dispatchEvent(fetchMoreTvStart(page)),
  loadMoreMovies: page => dispatchEvent(fetchMoreMoviesStart(page)),
  loadTvByGenre: () => dispatchEvent(fetchTvGenreStart()),
});

const mapStateToProps = createStructuredSelector({
  popularMovies: selectPopularMovies,
  popularShows: selectPopularTvShows,
  assetsByGenres: selectAssetsByGenres,
  tvLoading: selectIsLoading,
  movieLoading: selectIsLoadingMovies,
  genresLoading: selectGenreIsLoading,
  moreTvLoading: selectMoreIsLoading,
  moreMoviesLoading: selectMoreMoviesLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
