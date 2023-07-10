import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomHeader from "./Index/CustomHeader";
import Button from "./Index/Button";
import { BrowserView, MobileView } from "react-device-detect";
import Profile from "./Index/Profile";

function App() {
  return (
    <>
      <BrowserView>
        <Button />
        <CustomHeader />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </BrowserView>
      <MobileView>
        <h1 className="text-light">Mobile version in Progress...</h1>
        <Profile />
      </MobileView>
    </>
  );
}

export default App;
