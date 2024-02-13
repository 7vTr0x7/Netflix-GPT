import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div className="flex justify-center ">
        <form className="bg-black absolute p-12 w-4/12 my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl pt-4 pb-8 ml-4 ">Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-3 w-11/12 ml-4 rounded-md bg-[#333]"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-3 w-11/12 ml-4 rounded-md bg-[#333]"
          />
          <button className="p-2 mt-8 mb-4 font-semibold text-lg bg-[#e50914] w-11/12 ml-4 rounded-md">
            Sign In
          </button>
          <div className="flex">
            <p className="ml-4 mr-2 text-[#737373]">New to Netflix?</p>
            <p>Sign up Now</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
