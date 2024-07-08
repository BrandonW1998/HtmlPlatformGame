const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16;
canvas.height = 64 * 9;

const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/backgroundLevel1.png",
});

const player = new Player();

const keys = {
  // Up
  w: {
    pressed: false,
  },
  // Down
  s: {
    pressed: false,
  },
  // Left
  a: {
    pressed: false,
  },
  // Right
  d: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);

  backgroundLevel1.draw();

  player.velocity.x = 0;
  if (keys.d.pressed) player.velocity.x = 5;
  else if (keys.a.pressed) player.velocity.x = -5;

  player.draw();
  player.update();
}

animate();
