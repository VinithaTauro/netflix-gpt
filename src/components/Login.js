import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
          alt="bg-image"
        ></img>
      </div>
      <form className="w-4/12 mx-auto right-0 left-0 my-36 absolute bg-black p-20  text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-2 my-4 w-full">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="bg-gray-800 p-4 my-4  w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="bg-gray-800 p-4 my-4  w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-800 p-4  my-4 w-full"
        />
        <button className="bg-red-600 rounded-lg p-4  my-4 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 w-full cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already registered! Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
