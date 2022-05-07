import React from "react";
import Head from "../../Components/Home/Head";
import Content from "../../Components/Home/Content";
import Footer from "../../Components/Home/Footer";
import "./style.css";

const HomePage = () => {
  return (
    <div className="container">
      <Head />
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;
