import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase.js";

function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <div className="login-content">
        <img
          src="https://assets.entrepreneur.com/content/3x2/2000/20190211224126-quora-logo-crop.jpeg"
          alt="logo"
        />
        <button onClick={handleSubmit} className="btn-login">
          Login to continue
        </button>
      </div>
    </div>
  );
}

export default Login;