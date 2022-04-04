import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./routes/homepage/homepage";
import { LandingPage } from "./routes/landingPage/landingPage";
import { LoginPage } from "./routes/loginpage/loginPage";
import { Toast } from "./toast/toast";
import Mockman from "mockman-js";
import "../node_modules/mockman-js/dist/style.css";
function App() {
  return (
    <div className="App">
      <Toast/>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/mock" element={<Mockman />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
