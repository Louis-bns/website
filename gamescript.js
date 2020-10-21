const DGE = document.getElementById.bind(document);

const character = DGE("character");
const block = DGE("block");
const score = DGE("scoreSpan");
const gameOver = DGE("game-over");
const gameOverScore = DGE("game-over-score");
const clouds = document.getElementsByClassName("cloud");
let counter = 0;

const toggleWorldAnimations = (value) => {
    [block, ...clouds].forEach((obj) => {
        obj.classList.toggle("animate", value);
    });
};

const showGameOverScreen = () => {
    toggleWorldAnimations(false);
    gameOverScore.textContent = `Game over. Score: ${counter}`;
    gameOver.classList.add("shown");
};

const hideGameOverScreen = () => {
    gameOver.classList.remove("shown");
    toggleWorldAnimations(true);
}

DGE("restart").onclick = hideGameOverScreen;

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

let approachingCharacter = true;

const checkDead = setInterval(function () {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft < 130) {
    if (approachingCharacter) {
        ++counter;
    }
    approachingCharacter = false;
  } else {
      approachingCharacter = true;
  }

  if (blockLeft < 210 && blockLeft > 1 && characterTop >= 350) {
    showGameOverScreen();
    counter = 0;
  }

  score.textContent = counter;
}, 10);
