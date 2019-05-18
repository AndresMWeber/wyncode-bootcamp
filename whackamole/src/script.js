

function startGame() {

}

function modify_score(value) {
    var score = document.getElementById('score')
    if (parseInt(score.innerHTML) === 10) {
        window.alert('You have won the game!  Congrats!')
        score.innerHTML = 0
    }
    else {
        score.innerHTML = parseInt(score.innerHTML) + value
    }
}

function bonk(bowl) {
    console.log(bowl)
    modify_score(1)
}