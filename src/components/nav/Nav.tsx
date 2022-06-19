import React, { useLayoutEffect, useState } from "react";
import { useQuery, useMutation } from "../../../convex/_generated";
import { Link } from "react-router-dom";
import _function from "../../function";
import { Menu } from "../../model";
import "./nav.css";
import ham from "../../assets/ham.svg";
import close from "../../assets/close.svg";

const Nav = () => {
  let { windowSize } = _function();
  const [showSidebar, setShowSidebar] = useState(false);

  const list: { id: number; display: string; url: string; picurl: string }[] = [
    Menu(1, "Home", "/", ham),
    Menu(2, "About", "/about", ham),
    Menu(3, "Skill", "/skills", ham),
    Menu(4, "Work", "/works", ham),
    Menu(5, "Contact", "/contact", ham),
  ];

  function navContentSwitch(text: string, url: string) {
    return windowSize() >= 640 ? (
      text
    ) : (
      <img width="20px" alt="smallicon" src={url} />
    );
  }

  return (
    <nav>
      {showSidebar ? (
        <img
          className="flex z-30 items-center fixed left-5 top-5"
          onClick={() => setShowSidebar(!showSidebar)}
          src={close}
          width="50px"
          alt=""
        />
      ) : (
        <img
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer left-5 top-5"
          src={ham}
          width="40px"
          alt=""
        />
      )}
      <div className="top-0 left-0 text-white fixed h-full z-40">
        <nav
          className={`z-50 fixed top-2/4 -translate-y-[calc(50%+3vh)] ${
            showSidebar ? "block" : "hidden"
          }`}
        >
          <ul className=" ">
          {list.map(item => {
        return <Link key={item.id} className="btn3d-a glow" to={item.url}>
        <li className={`btn3d-li z-${(list.length - item.id)*10}`}>{navContentSwitch(item.display,item.picurl)}</li>
      </Link>})}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
