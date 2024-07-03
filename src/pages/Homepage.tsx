//import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../routes/routes";

const Homepage = () => {
  return (
    <div className="bg-black h-screen	flex justify-center items-center flex-col gap-10">
      <h1 className="text-5xl font-bold">LINGUALEARNER</h1>
      <button className="w-32 h-10 rounded bg-purple-800 hover:bg-slate-600">
        <Link to={PATH.APP}>Get Started</Link>
      </button>
    </div>
  );
};

export default Homepage;
