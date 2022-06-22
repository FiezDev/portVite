import React, { useContext, useState } from "react";
import { useQuery, useMutation } from "../../convex/_generated";
import { Link } from "react-router-dom";
import useFunction from "../adapters/function";
import { Menu } from "../contexts/model";
import ham from "../assets/ham.svg";
import close from "../assets/close.svg";
import "../styles/global.css";

const Nav = () => {
  let { windowSize } = useFunction();
  const [showSidebar, setShowSidebar] = useState(false);

  //by order of apperance affect z-index ***firstmenu = last in list***
  const list: { display: string; url: string; picurl: string }[] = [
    Menu("Contact", "/contact", "fa-solid fa-address-book"),
    Menu("Work", "/works", "fa-solid fa-laptop-file"),
    Menu("Skill", "/skills", "fa-solid fa-user-gear"),
    Menu("About", "/about", "fa-solid fa-address-card"),
    Menu("Home", "/", "fa-solid fa-house-chimney"),
  ];

  return (
    <>
      {showSidebar ? (
        <img
          className="flex w-[25px] sm:w-[35px] lg:w-[40px] z-[70] items-center fixed left-3 top-4 sm:left-8 sm:top-7 duration-500"
          onClick={() => setShowSidebar(!showSidebar)}
          src={close}
          alt=""
        />
      ) : (
        <img
          onClick={() => setShowSidebar(!showSidebar)}
          className="flex w-[25px] sm:w-[35px] lg:w-[40px] z-[70] items-center fixed left-3 top-4 sm:left-8 sm:top-7 duration-500"
          src={ham}
          alt=""
        />
      )}
      <nav className="glass top-0 text-white fixed h-screen z-30 lg:w-[200px] sm:w-[100px] -left-[50px] lg:-left-[200px] sm:-left-[100px] ">
        <div
          className={`glass z-20 fixed pt-40  h-screen ease-in-out duration-300
        ${!showSidebar ? "translate-x-0 " : "translate-x-full"}`}>

          <ul className="flex flex-col-reverse">
            {list.map(({ display, url, picurl }, index) => {
              return (
                <Link
                  key={index}
                  className="hover:text-white text-center text-white block uppercase tracking-wider glow"
                  to={url}
                >
                  <li className="relative p-[10px] duration-500 
                  hover:bg-normal   hover:scale-x-110 hover:duration-500 
                  w-[50px] lg:w-[200px] sm:w-[100px] sm:p-[15px] hover:lg:translate-x-[20px] hover:md:translate-x-[15px] hover:translate-x-[5px]
                  before:absolute before:top-0 before:left-[-10px] before:w-[10px] before:h-full before:bg-head before:brightness-75 before:origin-right
                  before:hover:bg-normal before:hover:brightness-75
                   ">
                    {windowSize() >= 640 ? (
                      <span className="hover:scale-x-100">{display}</span>
                    ) : (
                      <i className={`hover:scale-x-100 align-middle ${picurl}`} />
                    )}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
