import React from "react";

const Cover: React.FC = () => {
  return (
    <section className="home" id="home">
      <h1 className="home-parallax" data-speed="-2">
        Find A Car For You
      </h1>
      <img src="/cover.jpeg" alt="" className="home-parallax" data-speed="5" />
      <a href="/inventory" className="btn home-parallax" data-speed="7">
        Explore Our Inventory
      </a>
    </section>
  );
};

export default Cover;
