import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  function validateLogin(event) {
    event.preventDefault();
    let x = document.forms["loginForm"]["fname"].value;
    let y = document.forms["loginForm"]["pass"].value;

    if (x === "") {
      alert("Username is empty!!!");
      return false;
    }
    if (y === "") {
      alert("Password is empty!!!");
      return false;
    }

    // Submit form if validation passes
    document.forms["loginForm"].submit();
  }

  return (
    <div className="login-container">
      <div className="logo-area">
        <div className="logo-img">
          <img
            src="${process.env.PUBLIC_URL}/util/logo.jpeg"
            alt="Pawfect Haven Logo"
          />
        </div>
        <div className="logo">
          <h1>Pawfect Haven</h1>
        </div>
      </div>
      <h1>Welcome Back!</h1>
      <form id="loginForm" name="loginForm" onSubmit={validateLogin}>
        <span className="outer-text">Username</span>
        <input
          type="email"
          id="email"
          name="fname"
          placeholder="Enter your email"
        />

        <span className="outer-text">Password</span>
        <input
          type="password"
          id="password"
          name="pass"
          placeholder="Enter your password"
        />

        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <button type="submit">Login</button>
        <div className="social-login">
          <p>Or login with</p>
          <div className="icons">
            <button className="social-btn">
              <img
                src="${process.env.PUBLIC_URL}/util/google-mail-icon-logo-isolated-on-transparent-background-free-vector.jpg"
                alt="Google"
              />
            </button>
            <button className="social-btn">
              <img src="${process.env.PUBLIC_URL}/util/facebook-logo.png" alt="Facebook" />
            </button>
            <button className="social-btn">
              <img src="${process.env.PUBLIC_URL}/util/ig-logo.jpg" alt="Instagram" />
            </button>
            <button className="social-btn">
              <img src="${process.env.PUBLIC_URL}/util/x-logo.webp" alt="Twitter" />
            </button>
          </div>
        </div>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default Login;
