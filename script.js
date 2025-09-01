function pick (choice){
    num = Math.random()
    if (num <= 0.3){
        computer = "Rock"
    } else if (num <= 0.6){
        computer = "Paper"
    } else if (num <= 1) {
        computer = "Scissors"
    }   

    if (computer === "Rock"){
        if (choice === "Paper"){
            alert(`You picked ${choice} and the computer picked ${computer}. You win!`)
        } else if (choice === "Rock"){
            alert(`You picked ${choice} and the computer picked ${computer}. It's a tie!`)
        } else if (choice === "Scissors"){
            alert(`You picked ${choice} and the computer picked ${computer}. You lose!`)
        }
    }
    else if  (computer === "Paper"){
        if (choice === "Paper"){
            alert(`You picked ${choice} and the computer picked ${computer}. It's a tie!`)
        } else if (choice === "Rock"){
            alert(`You picked ${choice} and the computer picked ${computer}. You lose!`)
        } else if (choice === "Scissors"){
            alert(`You picked ${choice} and the computer picked ${computer}. You win!`)
        }
    }
    else if (computer === "Scissors"){
        if (choice === "Rock"){
            alert(`You picked ${choice} and the computer picked ${computer}. You win!`)
        } else if (choice === "Scissors"){
            alert(`You picked ${choice} and the computer picked ${computer}. It's a tie!`)
        } else if (choice === "Paper"){
            alert(`You picked ${choice} and the computer picked ${computer}. You lose!`)
        }
    }
}