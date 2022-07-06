import React, { useContext, useState } from "react";
import { useFirebase } from "../adapters/firebase";

import project from "../contexts/project.json";
import Nav from "../components/Nav";
import menu from "../contexts/menu.json";
import { Link } from "react-router-dom";
import { Firestore } from "../contexts/storage";
import { saveAs } from "file-saver";

const Home = () => {
  let { setProject, getProject, getAllProject } = useFirebase();

  const [showSidebar, setShowSidebar] = useState(false);
  // const setData = setProject(project);
  // console.log(setData);
  // const getData = getAllProject();
  // console.log(getData);
  const list = menu;
  const saveFile = () => {
    saveAs(
     Firestore.resumepdf,
      "ITTIPOL_RESUME.pdf"
    );
  };
  return (
    <div className="h-screen lg:container mx-auto flex px-5 py-24 md:flex-row flex-col items-center border-red-900 border-2">
      <div className="w-1/3">
        <ul className="flex flex-col-reverse">
          {list.map(({ display, url, picurl }, index) => {
            return (
              <Link
                key={index}
                className="hover:text-white text-center text-white block uppercase tracking-wider glow"
                to={url}
              >
                <li
                  className="relative p-[10px] duration-500 
                  hover:bg-normal hover:scale-x-110 hover:duration-500 
                  w-[50px] lg:w-[200px] sm:w-[100px] sm:p-[15px] hover:lg:translate-x-[20px] hover:md:translate-x-[15px] hover:translate-x-[5px]
                  before:absolute before:top-0 before:left-[-10px] before:w-[10px] before:h-full before:bg-head before:brightness-75 before:origin-right
                  before:hover:bg-normal before:hover:brightness-75
                   "
                >
                  <span className="hover:scale-x-100">{display}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="w-2/3 flex flex-row">first
      <a href={Firestore.resumepdf}>Resume</a>
      <button onClick={saveFile}>download</button>
      </div>
     
    </div>
  );
};
export default Home;
