import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
// import "../../../css/logIn.css";
import "../SignUp/SignUp.css";
import { useNavigate } from "react-router-dom";

export default function LogIn({ handleSubmit, handleChange }) {
  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    navigate("/authentication/forgotPassword");
  };

  return (
    <div className="signup-container">
      <h1 className="title-signup">Log In</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="email">email</label>
          <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
          <br />
          <br />
          <div className="input-container">
            <input
              onChange={handleChange}
              className="signup-input"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">password</label>
          <FontAwesomeIcon icon={faKey} className="input-icon" />
          <br />
          <br />
          <div className="input-container">
            <input
              onChange={handleChange}
              className="signup-input"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>

        <p onClick={handleForgotPasswordClick}>forgot password? Click here</p>
      </form>
    </div>
  );
}
