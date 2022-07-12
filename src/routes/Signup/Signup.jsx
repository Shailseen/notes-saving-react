import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./Signup.css";

export const Signup = () => {
  const { SignupHandler } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState([null, null]);
  const inputFormDataHandler = (e) => {
    setMessage([null, null]);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const signupClickHandler = (e) => {
    e.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password
    ) {
      SignupHandler(formData);
    } else {
      for (const key in formData) {
        if (formData[key] === "") {
          setMessage([`Fill your ${key}`, `${key}`]);
          console.log(message);
          break;
        }
      }
    }
  };
  return (
    <div className="signup-container">
      <h2>SIGNUP</h2>
      <form>
        <div className="form-input">
          <label htmlFor="firstName" className="input-label">
            First Name
          </label>
          <div className="wrapper-input">
            <input
              type="text"
              name="firstName"
              className="input-text"
              placeholder="Enter your email"
              value={formData.firstName}
              required
              onChange={inputFormDataHandler}
            />
          </div>
          {message[1] && message[1] === "firstName" && (
            <p className="message">
              <sup>*</sup>
              {message[0]}
            </p>
          )}
          <label htmlFor="lastName" className="input-label">
            Last Name
          </label>
          <div className="wrapper-input">
            <input
              type="text"
              name="lastName"
              className="input-text"
              placeholder="Enter your email"
              value={formData.lastName}
              required
              onChange={inputFormDataHandler}
            />
          </div>
          {message[1] && message[1] === "lastName" && (
            <p className="message">
              <sup>*</sup>
              {message[0]}
            </p>
          )}
          <label htmlFor="email" className="input-label">
            Email address
          </label>
          <div className="wrapper-input">
            <input
              type="email"
              name="email"
              className="input-email input-text"
              placeholder="Enter your email"
              value={formData.email}
              required
              onChange={inputFormDataHandler}
            />
          </div>
          {message[1] && message[1] === "email" && (
            <p className="message">
              <sup>*</sup>
              {message[0]}
            </p>
          )}
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <div className="password-container wrapper-input">
            <input
              type="password"
              name="password"
              required
              className="input-pass input-text"
              placeholder="Enter Password"
              value={formData.password}
              onChange={inputFormDataHandler}
            />
          </div>
          {message[1] && message[1] === "password" && (
            <p className="message">
              <sup>*</sup>
              {message[0]}
            </p>
          )}
        </div>
        <div className="signup-btn">
          <button
            type="submit"
            className="button-style-none solid-button"
            onClick={signupClickHandler}
          >
            Signup
          </button>
        </div>
        <div className="create-accnt-container">
          <Link to="/login" className="login">
            Already have an account ?
          </Link>
        </div>
      </form>
    </div>
  );
};
