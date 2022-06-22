import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { Toast } from "./toast/toast";
import "../node_modules/mockman-js/dist/style.css";
import { Navbar } from "./component/navbar/navbar";
import { Aside } from "./component/aside/aside";
import { MobileAside } from "./component/mobileAside/mobileAside";
import { useEffect } from "react";
import { useAuth } from "./context/auth-context";

function App() {
  const location = useLocation();
  const {setUser} = useAuth();
  const isAside = location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/signup";
  useEffect(() => {
    console.log("hi")
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if(user){
      setUser(user);
    }
  },[])
  return (
    <div className="App">
      <Navbar />
      {isAside && (
        <div className="mobile-aside">
          <MobileAside />
        </div>
      )}
      <Toast />
      <div className={`${isAside && "center-grid-container"}`}>
        {isAside && (
          <div className="aside">
            <Aside />
          </div>
        )}
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
