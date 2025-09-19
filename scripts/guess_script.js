let num = Math.floor(Math.random() * 100);

function getGuess() {
    const guess = Number(document.querySelector('.guess').value)
    let diff = Math.abs(num - guess)
    if (guess === num) {
        document.querySelector('.result').innerHTML = `You win!`
    } else if (diff <= 10 && guess > num) {
        document.querySelector('.result').innerHTML = `Pretty close! Just lower it a bit`
    }
    else if (diff <= 10 && guess < num) {
        document.querySelector('.result').innerHTML = `Pretty close! Just up it a bit`
    }
    else if (guess > num) {
        document.querySelector('.result').innerHTML = `Too high!`
    } else if (guess < num) {
        document.querySelector('.result').innerHTML = `Too low!`
    } else {
        document.querySelector('.result').innerHTML = `Input a number!`
    }
}