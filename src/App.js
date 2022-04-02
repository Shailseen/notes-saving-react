import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component/navbar/navbar";
import { LandingPage } from "./routes/landingPage/landingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Navbar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
