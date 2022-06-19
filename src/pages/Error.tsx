import React,{ useLayoutEffect, useState }  from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <p className="text-7xl text-white mb-10">404</p>
      <p className="text-base text-white mb-10">Someone is Lost..</p>
      <Link className="text-4xl" to="/">
      <button className="btn-primary" ><li >Go back</li></button>
      </Link>
    </div>
  );
};

export default Error;
