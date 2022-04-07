import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./routes/homePage/HomePage";
import { LandingPage } from "./routes/landingPage/LandingPage";
import { LoginPage } from "./routes/loginPage/LoginPage";
import { Toast } from "./toast/toast";
import Mockman from "mockman-js";
import "../node_modules/mockman-js/dist/style.css";
import { ArchivePage } from "./routes/archivePage/ArchivePage";
function App() {
  return (
    <div className="App">
      <Toast/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/mock" element={<Mockman />} />
          <Route path="/archive" element={<ArchivePage/>}/>
        </Routes>
    </div>
  );
}

export default App;
