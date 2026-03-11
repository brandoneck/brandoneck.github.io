console.log("tech stack file loaded");

const techStack = [
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "React",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "HTML",
      "CSS"
    ]
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Firebase",
      "Nest",
      "Laravel",
      "PHP",
      "MongoDB",
      "MySQL"
    ]
  },
  {
    category: "Tools & Testing",
    items: [
      "Git",
      "Figma",
      "Material UI",
      "Jest",
      "Jenkins",
    ]
  }
];

const techContainer = document.getElementById("tech-stack-container");

techStack.forEach(tech => {

  const column = `
    <div class="tech-column">
      <h3>${tech.category}</h3>
      <div class="tech-items">
        ${tech.items.map(item => `<span>${item}</span>`).join("")}
      </div>
    </div>
  `;

  techContainer.insertAdjacentHTML("beforeend", column);

});