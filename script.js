/*
// Rock, Paper, Scissors
let wins = 0;
let losses = 0;
let ties = 0;

function pick(choice) {
    let num = Math.random();
    let computer;

    if (num <= 0.3) {
        computer = "Rock";
    } else if (num <= 0.6) {
        computer = "Paper";
    } else {
        computer = "Scissors";
    }

    if (computer === "Rock") {
        if (choice === "Paper") {
            wins++;
            document.getElementById("wins").innerText = `Wins: ${wins}`;
            alert(`You picked ${choice} and the computer picked ${computer}. You win!`);
        } else if (choice === "Rock") {
            ties++;
            document.getElementById("ties").innerText = `Ties: ${ties}`;
            alert(`You picked ${choice} and the computer picked ${computer}. It's a tie!`);
        } else {
            losses++;
            document.getElementById("losses").innerText = `Losses: ${losses}`;
            alert(`You picked ${choice} and the computer picked ${computer}. You lose!`);
        }
    }

    else if (computer === "Paper") {
        if (choice === "Paper") {
            ties++;
            document.getElementById("ties").innerText = `Ties: ${ties}`;
            alert(`You picked ${choice} and the computer picked ${computer}. It's a tie!`);
        } else if (choice === "Rock") {
            losses++;
            document.getElementById("losses").innerText = `Losses: ${losses}`;
            alert(`You picked ${choice} and the computer picked ${computer}. You lose!`);
        } else {
            wins++;
            document.getElementById("wins").innerText = `Wins: ${wins}`;
            alert(`You picked ${choice} and the computer picked ${computer}. You win!`);
        }
    }

    else if (computer === "Scissors") {
        if (choice === "Rock") {
            wins++;
            document.getElementById("wins").innerText = `Wins: ${wins}`;
            alert(`You picked ${choice} and the computer picked ${computer}. You win!`);
        } else if (choice === "Scissors") {
            ties++;
            document.getElementById("ties").innerText = `Ties: ${ties}`;
            alert(`You picked ${choice} and the computer picked ${computer}. It's a tie!`);
        } else {
            losses++;
            document.getElementById("losses").innerText = `Losses: ${losses}`;
            alert(`You picked ${choice} and the computer picked ${computer}. You lose!`);
        }
    }
}
*/

/*
// time checker
const name = "Edmarc";
const hour = 9;

if (6 < hour < 12) {
    console.log("Good morning, ${name}!");
} else if (13 < hour < 17 ){
    console.log("Godd afternoon, ${name}!");
} else {
    console.log("Good evening, ${name}!");
}
*/

/*
// discount
const age = 5;
const holiday = false;

if ((age <= 6 || age >= 65) && holiday) {
    console.log('Discount');
} else {
    console.log('No discount');
}
*/


// coin flip
function coinFlip(user){
    const guess = user;
    let result;
    let num = Math.random();
    
    if (num < 0.5) {
        result = "heads";
    } else {
        result = "tails";
    }

    if (guess === result) {
        alert(`You guessed ${guess} and the result was ${result}. You win!`);
    } else {
        alert(`You guessed ${guess} and the result was ${result}. You lose!`);
    }
}
