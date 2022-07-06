import React from "react";

const Footer = () => {
  return (
    <footer className="fixed z-50 inset-x-0 bottom-0 text-gray-400 bg-head w-full body-font">
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="mx-3 pr-3 text-xl uppercase border-r-[1px]">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <span>Ittpol Vongapai Portfolio</span>              
            </a>
          </span>
          <span className="inline-flex sm:mt-0 mt-4 justify-start sm:justify-start">
            <a
              className="text-gray-400"
              href="https://github.com/FiezDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a
              className="ml-3 text-gray-400"
              href="https://codepen.io/fiezdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-codepen" aria-hidden="true"></i>
            </a>
          </span>
        </div>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-start sm:justify-start">
        <span className="mx-3 pr-3 text-xl uppercase border-r-[1px]">This Site Use</span>  

          <a
            className="text-gray-400"
            href="https://github.com/FiezDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a
            className="ml-3 text-gray-400"
            href="https://codepen.io/fiezdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-codepen" aria-hidden="true"></i>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
