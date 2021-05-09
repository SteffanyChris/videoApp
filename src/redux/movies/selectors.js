import { createSelector } from 'reselect';

const selectMovies = state => state.movies

export const selectPopularMovies = createSelector(
	[selectMovies],
	movie => movie.popularMovies
)

export const selectIsLoadingMovies = createSelector(
	[selectMovies],
	movie => movie.isLoading
)

export const selectMoreMoviesLoading = createSelector(
	selectMovies,
	movie => movie.moreIsLoading
)
