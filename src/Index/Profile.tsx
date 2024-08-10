import Lang from "./Lang";
import React, { useState } from "react";

interface Props {
  size?: number;
}

function Profile({ size = 1 }: Props) {
  const me = new Date("January 10,01");
  let now = new Date(Date.now());
  let age = now.getFullYear() - me.getFullYear();
  const [lang, setLang] = useState("ESP");

  function changeLang(Newlang: string) {
    setLang(Newlang);
  }

  return (
    <>
      <div
        className="row"
        style={{
          backgroundImage:
            "radial-gradient(rgba(100,30,200,0.5),rgba(85,85,100,0.5))",
          borderRadius: 25,
          margin: 25,
          filter: "drop-shadow(2px 4px 6px black)",
          padding: 25,
        }}
      >
        <div className="col">
          <p>
            <div className="text-center text-info">
              <button
                className="btn btn-outline-secondary text-light"
                onClick={() => changeLang("ESP")}
              >
                Español
              </button>{" "}
              <button
                className="btn btn-outline-secondary text-light"
                onClick={() => changeLang("ENG")}
              >
                English
              </button>{" "}
              <button
                className="btn btn-outline-secondary text-light"
                onClick={() => changeLang("FRC")}
              >
                Français
              </button>
            </div>
          </p>
          <p style={{ margin: 15, color: "white" }}>
            <strong>
              <h3>Alejandro Pulido ({age} M)</h3>
            </strong>
            <Lang lang={lang} />
          </p>
        </div>
        <div className="col">
          <img
            src="https://raw.githubusercontent.com/PoleVac/My-Site/main/src/Index/images/Profile/IMG_0173.PNG"
            style={{
              width: 400 * size,
              height: 400 * size,
              borderRadius: 400 / 2,
              filter: "drop-shadow(0 0 2em #ffffffaa)",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Profile;
