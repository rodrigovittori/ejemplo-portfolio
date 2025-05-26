document.addEventListener("DOMContentLoaded", () => {
  // Cargar íconos de habilidades
  const skills = [
    "html", "css", "javascript", "typescript", "react", "node", "express", "mongodb",
    "mysql", "postgresql", "java", "csharp", "python", "apache", "bash", "git", "docker"
  ];

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

  // Cargar proyectos desde data.json
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const carrusel = document.getElementById("carrusel-proyectos");
      data.forEach(proyecto => {
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
    })
    .catch(err => {
      console.error("Error al cargar proyectos:", err);
    });

  // Carrusel navegación básica
  const btnPrev = document.querySelector(".btn-prev");
  const btnNext = document.querySelector(".btn-next");
  const carrusel = document.getElementById("carrusel-proyectos");

  let scrollAmount = 0;

  btnPrev.addEventListener("click", () => {
    carrusel.scrollBy({ left: -300, behavior: "smooth" });
  });

  btnNext.addEventListener("click", () => {
    carrusel.scrollBy({ left: 300, behavior: "smooth" });
  });
});
