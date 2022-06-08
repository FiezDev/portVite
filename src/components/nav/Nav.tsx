import React from "react";
import { useState } from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="fixed top-2/4 -translate-y-[calc(50%+3vh)]">
      <ul className="skew-y-[-15deg]">
        <li className="z-50 btn3d-li">
          <a className="btn3d-a glass" href="#">
            About
          </a>
        </li>
        <li className="z-40 btn3d-li">
          <a className="btn3d-a glass" href="#">
            Skill
          </a>
        </li>
        <li className="z-30 btn3d-li">
          <a className="btn3d-a glass" href="#">
            Work
          </a>
        </li>
        <li className="z-20 btn3d-li">
          <a className="btn3d-a glass" href="#">
            Contact
          </a>
        </li>
        <li className="z-10 btn3d-li">
          <a className="btn3d-a glass" href="#">
            Social
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
