import React from "react";
import { useFirebase } from "../adapters/firebase";
import project from "../contexts/project.json"

const Home = () => {
  let { setProject,getProject,getAllProject } = useFirebase();
  // const setData = setProject(project);
  // console.log(setData);
  // const getData = getAllProject();
  // console.log(getData);


  return <div>Home</div>;
};
export default Home;
