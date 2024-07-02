import React from "react";
import notfound from "../assets/404.jpeg";
import { Link } from "react-router-dom";
import { PATH } from "../routes/routes";

export const ErrorPage = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center flex-col gap-5">
      <img className="h-80 w-80 rounded-xl" src={notfound}></img>
      <h2 className="text-lg">Something's not right...</h2>
      <button className="w-32 h-10 rounded bg-purple-800 hover:bg-slate-600">
        <Link to={PATH.MAIN}>Go Back</Link>
      </button>
    </div>
  );
};
