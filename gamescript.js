const character = document.getElementById("character");
const block = document.getElementById("block");
const score = document.getElementById("scoreSpan");
let counter = 0;

window.addEventListener("keydown", (evt) => {
  if (evt.code === "Space") {
    jump();
  }
});

function jump() {
  if (character.classList.contains("animate")) {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 300);
}

const checkDead = setInterval(function () {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 170 && blockLeft > 130 && characterTop >= 350) {
    block.classList.remove("animate");
    alert(`Game Over. score: ${counter}`);
    counter = 0;
    block.classList.add("animate");
  }

  if (blockLeft == 0) {
    ++counter;
  }

  score.textContent = counter;
}, 10);
