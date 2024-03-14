import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "c5a24edd68c6d713a5872065a2110737";

const withBaseURL = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
  static getMovies() {
    return axios(withBaseURL("movie/popular")); // utillizando o axios parta fazer o fectch
  }
  static getMovieDetails(id) {
    return axios(withBaseURL(`movie/${id}`));
  }
  static searchMovies(movie) {
    return axios(withBaseURL(`search/movie&query=${movie}`));
  }
}
