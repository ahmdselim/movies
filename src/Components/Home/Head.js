import React, { useState } from "react";
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../images/logo.webp";

const Head = () => {
  const [open, setOpen] = useState(true);
  const handleGo = (section) => {
    window.location.replace(`/#${section.target.firstChild.data}`);
  };
  return (
    <div className="nav">
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul>
        <li onClick={(section) => handleGo(section)}>TopRated</li>
        <li onClick={(section) => handleGo(section)}>ActionMovies</li>
        <li onClick={(section) => handleGo(section)}>RomanceMovies</li>
        <li onClick={(section) => handleGo(section)}>ComedyMovies</li>
      </ul>
      <ul>
        <li>
          <input
            type="text"
            placeholder="Search"
            style={
              open
                ? { display: "none" }
                : {
                    display: "block",
                    width: "100%",
                    transform: "translate(0px, 3px)",
                    padding: "8px 10px",
                    borderRadius: "3px",
                    border: "1px solid #DDD",
                  }
            }
          />
        </li>
        <li>
          <IoSearchCircleOutline
            style={open ? { display: "block" } : { display: "none" }}
            onClick={() => setOpen(!open)}
          />
          <IoClose
            style={open ? { display: "none" } : { display: "block" }}
            onClick={() => setOpen(!open)}
          />
        </li>
        <li>
          <button>Subscribe Now</button>
        </li>
      </ul>
    </div>
  );
};

export default Head;
