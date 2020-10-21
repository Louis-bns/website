
const character = document.getElementById("character");
const block = document.getElementById("block");
const score = document.getElementById("scoreSpan");
let counter = 0;

function jump() {
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}


const checkDead = setInterval(function () {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 170 && blockLeft > 130 && characterTop >= 350) {
        block.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 92));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        ++counter;
        score.textContent = Math.floor(counter / 92);
    }
}, 10);
