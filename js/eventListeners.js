window.addEventListener("keydown", (event) => {
  switch (event.key) {
    // Jump
    case "w":
      if (player.velocity.y === 0) player.velocity.y = -20;
      break;
    // Squat
    case "s":
      break;
    // Move left
    case "a":
      keys.a.pressed = true;
      break;
    // Move right
    case "d":
      keys.d.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    // Move left
    case "a":
      keys.a.pressed = false;
      break;
    // Move right
    case "d":
      keys.d.pressed = false;
      break;
  }
});
