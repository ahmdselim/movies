import React, { useState, useEffect } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Request from "../../Api/Request";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Content = () => {
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
  return (
    <div className="content">
      <div className="trial">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {trendMo &&
            trendMo.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div>
                  <img
                    src={imgApi + movie.poster_path}
                    alt={movie.name ? movie.name : movie.title}
                  />
                  <div>
                    <h1>{movie.name ? movie.name : movie.title}</h1>
                    <p>
                      <strong>overview</strong> :{movie.overview}
                    </p>
                    <p>
                      Voting : <strong>{movie.vote_average}</strong>
                    </p>

                    <Link to={`/movie/${movie.id}`}>Watch Now</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <section id="TopRated" className="moviesList">
        <h3>Top Rated</h3>
        <div className="topRated">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
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
      </section>

      <div id="ActionMovies" className="moviesList">
        <h3>Action Movies</h3>
        <div className="topRated">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
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
            {NetflixOriginals &&
              NetflixOriginals.map((movie) => (
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

      <div className="trial">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {topRated &&
            topRated.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div>
                  <img
                    src={imgApi + movie.poster_path}
                    alt={movie.name ? movie.name : movie.title}
                  />
                  <div>
                    <h1>{movie.name ? movie.name : movie.title}</h1>
                    <p>
                      Voting : <strong>{movie.vote_average}</strong>
                    </p>
                    <Link to={`/movie/${movie.id}`}>Watch Now</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div id="RomanceMovies" className="moviesList">
        <h3>Romance Movies</h3>
        <div className="topRated">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
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
            {trendMo &&
              trendMo.map((movie) => (
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

      <div id="ComedyMovies" className="moviesList">
        <h3>Comedy Movies</h3>
        <div className="topRated">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
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
  );
};

export default Content;
