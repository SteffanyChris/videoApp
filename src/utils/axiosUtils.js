import axios from "axios";

const api_key = '9e7b1bd8531a768eb84a6a5deaa2f5cf';

/* axios Instance configuration with the base URL, method and api_key */
const axiosInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	method: 'GET',
	params: {api_key}
})

/* Use the axios instance to make requests for popular movies and shows,
*	handles the response to grab only the results and handles the error
*/
export const getPopularTvShows = () => axiosInstance("tv/popular").then(resp => resp.data.results).catch(error => console.log(error.message))
export const getPopularMovies = () => axiosInstance("movie/popular").then(resp => resp.data.results).catch(error => console.log(error.message))