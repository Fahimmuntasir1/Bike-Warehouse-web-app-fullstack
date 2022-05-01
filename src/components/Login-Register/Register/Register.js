import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <h1>Register</h1>
      <form>
        <input type="text" name="name" id="" placeholder="Enter Name" />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />
        <div className=" submit-btn ">
          <input type="submit" value="Sign Up" />
        </div>
        <p className="text-center">
          Already user?{" "}
          <Link to="/login" role="button" className="text-danger">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
