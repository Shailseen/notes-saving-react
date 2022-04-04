import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const ToastContext = createContext();

const useToast = () => useContext(ToastContext);

const ToastProvider = ({ children }) => {
  const [toastVal, setToastVal] = useState({
    isDisplay: "hidden",
    select: "",
    msg: "",
  });
  return (
    <ToastContext.Provider value={{ toastVal, setToastVal }}>
      {children}
    </ToastContext.Provider>
  );
};

export { useToast, ToastProvider };
