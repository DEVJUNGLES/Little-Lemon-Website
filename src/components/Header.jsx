import React from "react";
import bannerImg from "../images/restauranfood.jpg";
const Header = () => {
  return (
    <div>
      <header className="header">
        <section>
          <div className="banner">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>

            <p>
              We are a family owned mediterranean restaurant, focused on
              traditional recipes served with a modern twist
            </p>
            <a href="/booking">
              <button aria-label="Reserve Table">Reserve Table</button>
            </a>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
