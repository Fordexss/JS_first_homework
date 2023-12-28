const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const gameScore = document.getElementById("score");

let score = 0;
let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game Over! Your Score: " + Math.round(score));
        score = 0;
    } else {
        score += 0.01;
        gameScore.innerHTML = "Score: " + Math.round(score);
    }
}, 10);

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

document.addEventListener("keydown", function (event) {
    jump();
});
