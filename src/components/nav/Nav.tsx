import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import ham from "../../assets/ham.svg";
import close from "../../assets/close.svg";
import { useQuery,useMutation } from "../../../convex/_generated";




const Nav = () => {

  const navState = useQuery("getnavUse");
  console.log(navState);


  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const [width, height] = useWindowSize();
  const [showSidebar, setShowSidebar] = useState(false);
  
  // className={`${ showSidebar ? "block" : "hidden" }`}
  return <nav >
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
    <ul className="">
      <Link className="btn3d-a glow" to="/">
        <li className="z-50 btn3d-li"> Home</li>
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
</div>
</nav>
 
  
};

export default Nav;
