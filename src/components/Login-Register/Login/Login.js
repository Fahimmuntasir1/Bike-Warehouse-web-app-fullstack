import React from "react";
import { Link } from "react-router-dom";
import WithGoogle from "../Social-Login/WithGoogle";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form className="">
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <div className=" submit-btn ">
          <input type="submit" value="Log In" />
        </div>
        <p className="text-center">
          Already user?{" "}
          <Link to="/register" role="button" className="text-danger">
            Register
          </Link>
        </p>
      </form>
      <WithGoogle/>
    </div>
  );
};

export default Login;
