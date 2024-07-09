import "../styles/LoginDialog.css";
import { useState } from "react";
import { GetFirebase } from "../util/Firebase";
import Toast from "../util/Toast";

const isLoggedIn = false;

const LoginDialog = () => {
  const firebase = GetFirebase();

  const [toast, setToast] = useState({
    message: "",
    type: "",
    visible: false,
  });

  const [dialogVisible, setDialogVisible] = useState(!isLoggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e) => {
    e.preventDefault();
    if (email == "" || !email.includes("@") || password.length < 6) {
      showToast("Invalid credidentials", "warn");
      return;
    }

    firebase
      .logIn(email, password)
      .then((data) => {
        showToast("Login Successful", "info");
        setDialogVisible(false);
      })
      .catch((err) => {
        showToast(err.message, "warn");
      });
  };

  const signUp = (e) => {
    e.preventDefault();
    if (email == "" || !email.includes("@") || password.length < 6) {
      showToast("Invalid credidentials", "warn");
      return;
    }

    firebase
      .signUp(email, password)
      .then((data) => {
        showToast("Signup Successful", "info");
        setDialogVisible(false);
      })
      .catch((err) => {
        showToast(err.message, "warn");
      });

  };

  const showToast = (message, type) => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      hideToast();
    }, 3000);
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, visible: false }));
  };

  return (
    <>
      <div
        className={"background-cover " + (dialogVisible ? "active" : "")}
        onClick={() => setDialogVisible(false)}
      ></div>
      <div className={"dialog-container " + (dialogVisible ? "active" : "")}>
        <div className="login-dialog">
          <h2>Login Here</h2>
          <form>
            <span className="input-container">
              <span className="mdi mdi-at"></span>
              <input
                type="email"
                placeholder="E-Mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <span className="input-container">
              <span className="mdi mdi-form-textbox-password"></span>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
            <span className="entry-buttons">
              <button type="submit" onClick={(e) => logIn(e)}>
                LOGIN
              </button>
              <button type="submit" onClick={(e) => signUp(e)}>
                SIGNUP
              </button>
            </span>
            <a href="#">Forgot Username/Password?</a>
            <span className="third-party-login">
              <button>
                <span className="mdi mdi-google"></span>
                <span className="third-party-name">Google</span>
              </button>
              <button>
                <span className="mdi mdi-github"></span>
                <span className="third-party-name">Github</span>
              </button>
            </span>
          </form>
        </div>
      </div>
      {toast.visible && (
        <Toast message={toast.message} type={toast.type} click={hideToast} />
      )}
    </>
  );
};

export default LoginDialog;
