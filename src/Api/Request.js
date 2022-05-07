const apiKey = "6532e9a930eb3f26c76f3a1331cf9042";

const Request = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchTopActionMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&with_geners=28`,
  fetchTopComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_geners=35`,
  fetchTopHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_geners=27`,
  fetchTopRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_geners=10749`,
  fetchTopDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_geners=99`,
};

export default Request;
