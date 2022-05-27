import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white" href="..">
            About Me
          </a>
          <a className="mr-5 hover:text-white" href="..">
            Experience
          </a>
          <a className="mr-5 hover:text-white" href="..">
            My Work
          </a>
          <a className="mr-5 hover:text-white" href="..">
            Contact
          </a>
        </nav>
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Nav;
