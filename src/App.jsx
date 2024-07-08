import Drawer from "./components/Drawer";
import Body from "./components/Body";
import LoginDialog from "./components/LoginDialog";
import { FirebaseProvider } from "./util/Firebase";

const loggedIn = false;

const App = () => {
  return (
    <>
      <FirebaseProvider>
        {!loggedIn && <LoginDialog />}
        <Drawer />
        <Body />
      </FirebaseProvider>
    </>
  );
};

export default App;
