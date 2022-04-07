import { useToast } from "../context/toast-context";
import "./toast.css";
export const Toast = () => {
  const {
    toastVal: { msg, isDisplay, select }
  } = useToast();

  return (
    <div className={`alert-box ${select}`} id={isDisplay}>
      <span className="alert-icon">
        {select === "success-alert" ? (
          <i className="fas fa-check-circle"></i>
        ) : (
          <i className="fas fa-exclamation-circle"></i>
        )}
      </span>
      <p className="toast-msg">{msg}</p>
    </div>
  );
};
