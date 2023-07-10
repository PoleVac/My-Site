interface Props {
  size?: number;
}

function Profile({ size = 1 }: Props) {
  const me = new Date("January 10,01");
  let now = new Date(Date.now());
  let age = now.getFullYear() - me.getFullYear();

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
          <p style={{ margin: 15, color: "white" }}>
            <strong>
              <h3>Alejandro Pulido ({age} M)</h3>
            </strong>
            <p>Software Developer (Mohawk College)</p>
            <p>Solid Experience with REACT, HTML5, TSX, JS, CSS, PHP and SQL</p>
            <p>
              Used Unity & C# to create VR Experiences / Used Unreal Engine 5 to
              render images and videos for multiple purposes
            </p>
            <p>
              3D Modeling experience: Used Rhinoceros 3D for all my proyects,
              now I'm learing Blender to expand my knowledge
            </p>
            <p>
              Fast Learner and problem-solving oriented. All the videos, VR
              experiences, images and this webpage was created in 6 months! I
              have also learn on my own to assemble computers and 3D model!
            </p>

            <p>Fluent in both English and Spanish</p>
          </p>
        </div>
        <div className="col">
          <img
            src="https://github.com/PoleVac/My-Site/blob/main/src/Index/images/Profile/profile.jpg?raw=true"
            style={{
              width: 400 * size,
              height: 400 * size,
              borderRadius: 400 / 2,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Profile;
