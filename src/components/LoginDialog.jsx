import "../styles/LoginDialog.css";
import { useState } from "react";

const isLoggedIn = false;

const LoginDialog = () => {
  const [dialogVisible, setDialogVisible] = useState(!isLoggedIn);

  const signInWithPassword = (visibility) => {
    setDialogVisible(!visibility);
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
              <input type="email" placeholder="E-Mail" />
            </span>
            <span className="input-container">
              <span className="mdi mdi-form-textbox-password"></span>
              <input type="password" placeholder="Password" />
            </span>
            <button
              type="submit"
              onClick={() => signInWithPassword(dialogVisible)}
            >
              LOGIN
            </button>
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
    </>
  );
};

export default LoginDialog;
