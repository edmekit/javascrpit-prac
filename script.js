/*
// Rock, Paper, Scissors
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

document.getElementById("wins").innerText = `Wins: ${score.wins}`;
document.getElementById("losses").innerText = `Losses: ${score.losses}`;
document.getElementById("ties").innerText = `Ties: ${score.ties}`;

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
           score.wins++;          
            alert(`You picked ${choice} and the computer picked ${computer}. You win!`);
        } else if (choice === "Rock") {
            score.ties++;            
            alert(`You picked ${choice} and the computer picked ${computer}. It's a tie!`);
        } else {
            score.losses++;            
            alert(`You picked ${choice} and the computer picked ${computer}. You lose!`);
        }
    }
    else if (computer === "Paper") {
        if (choice === "Paper") {
            score.ties++;            
            alert(`You picked ${choice} and the computer picked ${computer}. It's a tie!`);
        } else if (choice === "Rock") {
            score.losses++;            
            alert(`You picked ${choice} and the computer picked ${computer}. You lose!`);
        } else {
            score.wins++;            
            alert(`You picked ${choice} and the computer picked ${computer}. You win!`);
        }
    }
    else if (computer === "Scissors") {
        if (choice === "Rock") {
            score.wins++;            
            alert(`You picked ${choice} and the computer picked ${computer}. You win!`);
        } else if (choice === "Scissors") {
            score.ties++;
            alert(`You picked ${choice} and the computer picked ${computer}. It's a tie!`);
        } else {
            score.losses++;            
            alert(`You picked ${choice} and the computer picked ${computer}. You lose!`);
        }
    }

    document.getElementById("wins").innerText = `Wins: ${wins}`;
    document.getElementById("losses").innerText = `Losses: ${losses}`;
    document.getElementById("ties").innerText = `Ties: ${ties}`;

    localStorage.setItem('score', JSON.stringify(score));
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

let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0 };

document.querySelector('#wins').innerText = `Wins: ${score.wins}`
document.querySelector('#losses').innerText = `Losses: ${score.losses}`

function coinFlip(user){

    const guess = user;
    let result;
    let num = Math.random();
    
    if (num < 0.5) {
        result = 'heads';
    } else {
        result = 'tails';
    }

    if (guess === result) {
        score.wins += 1;
        document.querySelector('.res').innerHTML = `Result: You win.`;
        document.querySelector('.you').innerHTML = `You: ${guess}`;
        document.querySelector('.computer').innerHTML = `Result: ${result}`;
       
    } else {
        score.losses += 1;
        document.querySelector('.res').innerHTML = `Result: You lose.`;
        document.querySelector('.you').innerHTML = `You: ${guess}`;
        document.querySelector('.computer').innerHTML = `Result: ${result}`;
    }
     
    document.querySelector('#wins').innerText = `Wins: ${score.wins}`
    document.querySelector('#losses').innerText = `Losses: ${score.losses}`

    localStorage.setItem('score', JSON.stringify(score));
}

