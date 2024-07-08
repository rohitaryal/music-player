import "../styles/Navigation.css";
import { GetFirebase } from "../util/Firebase";
import Toast from "../util/Toast";
import { useState } from "react";

const Navigation = () => {
  const firebase = GetFirebase();

  const [toast, setToast] = useState({
    message: "",
    type: "",
    visible: false,
  });

  const handleSignOut = () => {
    firebase
      .sign_out()
      .then((data) => {
        showToast("Signed out successfully!", "info");
      })
      .catch((error) => showToast(error.message, "warn"));
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
    <div className="navigation-bar">
      <span className="mdi mdi-magnify"></span>
      <input type="text" name="search" id="search" placeholder="Search" />
      <span className="mdi mdi-bell-outline"></span>
      <span className="mdi mdi-cog-outline"></span>
      <span class="mdi mdi-logout" onClick={handleSignOut}></span>
      {toast.visible && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};

export default Navigation;
