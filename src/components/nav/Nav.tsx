import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <header className="text-white bg-bg body-font sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:mr-auto relative skew-y-15 flex flex-wrap items-center text-base justify-between">
          <button className="btn-skew btn-before-skew">
            <a href="..">About Me</a>
          </button>
          <button className="btn-skew btn-before-skew">
            <a href="..">Experience</a>
          </button>
          <button className="btn-skew">
            <a href="..">My Work</a>
          </button>
          <button className="btn-skew">
            <a href="..">Contact</a>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
