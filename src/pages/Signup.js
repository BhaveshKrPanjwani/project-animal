import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const validateForm = (e) => {
    e.preventDefault();
    console.log("Running validation...");

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (fullName === "") {
      alert("Name must be filled out");
      return;
    }
    if (email === "") {
      alert("Email must be filled out");
      return;
    }
    if (password === "") {
      alert("Password must be filled out");
      return;
    }
    if (confirmPassword === "") {
      alert("Confirm password must be filled out");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Sign Up Successful!"); // Replace with actual sign-up logic
  };

  return (
    <div className="sign-up_body">
      <div className="background-sign"></div>
      <div className="form-container">
        <div className="logo-area">
          <div className="logo-img">
            <img
              src={process.env.PUBLIC_URL+"/util/logo.jpeg"}
              alt="Pawfect Haven Logo"
            />
          </div>
          <div className="logo">
            <h1>Pawfect Haven</h1>
          </div>
        </div>
        <h1>Create an Account</h1>
        <form id="signupForm" name="signupForm" onSubmit={validateForm}>
          <input type="text" id="fullName" name="fname" placeholder="Full Name" />
          <input type="email" id="email" name="email" placeholder="Enter your email" />
          <input type="password" id="password" name="pass" placeholder="Create a password" />
          <input type="password" id="confirmPassword" name="conf-pass" placeholder="Confirm password" />

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
          </div>

          <button type="submit">Sign Up</button>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
