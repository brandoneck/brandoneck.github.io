const canvas = document.getElementById("circuit");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: 0, y: 0 };

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const size = 35;

function drawHex(x, y, glow) {

  ctx.beginPath();

  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const px = x + size * Math.cos(angle);
    const py = y + size * Math.sin(angle);

    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }

  ctx.closePath();

  ctx.strokeStyle = glow ? "#60a5fa" : "#1e3a8a";
  ctx.lineWidth = glow ? 1.5 : 0.6;
  ctx.stroke();
}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const hexHeight = size * Math.sqrt(3);
  const hexWidth = size * 1.5;

  for (let x = 0; x < canvas.width + size; x += hexWidth) {
    for (let y = 0; y < canvas.height + size; y += hexHeight) {

      const offset = (Math.floor(x / hexWidth) % 2) * (hexHeight / 2);
      const hx = x;
      const hy = y + offset;

      const dist = Math.hypot(mouse.x - hx, mouse.y - hy);

      drawHex(hx, hy, dist < 120);
    }
  }

  requestAnimationFrame(draw);
}

draw();