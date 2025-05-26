document.addEventListener("DOMContentLoaded", () => {
  // Cargar íconos de habilidades
  const skills = [ "html5", "css3", "javascript", "csharp", "dotnet",
                   "mysql", "java", "apache", "spring", "python" ];

  const skillsContainer = document.getElementById("skills-container");
  skills.forEach(skill => {
    const img = document.createElement("img");
    img.src = `projects/icons/${skill}.svg`;
    img.alt = skill;
    img.title = skill.charAt(0).toUpperCase() + skill.slice(1);
    img.classList.add("skill-icon");
    img.onerror = () => img.style.display = "none";
    skillsContainer.appendChild(img);
  });

  // Datos embebidos porque GitHub Pages no permite fetch local
const proyectos = [
  {
    titulo: "App Genérica",
    descripcion: "App para e-commerce con autenticación de usuarios y catálogo de productos.",
    imagen: "projects/images/img_proy_1_1.png",
    enlace: "https://github.com/rodrigovittori/tp-winform-equipo-c"
  },
  {
    titulo: "Sistema de Gestión Club Sportivo Pecho Frío",
    descripcion: "App de gestión para una asociación independiente que permite registrar socios, eventos y pagos asociados en forma eficiente.",
    imagen: "projects/images/img_proy_2_1.png",
    enlace: "https://github.com/rodrigovittori/"
  }
];

const carrusel = document.getElementById("carrusel-proyectos");
proyectos.forEach(proyecto => {
  const card = document.createElement("div");
  card.className = "proyecto";

  card.innerHTML = `
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    ${proyecto.imagen ? `<img src="${proyecto.imagen}" alt="${proyecto.titulo}" />` : ""}
    <a href="${proyecto.enlace}" target="_blank">Ver proyecto</a>
  `;

  carrusel.appendChild(card);
});

});
