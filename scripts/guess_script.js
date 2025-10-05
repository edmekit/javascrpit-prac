
let num = Math.floor(Math.random() * 100);
let attempts = 0
const guessbtn = document.querySelector('.guess_btn')

guessbtn.addEventListener('click', () => {
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
})





/*
function search(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'search') {
            console.log(i);
            return
        } 
    }
    console.log(-1);
}

const array = ['google', 'youtube', 'facebook', 'search'];


findIndex(array, 'apple')

function removeThis(arr, word) {
    let copy_arr = arr.slice().reverse();
    let cleanList = [];
    let removed = 0
    for (let i = 0; i < arr.length; i++) {
        if (copy_arr[i] === word) {
            if (removed < 2) {
                removed++;
                continue
            } else {
                cleanList.push(copy_arr[i])
            }
        } else {
            cleanList.push(copy_arr[i])
        }
    }
    console.log((cleanList).reverse());
}

const foods = ['apple','egg', 'ham', 'apple', 'egg', 'apple', 'egg'];
removeThis(foods, 'apple')


for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log('FizzBuzz');
        } else {
            console.log('Buzz');
        }
    } else if (i % 5 === 0) {
        console.log('Fizz') ; 
    } else {
        console.log(i);
    }
}

const foods = ['apple','egg', 'ham', 'apple', 'egg', 'apple', 'egg'];

function findIndex(arr, word) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return i
        }
    } 
}

function unique(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        let word = findIndex(arr, arr[i])
        if (word === i) {
            unique.push(arr[i])
        }
    }
    return unique
}

console.log(unique(foods))
*/