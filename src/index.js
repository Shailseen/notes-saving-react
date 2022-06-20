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
                <Route path="/archive" element={<ArchivePage />} />
              </Route>
            </Routes>
          </AuthProvider>
        </NotesProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
