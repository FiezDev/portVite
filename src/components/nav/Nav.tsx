import React from "react";
import { useState } from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="fixed top-2/4 -translate-y-[calc(50%+3vh)]">
      <ul className="skew-y-[-15deg]">
        <li className="z-50 btn3d-li">
          <a className="btn3d-a glass" href="#about">
            About
          </a>
        </li>
        <li className="z-40 btn3d-li">
          <a className="btn3d-a glass" href="#skills">
            Skill
          </a>
        </li>
        <li className="z-30 btn3d-li">
          <a className="btn3d-a glass" href="#work">
            Work
          </a>
        </li>
        <li className="z-20 btn3d-li">
          <a className="btn3d-a glass" href="#contact">
            Contact
          </a>
        </li>
        <a className="btn3d-a glass" href="#social">
        <li className="z-10 btn3d-li">
            Social
        </li>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
