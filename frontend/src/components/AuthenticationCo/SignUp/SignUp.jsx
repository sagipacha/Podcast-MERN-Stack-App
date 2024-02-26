import React from "react";

export default function SignUp({ handleSubmit, handleChange }) {
  return (
    <div>
      <h1 className="titleSignUp">Sign Up</h1>
      <form className="AuthDiv" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="signUpInput"
          name="fullName"
          type="name"
          placeholder="full name"
        />

        <input
          onChange={handleChange}
          className="signUpInput"
          name="email"
          type="email"
          placeholder="email@email.com"
        />

        <select
          onChange={handleChange}
          name="role"
          id="role"
          required
          defaultValue="guest" 
        >
          <option value="">choose role</option>
          <option value="guest">Guest</option>
          <option value="creator">Creator</option>
        </select>

        <input
          onChange={handleChange}
          className="signUpInput"
          name="password"
          type="password"
          placeholder="*"
        />

        <input
          onChange={handleChange}
          className="signUpInput"
          name="confirmPassword" 
          type="password"
          placeholder="confirm password"
        />

        <button type="submit" className="btnSubmit">
          Submit
        </button>
      </form>
    </div>
  );
}
