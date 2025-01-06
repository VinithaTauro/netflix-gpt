import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <img className="w-44" src={LOGO} alt="logo"></img>
      </div>
      {user && (
        <div className="flex">
          <img
            className="w-12 h-12 my-2 rounded-lg"
            src={user?.photoURL}
            alt="user-icon"
          ></img>
          <button onClick={handleSignOut} className="text-white font-bold">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
