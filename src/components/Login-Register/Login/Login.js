import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../Firebase/firebase.init";
import WithGoogle from "../Social-Login/WithGoogle";
import "./Login.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, firebaseError] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleEmailChange = (e) => {
    const validEmail = /\S+@\S+\.\S+/.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    const validPassword =
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(
        e.target.value
      );
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({
        ...errors,
        password:
          "The passwords consist of a combination of uppercase and lowercase letters, numbers and special symbols and length will be minimum 6 Character !!!",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const email = userInfo.email;
    const password = userInfo.password;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://warehouse-management-webapp.onrender.com/getToken",
      {
        email,
      }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  const resetPassword = async () => {
    if (userInfo.email) {
      await sendPasswordResetEmail(userInfo.email);
      toast("Sent email");
    } else {
      toast("Please enter a valid email for reset password");
    }
  };

  useEffect(() => {
    if (user) {
      // navigate(from, { replace: true });
    }
  }, [user]);

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form className="" onSubmit={handleUserSubmit}>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        {errors?.email && <p className="error-text">{errors.email}</p>}
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        {errors?.password && <p className="error-text">{errors.password}</p>}
        <div className=" submit-button ">
          <input type="submit" value="Log In" />
        </div>
        {firebaseError && (
          <p className="error-text">{firebaseError?.message}</p>
        )}
        <p className="text-center">
          New in Zero Biker ?{" "}
          <Link to="/register" role="button" className="text-danger">
            Register Now
          </Link>
        </p>
        <p className="text-center">
          Forget Password??{" "}
          <Link
            to=""
            onClick={resetPassword}
            role="button"
            className="text-danger"
          >
            Reset Now
          </Link>
        </p>
      </form>
      <WithGoogle />
    </div>
  );
};

export default Login;
