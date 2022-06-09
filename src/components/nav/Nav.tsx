import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="z-50 fixed top-2/4 -translate-y-[calc(50%+3vh)]">
      <ul className="skew-y-[-15deg]">
      <Link className="btn3d-a glow" to="/">
          <li className="z-50 btn3d-li">Home</li>
        </Link>
        <Link className="btn3d-a glow" to="/about">
          <li className="z-40 btn3d-li">About</li>
        </Link>
        <Link className="btn3d-a glow" to="/skills">
          <li className="z-30 btn3d-li">Skill</li>
        </Link>
        <Link className="btn3d-a glow" to="/works">
          <li className="z-20 btn3d-li">Works</li>
        </Link>
        <Link className="btn3d-a glow" to="/contact">
          <li className="z-10 btn3d-li">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
