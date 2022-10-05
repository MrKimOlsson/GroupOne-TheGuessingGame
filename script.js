



























//Check if Game is over
function CheckIsGameOver (lifLine) {
if (lifLine === 0) {
    GameOver.style.opacity = 1;
    GameOver.style.transform = ("scale(1)")
    Game.style.opacity = 0;
}

}