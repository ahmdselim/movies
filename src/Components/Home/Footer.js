import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../images/logo.webp";
import Image1 from "../images/1.webp";
import Image2 from "../images/2.webp";
import Image3 from "../images/3.webp";
import Image4 from "../images/4.webp";
import Image5 from "../images/5.webp";
import Image6 from "../images/6.webp";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
const Footer = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const handleGo = (section) => {
    window.location.replace(`/#${section.target.firstChild.data}`);
  };
  return (
    <div className="footer">
      <div className="left">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <p>
          With a search first mentality across digital marketing, our passionate
          consulting team is hands-on to help conquer anything
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/ahmdselimeg">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="https://github.com/ahmdselim">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://ahmdselim.github.io/profile">
              <BsGlobe />
            </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <li onClick={(section) => handleGo(section)}>TopRated</li>
          <li onClick={(section) => handleGo(section)}>ActionMovies</li>
          <li onClick={(section) => handleGo(section)}>RomanceMovies</li>
          <li onClick={(section) => handleGo(section)}>ComedyMovies</li>
        </ul>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop="true"
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
            {images &&
              images.map((item) => (
                <SwiperSlide key={item}>
                  <img src={item} alt="logo" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>Copyright © 2022 All right reserve</p>
    </div>
  );
};

export default Footer;
