import { createPortal } from "react-dom";
import "../styles/Toast.css";

const Toast = ({ message, type, click }) => {
  return createPortal(
    <div
      className="toast show"
      style={{
        backgroundColor:
          type == "warn" ? "rgb(225, 18, 18)" : "rgb(0, 119, 255)",
      }}
    >
      {type === "info" && <span className="mdi mdi-information-outline"></span>}
      {type === "warn" && (
        <span className="mdi mdi-alert-octagon-outline"></span>
      )}
      <span className="message">{message}</span>
      <span className="mdi mdi-close" onClick={() => click()}></span>
    </div>,
    document.body
  );
};

export default Toast;
