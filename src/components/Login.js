import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData, checkValidName } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/useSlice";
import userIcon from "../utils/images/user.png";
import { BACKGROUND_IMAGE } from "../utils/constant";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInFrom) {
      const msg = checkValidName(name.current.value);
      if (msg) return;

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: userIcon,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleForm = () => {
    setIsSignInFrom(!isSignInFrom);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="background-img" src={BACKGROUND_IMAGE} />
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
              {isSignInFrom ? "Sign Up Now" : "Sign In Now"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
