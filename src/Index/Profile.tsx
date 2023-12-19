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
<p>Extensive experience with REACT, HTML5, TSX, JS, CSS, PHP, and SQL. Skilled in Python, with a keen interest in developing innovative software solutions.</p>
<p>
    Specialized in creating immersive VR experiences using Unity & C# and proficient in Unreal Engine 5 for rendering high-quality images and videos for diverse applications.
</p>
<p>
    3D Modeling expertise: Proficient in Rhinoceros 3D for all my projects, currently expanding my skills by learning Blender. Assembled three desktop computers from scratch, showcasing my hands-on technical abilities.
</p>
<p>
    A fast learner with a problem-solving orientation. The development of all videos, VR experiences, images, and this webpage took me less than 6 months! Self-taught in computer assembly, 3D modeling, and various programming languages.
</p>
<p>
    Fluent in both English and Spanish, bringing a global perspective to software development. Participated in a critical event at STAC 2023, representing Mohawk College's XR department, demonstrating my commitment to continuous learning and industry engagement.
</p>
<p>
    Experienced in collaborative projects and individual initiatives, consistently delivering innovative solutions. My role as an XR Developer involved creating user-friendly and interactive applications, highlighting my user-centric approach to software development.
</p>
            </p>
        </div>
        <div className="col">
          <img
            src="https://github.com/PoleVac/My-Site/blob/main/src/Index/images/Profile/profile.jpg?raw=true"
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
