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

  const list: { id: number; display: string; url: string; picurl: string }[] = [
    Menu(1, "Home", "/", "fa-solid fa-house-chimney"),
    Menu(2, "About", "/about", "fa-solid fa-address-card"),
    Menu(3, "Skill", "/skills", "fa-solid fa-user-gear"),
    Menu(4, "Work", "/works", "fa-solid fa-laptop-file"),
    Menu(5, "Contact", "/contact", "fa-solid fa-address-book"),
  ];

  function navContentSwitch(text: string, url: string) {
    return windowSize() >= 640 ? (
      text
    ) : (
      <i className={`p-0 align-middle ${url}`} />
    );
  }

  return (
    <nav>
      {showSidebar ? (
        <img
          className="flex w-[25px] sm:w-[35px] lg:w-[50px] z-[70] items-center fixed left-4 top-4 sm:left-7 sm:top-7"
          onClick={() => setShowSidebar(!showSidebar)}
          src={close}
          width="50px"
          alt=""
        />
      ) : (
        <img
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-[70] flex items-center cursor-pointer left-5 top-5"
          src={ham}
          width="40px"
          alt=""
        />
      )}
      <div className="top-0 left-0 text-white fixed h-full z-[70]">
        <nav
          className={`z-[60] fixed top-2/4 -translate-y-[calc(50%+3vh)] ${
            showSidebar ? "block" : "hidden"
          }`}
        >
          <ul className=" ">
            {" "}
            {list.map((item) => {
              return (
                <Link key={item.id} className="btn3d-a glow" to={item.url}>
                  <li className={`btn3d-li z-${(list.length - item.id) * 10}`}>
                    {navContentSwitch(item.display, item.picurl)}
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
