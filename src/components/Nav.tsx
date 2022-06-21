import React, { useContext, useState } from "react";
import { useQuery, useMutation } from "../../convex/_generated";
import { Link } from "react-router-dom";
import _function from "../adapters/function";
import { Menu } from "../contexts/model";
import ham from "../assets/ham.svg";
import close from "../assets/close.svg";
import "../styles/global.css";

const Nav = () => {
  let { windowSize } = _function();
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
    <nav>
      {showSidebar ? (
        <img
          className="flex w-[25px] sm:w-[35px] lg:w-[50px] z-[70] items-center fixed left-4 top-4 sm:left-7 sm:top-7 duration-500"
          onClick={() => setShowSidebar(!showSidebar)}
          src={close}
          width="50px"
          alt=""
        />
      ) : (
        <img
          onClick={() => setShowSidebar(!showSidebar)}
          className="flex w-[25px] sm:w-[35px] lg:w-[50px] z-[70] items-center fixed left-4 top-4 sm:left-7 sm:top-7 duration-500"
          src={ham}
          width="40px"
          alt=""
        />
      )}
      <div className="top-0 left-0 text-white fixed h-full z-30 " >
        <nav
          className={`z-20 fixed top-2/4 -translate-y-[calc(50%+3vh)] ${
            showSidebar ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col-reverse">
            {list.map((item, index) => {
              return ( 
                <Link key={index} className="hover:text-white text-center text-white block uppercase tracking-wider	duration-500 glow" to={item.url}>
                  <li className="relative p-[10px] bg-head duration-500 w-[50px] 
    hover:bg-normal hover:-translate-x-[-20px] 
    before:absolute before:top-0 before:left-[-10px] before:w-[10px] before:h-full before:bg-head before:brightness-75 before:origin-right before:skew-y-[45deg] before:duration-500
    after:absolute after:top-[-10px] after:left-0 after:w-full after:h-[10px] after:bg-head after:brightness-90 after:origin-bottom after:skew-x-[45deg] after:duration-500
    before:hover:bg-normal before:hover:brightness-75
    after:hover:bg-normal after:hover:brightness-90
    lg:w-[200px] sm:w-[100px] sm:p-[15px]">                
                    {windowSize() >= 640 ? item.display : <i className={`align-middle ${item.picurl}`} />}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
