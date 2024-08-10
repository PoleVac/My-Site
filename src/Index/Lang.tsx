interface Props {
  lang?: string;
}

const ENG = (
  <div>
    <p>Software Developer (Mohawk College)</p>
    <p>
      Extensive experience with REACT, HTML5, TSX, JS, CSS, PHP, and SQL.
      Skilled in Python, with a keen interest in developing innovative software
      solutions.
    </p>
    <p>
      Specialized in creating immersive VR experiences using Unity & C# and
      proficient in Unreal Engine 5 for rendering high-quality images and videos
      for diverse applications.
    </p>
    <p>
      3D Modeling expertise: Proficient in Rhinoceros 3D for all my projects,
      currently expanding my skills by learning Blender. Assembled three desktop
      computers from scratch, showcasing my hands-on technical abilities.
    </p>
    <p>
      A fast learner with a problem-solving orientation. The development of all
      videos, VR experiences, images, and this webpage took me less than 6
      months! Self-taught in computer assembly, 3D modeling, and various
      programming languages.
    </p>
    <p>
      Fluent in both English and Spanish, bringing a global perspective to
      software development. Participated in a critical event at STAC 2023,
      representing Mohawk College's XR department, demonstrating my commitment
      to continuous learning and industry engagement.
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
      Grande expérience avec REACT, HTML5, TSX, JS, CSS, PHP et SQL. Compétent
      en Python, avec un vif intérêt pour le développement de solutions
      logicielles innovantes.
    </p>
    <p>
      Spécialisé dans la création d'expériences VR immersives en utilisant Unity
      et C#, et compétent dans Unreal Engine 5 pour le rendu d'images et de
      vidéos de haute qualité pour diverses applications.
    </p>
    <p>
      Expertise en modélisation 3D : Compétent en Rhinoceros 3D pour tous mes
      projets, actuellement en train d'élargir mes compétences en apprenant
      Blender. J'ai assemblé trois ordinateurs de bureau à partir de zéro,
      démontrant mes compétences techniques pratiques.
    </p>
    <p>
      Apprenant rapide avec une orientation vers la résolution de problèmes. Le
      développement de toutes les vidéos, expériences VR, images et cette page
      web m'a pris moins de 6 mois ! Autodidacte en assemblage d'ordinateurs,
      modélisation 3D et divers langages de programmation.
    </p>
    <p>
      Couramment en anglais et en espagnol, apportant une perspective globale au
      développement de logiciels. J'ai participé à un événement crucial au STAC
      2023, représentant le département XR du Mohawk College, démontrant mon
      engagement envers l'apprentissage continu et l'engagement dans
      l'industrie.
    </p>
    <p>
      Expérimenté dans les projets collaboratifs et les initiatives
      individuelles, livrant constamment des solutions innovantes. Mon rôle en
      tant que Développeur XR impliquait la création d'applications interactives
      et conviviales, mettant en avant mon approche centrée sur l'utilisateur
      dans le développement de logiciels.
    </p>
  </div>
);
const ESP = (
  <div>
    <p>Desarrollador de Software (Mohawk College)</p>
    <p>
      Amplia experiencia con REACT, HTML5, TSX, JS, CSS, PHP y SQL. Competente
      en Python, con un gran interés en desarrollar soluciones de software
      innovadoras.
    </p>
    <p>
      Especializado en crear experiencias de VR inmersivas utilizando Unity y
      C#, y competente en Unreal Engine 5 para renderizar imágenes y videos de
      alta calidad para diversas aplicaciones.
    </p>
    <p>
      Experto en modelado 3D: Competente en Rhinoceros 3D para todos mis
      proyectos, actualmente ampliando mis habilidades aprendiendo Blender. He
      ensamblado tres computadoras de escritorio desde cero, demostrando mis
      habilidades técnicas prácticas.
    </p>
    <p>
      Aprendiz rápido con orientación a la resolución de problemas. ¡El
      desarrollo de todos los videos, experiencias de VR, imágenes y esta página
      web me llevó menos de 6 meses! Autodidacta en ensamblaje de computadoras,
      modelado 3D y varios lenguajes de programación.
    </p>
    <p>
      Fluido en inglés y español, aportando una perspectiva global al desarrollo
      de software. Participé en un evento clave en STAC 2023, representando al
      departamento de XR de Mohawk College, demostrando mi compromiso con el
      aprendizaje continuo y la participación en la industria.
    </p>
    <p>
      Con experiencia en proyectos colaborativos e iniciativas individuales,
      siempre entregando soluciones innovadoras. Mi rol como Desarrollador de XR
      involucró la creación de aplicaciones interactivas y fáciles de usar,
      destacando mi enfoque centrado en el usuario para el desarrollo de
      software.
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
