import axios from 'axios';
const API_KEY = 'f600394e5c476adecdf3ff98fe8dcace';
const BASE_URL = 'https://api.themoviedb.org/3/';
// https://api.themoviedb.org/3/movie/550?api_key=f600394e5c476adecdf3ff98fe8dcacehttps://api.themoviedb.org/3/movie/550?api_key=f600394e5c476adecdf3ff98fe8dcace

export const getTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};
export const getSearchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};
export const getMovieReview = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const getCasts = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const getUserReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
