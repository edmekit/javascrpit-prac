let num = Math.floor(Math.random() * 100);
let attempts = 0

function getGuess() {
    let guess = Number(document.querySelector('.guess').value)
    let diff = Math.abs(num - guess)
    if (guess === num) {
        attempts++;
        document.querySelector('.result').innerHTML = `You win! Woohooo, you got it in ${attempts} attempts.`
        num = Math.floor(Math.random() * 100);
        attempts = 0

    } else if (diff <= 10 && guess > num) {
        document.querySelector('.result').innerHTML = `Pretty close! Just lower it a bit`
        attempts++;
    }
    else if (diff <= 10 && guess < num) {
        document.querySelector('.result').innerHTML = `Pretty close! Just up it a bit`
        attempts++;
    }
    else if (guess > num) {
        document.querySelector('.result').innerHTML = `Too high!`
        attempts++;
    } else if (guess < num) {
        document.querySelector('.result').innerHTML = `Too low!`
        attempts++;
    } else {
        document.querySelector('.result').innerHTML = `Input a number!`
    }
}