import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./context/auth-context";
import { ToastProvider } from "./context/toast-context";
import { BrowserRouter } from "react-router-dom";
import { NotesProvider } from "./context/notes-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <NotesProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </NotesProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
