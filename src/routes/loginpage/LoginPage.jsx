import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./loginPage.css";

export const LoginPage = () => {
  const { loginHandler, changeHandler, formData, setFormData } = useAuth();

  const [icon, setIcon] = useState(<i className="fas fa-eye"></i>);

  const [displayPassword, setDisplayPassword] = useState("password");
  return (
      <>
    <section className="main-login">
      <div className="card-container-login box-shadow">
        <h2>Login</h2>
        <div className="login-container">
          <div className="form-input">
            <label htmlFor="input-email" className="input-label">
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
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <label htmlFor="input-pass" className="input-label">
              Password
            </label>
            <div className="password-container wrapper-input">
              <input
                type={displayPassword}
                name="password"
                required
                className="input-pass input-text"
                placeholder="Enter Password"
                value={formData.password}
                onChange={(e) => changeHandler(e)}
              />
              <button
                className="show-hide-pass button-style-none"
                onClick={() => (
                  icon.props.class === "fas fa-eye-slash"
                    ? setIcon(<i class="fas fa-eye"></i>)
                    : setIcon(<i class="fas fa-eye-slash"></i>),
                  displayPassword === "password"
                    ? setDisplayPassword("text")
                    : setDisplayPassword("password")
                )}
              >
                {icon}
              </button>
            </div>
          </div>
          <div className="form-utils m-b-1r">
            <input type="checkbox" name="remember-me" id="remember" />
            <label htmlFor="remember">Remember me</label>
            <a href="" className="forgot-pass">
              Forgot Password?
            </a>
          </div>
          <button
            className="button-style-none solid-button m-b-1r"
            onClick={loginHandler}
          >
            Login
          </button>
          <button
            className="button-style-none secondary-button m-b-1r"
            onClick={() =>
              setFormData({
                ...formData,
                email: "adarshbalika@gmail.com",
                password: "adarshBalika123",
              })
            }
          >
            Login as a Guest Credential
          </button>
          <div className="create-accnt-container">
            <Link to="/signup" className="create-accnt">
              Create New Account
            </Link>
            <i className="far fa-angle-right"></i>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
