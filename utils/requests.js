const apiKey = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${apiKey}&with_geners=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${apiKey}&with_geners=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${apiKey}&with_geners=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${apiKey}&with_geners=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${apiKey}&with_geners=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${apiKey}&with_geners=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${apiKey}&with_geners=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${apiKey}&with_geners=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${apiKey}&with_geners=10770`,
  },
};
