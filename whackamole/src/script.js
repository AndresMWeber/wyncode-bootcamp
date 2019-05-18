var game_state = 1;

function startGame() {
    setInterval(() => {
        update();
    }, 1000);
}

function update() {
    var avocados = document.getElementsByClassName('avocado');
    var random_avocado = avocados[parseInt(Math.random() * 6)];
    random_avocado.classList.add('up');
    setTimeout(() => random_avocado.classList.remove('up'), 1000);
}

function modify_score(value) {
    var score = document.getElementById('score');
    if (parseInt(score.innerHTML) === 10) {
        window.alert('You have won the game!  Congrats!');
        score.innerHTML = 0;
        game_state = 0;
    }
    else {
        score.innerHTML = parseInt(score.innerHTML) + value;
    }
}

function bonk(bowl) {
    modify_score(1);
}