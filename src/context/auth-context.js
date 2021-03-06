import { createContext, useEffect } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import axios from "axios";
import { AuthReducer } from "../reducer/AuthReducer";
import { useState } from "react";
import { useToast } from "./toast-context";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, { token: null });
  const { toastVal, setToastVal } = useToast();
  const [user,setUser] = useState(null);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    try {
      const userData = await axios.post("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("token", userData.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(userData.data.foundUser));
      setUser(userData.data.foundUser);
      authDispatch({ type: "LOG_IN", payload: userData.data.encodedToken });
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Login Successfully! Welcome ${userData.data.foundUser.firstName} ${userData.data.foundUser.lastName} !!`,
        select: "success-alert",
        isDisplay: "visible",
      }));
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
      navigate("/home");
    } catch (error) {
      if (error.response.status === 404) {
        setToastVal((prevVal) => ({
          ...prevVal,
          msg: "User not found!!",
          select: "error-alert",
          isDisplay: "visible",
        }));
      } else if (error.response.status === 401) {
        setToastVal((prevVal) => ({
          ...prevVal,
          msg: "Unauthorized",
          select: "error-alert",
          isDisplay: "visible",
        }));
      } else if (error.response.status === 422) {
        setToastVal((prevVal) => ({
          ...prevVal,
          msg: "Please enter valid email",
          select: "error-alert",
          isDisplay: "visible",
        }));
      } else {
        setToastVal((prevVal) => ({
          ...prevVal,
          msg: "Something gone wrong!!",
          select: "error-alert",
          isDisplay: "visible",
        }));
      }
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
    }
  };

  const SignupHandler = async ({ firstName, lastName, email, password }) => {
    console.log("signup");
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Signup Successfully! Welcome ${response.data.createdUser.firstName} ${response.data.createdUser.lastName} !!`,
        select: "success-alert",
        isDisplay: "visible",
      }));
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
      setUser(response.data.foundUser);
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      navigate("/home");
    } catch (error) {
      console.log(error);
      error.response.status === 422
        ? setToastVal((prevVal) => ({
            ...prevVal,
            msg: `Email ${email} already exist!`,
            select: "error-alert",
            isDisplay: "visible",
          }))
        : setToastVal((prevVal) => ({
            ...prevVal,
            msg: `Signup failed! please try again.`,
            select: "error-alert",
            isDisplay: "visible",
          }));
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
    }
  };

  const logoutHandler =  () => {
    console.log("clear");
    localStorage.clear();
    setToastVal((prevVal) => ({
      ...prevVal,
      msg: `Logout Successfully!`,
      select: "success-alert",
      isDisplay: "visible",
    }))
    navigate("/")
    setTimeout(() => {
      setToastVal((prevVal) => ({
        ...prevVal,
        isDisplay: "hidden",
      }));
    }, 2000);
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        loginHandler,
        changeHandler,
        formData,
        setFormData,
        SignupHandler,
        user,
        setUser,
        logoutHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuth };
