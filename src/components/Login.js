import { Button } from "@material-ui/core";
import React from "react";
import "../styles/Login.css";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://toppng.com/uploads/preview/slack-new-logo-icon-11609376883z32jbkf8kg.png"></img>
        <h1>Sign in to the slack clone</h1>
        <Button onClick={signIn} className="login__button">
          Sign in With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
