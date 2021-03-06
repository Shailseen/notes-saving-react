import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./context/auth-context";
import { ToastProvider } from "./context/toast-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotesProvider } from "./context/notes-context";
import { LandingPage } from "./routes/landingPage/LandingPage";
import { HomePage } from "./routes/homepage/HomePage";
import { LoginPage } from "./routes/loginpage/LoginPage";
import { ArchivePage } from "./routes/archivePage/ArchivePage";
import { Signup } from "./routes/Signup/Signup";
import { LabelPage } from "./routes/LabelPage/LabelPage";
import { ProfilePage } from "./routes/ProfilePage/ProfilePage";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <NotesProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/label" element={<LabelPage />} />
                <Route path="/archive" element={<ArchivePage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </AuthProvider>
        </NotesProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
