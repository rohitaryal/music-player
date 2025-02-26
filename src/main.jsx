import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { ColorProvider } from "./util/Colors.jsx";
import { FirebaseProvider } from "./util/Firebase";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorProvider>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </ColorProvider>
  </React.StrictMode>
);
