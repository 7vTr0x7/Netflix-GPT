import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const msg = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value
    );

    
    setErrorMessage(msg);
  };

  const toggleForm = () => {
    setIsSignInFrom(!isSignInFrom);
  };

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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black absolute p-12 w-4/12 my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl pt-4 pb-8 ml-4 ">
            {isSignInFrom ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInFrom && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="mb-4 p-3 w-11/12 ml-4 rounded-md bg-[#333] border border-b-[#e50914]"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="mb-4 p-3 w-11/12 ml-4 rounded-md bg-[#333] border border-b-[#e50914]"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="mb-4 p-3 w-11/12 ml-4 rounded-md bg-[#333] border border-b-[#e50914]"
          />
          <p className="text-[#EB3932]  ml-5">{errorMessage}</p>
          <button
            className="p-2 mt-8 mb-4 font-semibold text-lg bg-[#e50914] w-11/12 ml-4 rounded-md"
            onClick={handleButtonClick}>
            {isSignInFrom ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex text-lg">
            <p className="ml-5 mr-2 text-[#737373]">
              {isSignInFrom ? "New to Netflix?" : "Already Registered?"}
            </p>
            <p onClick={toggleForm} className="cursor-pointer hover:underline">
              {isSignInFrom ? "Sign In Now" : "Sign Up Now"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
