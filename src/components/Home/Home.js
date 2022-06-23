import React from "react";
import "./Home.css";
import homepage from "../../images/homepage.jpg"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={homepage} alt="homepage"
        />
      </div>
    </div>
    );
};

export default Home;