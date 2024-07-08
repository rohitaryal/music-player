import { Colors } from "./util/Colors";
import Drawer from "./components/Drawer";
import Body from "./components/Body";
import LoginDialog from "./components/LoginDialog";

const loggedIn = false;

const App = () => {
  const a = Colors();
  return (
    <>
    {!loggedIn && <LoginDialog/>}
      <Drawer />
      <Body />
    </>
  );
};

export default App;
