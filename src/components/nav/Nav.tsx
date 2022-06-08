import React from "react";
import { useState } from "react";
import "./nav.css";


  const Nav = () => {
    const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='absolute left-0 top-0'> 
          <ul className="skew-y-[-15deg]">

            <li className="z-50 btn3d-li">
              <a className="btn3d-a" href="#">
                <span className="btn3d-span">
                  <i className="fa-brands fa-facebook-f"></i>
                </span>
                Facebook
              </a>
            </li>
            <li className="z-40 btn3d-li">
              <a className="btn3d-a" href="#">
                <span className="btn3d-span">
                  <i className="fa-brands fa-whatsapp"></i>
                </span>
                Whatsapp
              </a>
            </li>
            <li className="z-30 btn3d-li">
              <a className="btn3d-a" href="#">
                <span className="btn3d-span">
                  <i className="fa-brands fa-twitter"></i>
                </span>
                Twitter
              </a>
            </li>
            <li className="z-20 btn3d-li">
              <a className="btn3d-a" href="#">
                <span className="btn3d-span">
                  <i className="fa-brands fa-instagram"></i>
                </span>
                Instagram
              </a>
            </li>
            <li className="z-10 btn3d-li">
              <a className="btn3d-a" href="#">
                <span className="btn3d-span">
                  <i className="fa-brands fa-youtube"></i>
                </span>
                Youtube
              </a>
            </li>
            <li className="z-0 btn3d-li">
              <a className="btn3d-a" href="#">
                <span className="btn3d-span">
                  <i className="fa-brands fa-linkedin"></i>
                </span>
                Linkedin
              </a>
            </li>
          </ul>
    </div>
  );
}


export default Nav;
