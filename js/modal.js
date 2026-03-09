const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const close = document.querySelector(".close");

container.addEventListener("click", (e) => {
  console.log("click detectado", e.target);

  if (e.target.classList.contains("project-img")) {
    modal.style.display = "flex";
    modalImg.src = e.target.src;
  }
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});