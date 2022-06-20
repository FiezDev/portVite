import React from "react";
import { _firebase } from "../adapters/firebase";
import project from "../contexts/project.json"

const Home = () => {
  let { setProject,getProject,getAllProject } = _firebase();
  // const setData = setProject(project);
  // console.log(setData);
  const getData = getAllProject();
  console.log(getData);


  return <div>Home</div>;
};
export default Home;
