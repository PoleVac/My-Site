import Content from "./content";
import VideoDisplay from "./VideoDisplay";

function CustomHeader() {
  const me = new Date("January 10,01");
  let now = new Date(Date.now());
  let age = now.getFullYear() - me.getFullYear();

  const renderVideos = [
    "https://www.youtube.com/embed/TSo9enUC7w4",

    "https://www.youtube.com/embed/cPcwQJoDMP0",
    "https://www.youtube.com/embed/vBhRcKgqKGs",
    "https://www.youtube.com/embed/CzSetER6jEs",
    "https://www.youtube.com/embed/LqWDiJv36WE",
    "https://www.youtube.com/embed/LBexBOPNU3U",
    "https://www.youtube.com/embed/8fPZEB5XdAI",
  ];

  const vrVideos = [
    "https://www.youtube.com/embed/RVRH89L1r5g",
    "https://www.youtube.com/embed/maKZyH1TCts",
  ];

  const test = [
    [
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/vrLab/Image1.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/vrLab/Image2.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/vrLab/Image3.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/vrLab/Image4.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/vrLab/Image5.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/vrLab/Image6.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/vrLab/Image7.png?raw=true",
      ],
    ],
    [
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/church/Image5.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/church/Image8.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/church/Image11.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/church/Image12.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/church/Image13.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/church/Image14.png?raw=true",
      ],
    ],
    [
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house1/Imagen10.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house1/Imagen1_000.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house1/Imagen2_000.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house1/Imagen3_000.png?raw=true",
      ],
    ],
    [
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house2/Imagen2_001.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house2/Imagen3_001.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house2/Imagen5_001.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house2/Imagen6_002.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house2/Imagen7_002.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house2/Imagen7_004.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house2/Imagen9_000.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house2/Imagen10_000.png?raw=true",
      ],
    ],
    [
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house3/Imagen5_000.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house3/Imagen6_000.png?raw=true",
      ],
      [
        "",
        "https://github.com/PoleVac/My-Site/blob/main/src/Index/images/house3/Imagen7_000.png?raw=true",
      ],
    ],
  ];

  return (
    <div className="p-3 mb-2">
      <nav id="navbar-example2" className="navbar bg-dark px-3 mb-3 fixed-top">
        <a className="navbar-brand text-light" href="#">
          Welcome!
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link text-light" href="#scrollspyHeading1">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#scrollspyHeading2">
              VR Experiences
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">
                  Video Renders
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">
                  Renders
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading5">
                  Fifth
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div
        style={{
          padding: 5,
          margin: 25,
          marginTop: 55,
        }}
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-gray m-lg rounded-2"
        tabIndex={0}
      >
        <h4 id="scrollspyHeading1"></h4>
        <div
          className="d-flex text-center "
          style={{
            margin: "15px 75px 15px 75px",
            justifyContent: "space-evenly",
          }}
        >
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
              <p style={{ margin: 15, color: "white" }}>
                <strong>
                  <h3>Alejandro Pulido ({age} M)</h3>
                </strong>
                <p>Software Developer (Mohawk College)</p>
                <p>
                  Solid Experience with REACT, HTML5, TSX, JS, CSS, PHP and SQL
                </p>
                <p>
                  Used Unity & C# to create VR Experiences / Used Unreal Engine
                  5 to render images and videos for multiple purposes
                </p>
                <p>
                  3D Modeling experience: Used Rhinoceros 3D for all my
                  proyects, now I'm learing Blender to expand my knowledge
                </p>
                <p>
                  Fast Learner and problem-solving oriented. All the videos, VR
                  experiences, images and this webpage was created in 6 months!
                  I have also learn on my own to assemble computers and 3D
                  model!
                </p>

                <p>Fluent in both English and Spanish</p>
              </p>
            </div>
            <div className="col">
              <img
                src="https://github.com/PoleVac/My-Site/blob/main/src/Index/images/Profile/profile.jpg?raw=true"
                style={{ width: 400, height: 400, borderRadius: 400 / 2 }}
              />
            </div>
          </div>
        </div>
        <hr
          style={{
            height: "5px",
            borderWidth: 0,
            color: "white",
            backgroundColor: "white",
            width: "90%",
            marginLeft: " auto",
            marginRight: "auto",
          }}
        />
        <h1
          id="scrollspyHeading2"
          className="d-flex flex-wrap justify-content-center text-center text-white"
          style={{
            backgroundColor: "#585261",
            borderRadius: 10,
            padding: 15,
            filter: "drop-shadow(2px 4px 6px black)",
            margin: 25,
          }}
        >
          VR Experiences
        </h1>
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{
            //backgroundColor: "#4db1db",
            //backgroundImage: "linear-gradient(to right, #47cde9,#17092e )",
            backgroundImage:
              "radial-gradient(rgba(220,220,220,0.5),rgba(85,85,100,0.5))",
            borderRadius: 25,
            margin: 25,
            filter: "drop-shadow(2px 4px 6px black)",
          }}
        >
          {vrVideos.map((videos) => (
            <>
              <VideoDisplay video={videos} />
            </>
          ))}
        </div>
        <hr
          style={{
            height: "5px",
            borderWidth: 0,
            color: "white",
            backgroundColor: "white",
            width: "90%",
            marginLeft: " auto",
            marginRight: "auto",
          }}
        />
        <h1
          id="scrollspyHeading3"
          className="d-flex flex-wrap justify-content-center text-center text-white"
          style={{
            backgroundColor: "#585261",
            borderRadius: 10,
            padding: 15,
            filter: "drop-shadow(2px 4px 6px black)",
            margin: 25,
          }}
        >
          Video Renders
        </h1>
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{
            backgroundImage:
              "radial-gradient(rgba(220,220,220,0.5),rgba(85,85,100,0.5))",
            borderRadius: 25,
            margin: 25,
            filter: "drop-shadow(2px 4px 6px black)",
          }}
        >
          {renderVideos.map((video) => (
            <>
              <VideoDisplay video={video} />
            </>
          ))}
        </div>
        <hr
          style={{
            height: "5px",
            borderWidth: 0,
            color: "white",
            backgroundColor: "white",
            width: "90%",
            marginLeft: " auto",
            marginRight: "auto",
          }}
        />
        <h1
          id="scrollspyHeading4"
          className="d-flex flex-wrap justify-content-center text-center text-white"
          style={{
            backgroundColor: "#585261",
            borderRadius: 10,
            padding: 15,
            filter: "drop-shadow(2px 4px 6px black)",
            margin: 25,
          }}
        >
          Renders
        </h1>
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{
            backgroundImage:
              "radial-gradient(rgba(220,220,220,0.5),rgba(85,85,100,0.5))",
            borderRadius: 25,
            margin: 25,
            filter: "drop-shadow(2px 4px 6px black)",
          }}
        >
          {test.map((test, index) => (
            <>
              <Content num={index} content={test} title="" />
            </>
          ))}
        </div>
        <hr
          style={{
            height: "5px",
            borderWidth: 0,
            color: "white",
            backgroundColor: "white",
            width: "90%",
            marginLeft: " auto",
            marginRight: "auto",
          }}
        />
        <h5
          id="scrollspyHeading5"
          className="d-flex flex-wrap justify-content-center text-center text-white"
          style={{
            //backgroundColor: "#585261",
            backgroundImage:
              "radial-gradient(rgba(25,25,25,0.3),rgba(220,220,220,0))",
            borderRadius: 10,

            filter: "drop-shadow(2px 4px 6px black)",
          }}
        >
          <div className="d-flex align-items-center flex-column">
            <div className="p-2"> Alejandro Pulido</div>
            <div className="p-2">+1 365 833 7549</div>
            <div className="p-2">
              <a
                className="btn btn-outline-info"
                href="mailto:alejandro.pulido.ruiz@gmail.com"
              >
                alejandro.pulido.ruiz@gmail.com
              </a>
            </div>
            <div className="p-2">{now.getFullYear()}</div>
          </div>
        </h5>
      </div>
    </div>
  );
}

export default CustomHeader;
