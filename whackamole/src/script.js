var game_state = 1;

function startGame() {
    document.querySelector('button').disabled = true;
    setInterval(() => {
        update();
    }, 1000);
}

function update() {
    if (game_state) {
        var avocados = document.getElementsByClassName('avocado');
        var random_avocado = avocados[parseInt(Math.random() * avocados.length)];
        sprout(random_avocado);
        setTimeout(() => shrink(random_avocado), 1500);
    }
}

function update_score(value) {
    let score = document.getElementById('score');
    let currentScore = parseInt(score.textContent);

    score.textContent = currentScore + value;

    if (currentScore == 10) {
        win();
    }
}

function win() {
    window.alert('You have won the game!  Congrats!');
    score.textContent = 0;
    game_state = 0;
    document.querySelector('button').disabled = false;
}

function sprout(avocado) {
    avocado.classList.add("up");
}

function shrink(avocado) {
    avocado.classList.remove("up");
}

function bonk(avocado) {
    update_score(1);
    shrink(avocado);
}