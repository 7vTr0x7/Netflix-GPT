import React from "react";
import logo from "../utils/images/logo.png";
import userIcon from "../utils/images/user.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-52 h-24" src={logo} alt="logo" />

      {user && (
        <div className="flex p-3">
          <img
            className="h-12 w-12 rounded-lg m-3"
            alt="user"
            src={user.photoURL}
          />
          <button
            className="text-[#e50914] font-bold text-xl"
            onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
