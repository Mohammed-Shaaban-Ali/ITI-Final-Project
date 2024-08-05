import React, { useState } from "react";
import "./UserLoginForm.css"; // Import the CSS file
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => (
  <div className="social-container">
    <div aria-label="Facebook" role="button">
      <FaFacebookF />
    </div>
    <div aria-label="Google Plus" role="button">
      <FaGooglePlusG />
    </div>
    <div aria-label="LinkedIn" role="button">
      <FaLinkedinIn />
    </div>
  </div>
);

function UserLoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rightPanelActive, setRightPanelActive] = useState(false);

  const handleSubmit = (e) => {
    localStorage.setItem("name", name);
  };

  // Handler functions to toggle the right panel state
  const handleSignUpClick = () => setRightPanelActive(true);
  const handleSignInClick = () => setRightPanelActive(false);

  return (
    <div className="parent">
      <div
        className={`${
          rightPanelActive
            ? "right-panel-active container-form container"
            : "container-form container"
        }`}
        // id="container"
      >
        <div className="form-container sign-up-container">
          <form className="form">
            <h1>Create Account</h1>
            <SocialIcons />
            <span className="fz-12">or use your email for registration</span>
            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Name"
                required
                id="signup-name"
              />
              <label htmlFor="signup-name" className="form__label">
                Name
              </label>
            </div>
            <div className="form__group field">
              <input
                type="email"
                className="form__field"
                placeholder="Email"
                required
                id="signup-email"
              />
              <label htmlFor="signup-email" className="form__label">
                Email
              </label>
            </div>
            <div className="form__group field">
              <input
                type="password"
                className="form__field"
                placeholder="Password"
                required
                id="signup-password"
              />
              <label htmlFor="signup-password" className="form__label">
                Password
              </label>
            </div>
            <button type="submit" className="button-form submit-btn">
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <SocialIcons />
            <span>or use your account</span>
            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Name"
                required
                id="signin-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="signin-name" className="form__label">
                Name
              </label>
            </div>
            <div className="form__group field">
              <input
                type="password"
                className="form__field"
                placeholder="Password"
                required
                id="signin-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="signin-password" className="form__label">
                Password
              </label>
            </div>
            <a href="# " className="a forgot-password">
              Forgot your password?
            </a>
            <button type="submit" className="button-form submit-btn">
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost button" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost button" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLoginForm;
