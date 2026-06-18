const projects = [
  {
    title: "Hospital Branding Page",
    description:
      "Responsive hospital website with editable content sections, doctor profiles, and an intuitive user experience.",
    tech: "React • Next.js • Responsive UI • Vercel",
    isRepoPrivate: true,
    github: "https://github.com/brandoneck/hospital",
    live: "https://hospital-sigma-pink.vercel.app/",
    src: "images/hospital.png",
  },
  {
    title: "Weather Forecast Mobile App",
    description:
      "Mobile app for viewing weather forecasts with a clean and intuitive interface.",
    tech: "React • Redux Toolkit • Material UI",
    isRepoPrivate: false,
    github: "https://github.com/brandoneck/weatherApp",
    live: null,
    src: "images/app.png",
  },
  {
    title: "Invoice Format Converter (AI)",
    description:
      "Script that uses the Gemini API to convert invoices from different formats into a standardized JSON structure.",
    tech: "Python • Gemini API • Data Processing",
    isRepoPrivate: false,
    github: "https://github.com/brandoneck/facturasAI",
    live: null,
    src: "images/facturas.png",
  }
];

const container = document.getElementById("projects-container");

projects.forEach((project) => {
  const githubButton = !project.isRepoPrivate
    ? `
      <a href="${project.github}" target="_blank" rel="noopener">
        GitHub Code
      </a>
    `
    : "";

  const liveButton = project.live
    ? `
      <a href="${project.live}" target="_blank" rel="noopener">
        Live Demo
      </a>
    `
    : "";

  const card = `
    <div class="card">
      <img
        class="project-img"
        src="${project.src}"
        data-img="${project.src}"
        alt="${project.title} screenshot">

      <div class="card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <p>${project.tech}</p>

        <div class="buttons">
          ${githubButton}
          ${liveButton}
        </div>
      </div>
    </div>
  `;

  container.innerHTML += card;
});

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.15}s`;
});

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

