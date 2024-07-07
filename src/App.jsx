import { Colors } from "./util/Colors";
import Drawer from "./components/Drawer";
import Body from "./components/Body";

const App = () => {
  const a = Colors();
  return (
    <>
      <Drawer />
      <Body />
    </>
  );
};

export default App;
