import Drawer from "./components/Drawer";
import Body from "./components/Body";
import LoginDialog from "./components/LoginDialog";
import { onAuthStateChanged } from "firebase/auth";
import { GetFirebase } from "./util/Firebase";
import { useEffect, useState } from "react";

const App = () => {
  const firebase = GetFirebase();
  const [user, setUser] = useState("");
  const auth = firebase.auth;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <>
      {!user && <LoginDialog />}
      <Drawer user={user}/>
      <Body />
    </>
  );
};

export default App;
