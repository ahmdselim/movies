import React from "react";
import Footer from "../../Components/Home/Footer";
import Head from "../../Components/Home/Head";
import Movie from "../../Components/Movie/Movie";
import "./style.css";

const MoviePage = () => {
  return (
    <div className="container">
      <Head />
      <Movie />
      <Footer />
    </div>
  );
};

export default MoviePage;
