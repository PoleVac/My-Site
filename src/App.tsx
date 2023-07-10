import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomHeader from "./Index/CustomHeader";
import Button from "./Index/Button";
import { BrowserView, MobileView } from "react-device-detect";

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
        <h1>This is rendered only on browser</h1>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
    </>
  );
}

export default App;
