import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Request from "../../Api/Request";
import { IoStarHalfSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Movie = () => {
  const { id } = useParams();
  const [trendMo, setTrendMo] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [NetflixOriginals, setNetflixOriginals] = useState([]);
  const imgApi = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    async function fetchData() {
      const fetchTrending = await fetch(Request.fetchTrending)
        .then((res) => res.json())
        .then((data) => setTrendMo(data.results));
      const fetchTopRated = await fetch(Request.fetchTopRated)
        .then((res) => res.json())
        .then((data) => setTopRated(data.results));
      const fetchNetflixOriginals = await fetch(Request.fetchNetflixOriginals)
        .then((res) => res.json())
        .then((data) => setNetflixOriginals(data.results));
    }
    fetchData();
  }, []);

  const movieTrendMo =
    trendMo && trendMo.filter((item) => parseInt(id) === parseInt(item.id));
  const movieTopRated =
    topRated && topRated.filter((item) => parseInt(id) === parseInt(item.id));
  const movieNetflixOriginals =
    NetflixOriginals &&
    NetflixOriginals.filter((item) => parseInt(id) === parseInt(item.id));
  return (
    <div className="moviePage">
      <div className="navMovie">
        <strong>
          {movieTrendMo && movieTrendMo.length === 1
            ? movieTrendMo.map(
                (movie) => `${movie.name ? movie.name : movie.title} `
              )
            : movieTopRated.length === 1
            ? movieTopRated.map(
                (movie) => ` ${movie.name ? movie.name : movie.title} `
              )
            : movieNetflixOriginals.map(
                (movie) => ` ${movie.name ? movie.name : movie.title} `
              )}
        </strong>
        |
        <strong>
          {movieTrendMo && movieTrendMo.length === 1
            ? movieTrendMo.map((movie) => ` ${movie.media_type} `)
            : movieTopRated.length === 1
            ? movieTopRated.map((movie) => ` ${movie.media_type} `)
            : movieNetflixOriginals.map((movie) => ` ${movie.media_type} `)}
        </strong>
        |
        <strong>
          {movieTrendMo && movieTrendMo.length === 1
            ? movieTrendMo.map((movie) => ` ${movie.vote_average} `)
            : movieTopRated.length === 1
            ? movieTopRated.map((movie) => ` ${movie.vote_average} `)
            : movieNetflixOriginals.map((movie) => ` ${movie.vote_average} `)}
        </strong>
      </div>
      <div className="movieContent">
        <strong>Date:</strong>
        <span>
          {movieTrendMo && movieTrendMo.length === 1
            ? movieTrendMo.map((movie) => ` ${movie.release_date}`)
            : movieTopRated.length === 1
            ? movieTopRated.map((movie) => ` ${movie.release_date}`)
            : movieNetflixOriginals.map((movie) => ` ${movie.release_date}`)}
        </span>
        <br />
        <br />
        <strong>Overview : </strong>
        <span>
          {movieTrendMo && movieTrendMo.length === 1
            ? movieTrendMo.map((movie) => ` ${movie.overview}`)
            : movieTopRated.length === 1
            ? movieTopRated.map((movie) => ` ${movie.overview}`)
            : movieNetflixOriginals.map((movie) => ` ${movie.overview}`)}
        </span>
        <br />
        <br />
        <strong>Vote Count : </strong>
        <span>
          {movieTrendMo && movieTrendMo.length === 1
            ? movieTrendMo.map((movie) => ` ${movie.vote_count}`)
            : movieTopRated.length === 1
            ? movieTopRated.map((movie) => ` ${movie.vote_count}`)
            : movieNetflixOriginals.map((movie) => ` ${movie.vote_count}`)}
          <IoPersonOutline />
        </span>
        <br />
        <br />
        <strong>Vote Average : </strong>
        <span>
          {movieTrendMo && movieTrendMo.length === 1
            ? movieTrendMo.map((movie) => ` ${movie.vote_average}`)
            : movieTopRated.length === 1
            ? movieTopRated.map((movie) => ` ${movie.vote_average}`)
            : movieNetflixOriginals.map((movie) => ` ${movie.vote_average}`)}
          <IoStarHalfSharp />
        </span>
        <br />
        <br />
        <a
          href={`https://themoviedb.org/${
            movieTrendMo && movieTrendMo.length === 1
              ? movieTrendMo.map((movie) => `${movie.media_type}`)
              : movieTopRated.length === 1
              ? movieTopRated.map((movie) => `${movie.media_type}`)
              : movieNetflixOriginals.map((movie) => `${movie.media_type}`)
          }/${
            movieTrendMo && movieTrendMo.length === 1
              ? movieTrendMo.map((movie) => `${movie.id}`)
              : movieTopRated.length === 1
              ? movieTopRated.map((movie) => `${movie.id}`)
              : movieNetflixOriginals.map((movie) => `${movie.id}`)
          }`}
        >
          Watch Now
        </a>
      </div>
      <div className="content">
        <div className="moviesList">
          <h3>Top Rated</h3>
          <div className="topRated">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {topRated &&
                topRated.map((movie) => (
                  <SwiperSlide key={movie.id}>
                    <div className="movie">
                      <img
                        src={imgApi + movie.poster_path}
                        alt={movie.name ? movie.name : movie.title}
                      />
                      <div className="desc">
                        <h3>{movie.name ? movie.name : movie.title}</h3>
                        <h4>Vote :{movie.vote_average}</h4>
                        <Link to={`/movie/${movie.id}`}>Watch Now</Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
