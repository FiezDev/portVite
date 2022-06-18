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
            <Link key={list[0].id} className="btn3d-a glow" to={list[0].url}>
              <li id="listmenu" className="btn3d-li z-50">
                {navContentSwitch(list[0].display, list[0].picurl)}
              </li>
            </Link>
            <Link key={list[1].id} className="btn3d-a glow" to={list[1].url}>
              <li id="listmenu" className="btn3d-li z-40">
                {navContentSwitch(list[1].display, list[1].picurl)}
              </li>
            </Link>
            <Link key={list[2].id} className="btn3d-a glow" to={list[2].url}>
              <li id="listmenu" className="btn3d-li z-30">
                {navContentSwitch(list[2].display, list[2].picurl)}
              </li>
            </Link>
            <Link key={list[3].id} className="btn3d-a glow" to={list[3].url}>
              <li id="listmenu" className="btn3d-li z-20">
                {navContentSwitch(list[3].display, list[3].picurl)}
              </li>
            </Link>
            <Link key={list[4].id} className="btn3d-a glow" to={list[4].url}>
              <li id="listmenu" className="btn3d-li z-10">
                {navContentSwitch(list[4].display, list[4].picurl)}
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
