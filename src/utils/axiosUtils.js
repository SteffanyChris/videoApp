import axios from 'axios';

const api_key = '9e7b1bd8531a768eb84a6a5deaa2f5cf';

/* axios Instance configuration with the base URL, method and api_key */
const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  method: 'GET',
  params: {api_key},
});

/*
 * Function used to format the Json response
 */
const formatResponse = array => {
  return array.map(item => ({
    id: item.id,
    title: item.title ? item.title : item.name,
    description: item.overview,
    image: item.poster_path,
    genres: item.genre_ids,
    rating: item.vote_average,
  }));
};

/* Use the axios instance to make requests for popular movies and shows,
 *	handles the response to grab only the results and handles the error
 */
export const getMoreTvShows = page =>
  axiosInstance('tv/popular', {params: {page: page}})
    .then(resp => formatResponse(resp.data.results))
    .catch(error => console.log(error.message));

export const getPopularTvShows = () =>
  axiosInstance('tv/popular')
    .then(resp => formatResponse(resp.data.results))
    .catch(error => console.log(error.message));

export const getMoreMovies = page =>
  axiosInstance('movie/popular', {params: {page: page}})
    .then(resp => formatResponse(resp.data.results))
    .catch(error => console.log(error.message));

export const getPopularMovies = () =>
  axiosInstance('movie/popular')
    .then(resp => formatResponse(resp.data.results))
    .catch(error => console.log(error.message));

export const assetsByGenres = genres =>
  Promise.all([
    axiosInstance('discover/movie', {params: {with_genres: genres}}),
    axiosInstance('discover/tv', {params: {with_genres: genres}}),
  ])
    .then(resp =>
      formatResponse(resp[0].data.results.concat(resp[1].data.results)),
    )
    .catch(error => console.log(error.message));

export const searchMovieAndTv = query =>
  Promise.all([
    axiosInstance('search/movie', {params: {query: query}}),
    axiosInstance('search/tv', {params: {query: query}}),
  ])
    .then(resp =>
      formatResponse(resp[0].data.results.concat(resp[1].data.results)),
    )
    .catch(error => console.log(error.message));
