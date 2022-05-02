import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import WithGoogle from "../Social-Login/WithGoogle";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [createUserWithEmailAndPassword, user, loading, firebaseError] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

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
  const handleConfirmPassword = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({
        ...errors,
        password: "Password don't match",
      });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  return (
    <div className="login-form">
      <h1>Register</h1>
      <form onSubmit={handleUserSubmit}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter Name"
          required
        />
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
        <input
          onChange={handleConfirmPassword}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />
        <div className=" submit-btn ">
          <input type="submit" value="Sign Up" />
        </div>
        {firebaseError && (
          <p className="error-text">{firebaseError?.message}</p>
        )}
        <p className="text-center">
          Already user?{" "}
          <Link to="/login" role="button" className="text-danger">
            Log In
          </Link>
        </p>
      </form>
      <WithGoogle />
    </div>
  );
};

export default Register;
