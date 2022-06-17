import React from 'react'
import { useMutation } from "../../../convex/_generated";

const Home = () => {
  const navState = useMutation("addnavUse");
  return (
    <div>Home</div>
  )
}

export default Home