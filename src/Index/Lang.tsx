interface Props {
  lang?: string;
}

const ENG = (
  <div>
    <p>Software Developer (Mohawk College)</p>
    <p>
      Extensive experience with REACT, HTML5, TSX, JS, CSS, PHP, and SQL. Solid
      knowledge in C#, Python, and Java, with a strong interest in developing
      innovative software solutions.
    </p>
    <p>
      Specialized in creating immersive VR experiences using Unity and C#, and
      proficient in Unreal Engine 5 for rendering high-quality images and videos
      for diverse applications.
    </p>
    <p>
      3D Modeling: Extensive experience with Rhinoceros 3D, and expanding my
      skills with Blender. <br />
      Technical skills: Assembled three desktop computers from scratch and
      upgraded various aspects of laptops (RAM, memory, thermal paste
      replacement, etc.).
    </p>
    <p>
      A fast learner with a problem-solving orientation. I developed all the
      videos, VR experiences, images, and this webpage. Self-taught in computer
      assembly, 3D modeling, and various programming languages.
    </p>
    <p>
      Fluent in English, Spanish, and intermediate in French. Participated in a
      critical event (STAC 2023), representing the XR department of Mohawk
      College, demonstrating my commitment to continuous learning and industry
      engagement.
    </p>
    <p>
      Experienced in collaborative projects and individual initiatives,
      consistently delivering innovative solutions. My role as an XR Developer
      involved creating user-friendly and interactive applications, highlighting
      my user-centric approach to software development.
    </p>
  </div>
);

const FRC = (
  <div>
    <p>Développeur de logiciels (Mohawk College)</p>
    <p>
      Grande expérience avec REACT, HTML5, TSX, JS, CSS, PHP et SQL. Solide
      connaissance en C#, Python et Java, avec un vif intérêt pour le
      développement de solutions logicielles innovantes.
    </p>
    <p>
      Spécialisé dans la création d'expériences VR immersives en utilisant Unity
      et C#, et compétent dans Unreal Engine 5 pour le rendu d'images et de
      vidéos de haute qualité pour diverses applications.
    </p>
    <p>
      Modélisation 3D : Grande expérience avec Rhinoceros 3D, et en train
      d'élargir mes compétences avec Blender. <br />
      Compétences techniques : Assemblé trois ordinateurs de bureau à partir de
      zéro et amélioré divers aspects des ordinateurs portables (RAM, mémoire,
      remplacement de la pâte thermique, etc.).
    </p>
    <p>
      Apprenant rapide avec une orientation vers la résolution de problèmes.
      J'ai développé toutes les vidéos, expériences VR, images et cette page
      web. Autodidacte en assemblage d'ordinateurs, modélisation 3D et divers
      langages de programmation.
    </p>
    <p>
      Couramment en anglais, espagnol et niveau intermédiaire en français. J'ai
      participé à un événement clé (STAC 2023), représentant le département XR
      de Mohawk College, démontrant mon engagement envers l'apprentissage
      continu et l'engagement dans l'industrie.
    </p>
    <p>
      Expérimenté dans les projets collaboratifs et initiatives individuelles,
      livrant constamment des solutions innovantes. Mon rôle en tant que
      Développeur XR impliquait la création d'applications interactives et
      conviviales, mettant en avant mon approche centrée sur l'utilisateur dans
      le développement de logiciels.
    </p>
  </div>
);
const ESP = (
  <div>
    <p>Desarrollador de Software (Mohawk College)</p>
    <p>
      Amplia experiencia con REACT, HTML5, TSX, JS, CSS, PHP y SQL. Solido
      conocimiento en C#, Python y Java, con un gran interés en desarrollar
      soluciones de software innovadoras.
    </p>
    <p>
      Especializado en crear experiencias de VR inmersivas utilizando Unity y
      C#, y competente en Unreal Engine 5 para renderizar imágenes y videos de
      alta calidad para diversas aplicaciones.
    </p>
    <p>
      Modelado 3D: Gran experiencia en Rhinoceros 3D, y ampliando mis
      habilidades con Blender. <br />
      Habilidad tecnica: ensamblado tres computadoras de escritorio desde cero y
      he mejorado varios aspectos de laptops (RAM, memoria, reemplazo de pasta
      térmica, etc.).
    </p>
    <p>
      Aprendiz rápido con orientación a la resolución de problemas. Desarrollé
      todos los videos, experiencias de VR, imágenes y esta página web.
      Autodidacta en ensamblaje de computadoras, modelado 3D y varios lenguajes
      de programación.
    </p>
    <p>
      Fluido en inglés, español y nivel intermedio en francés. Participé en una
      feria clave (STAC 2023), representando al departamento de XR de Mohawk
      College, demostrando mi compromiso con el aprendizaje continuo y la
      participación en la industria.
    </p>
    <p>
      Con experiencia en proyectos colaborativos e iniciativas individuales,
      entregando constantemente soluciones innovadoras. Mi rol como
      Desarrollador de XR involucró la creación de aplicaciones interactivas y
      fáciles de usar, destacando mi enfoque centrado en el usuario para el
      desarrollo de software.
    </p>
  </div>
);

function Lang({ lang }: Props) {
  console.log(lang);
  if (lang === "ENG") {
    return <div>{ENG}</div>;
  } else if (lang === "FRC") {
    return <div>{FRC}</div>;
  } else {
    return <div>{ESP}</div>;
  }
}

export default Lang;
