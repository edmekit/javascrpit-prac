function pick (choice){
    num = Math.random()
    if (num <= 0.3){
        computer = "Rock"
    }
    else if (num <= 0.6){
        computer = "Paper"
    }
    else {
        computer = "Scissors"
    }
    if (choice === user){
        alert(`You picked ${choice}. The computer picked ${computer}, it is a tie`)
    }
    else {
        if (choice === "Rock") and (computer === "Paper")
        {
            alert(`You picked ${choice}. The computer picked ${computer}, you lose`)
        }
        if (choice === "Paper") and (computer === "Scissors")
        {
            alert(`You picked ${choice}. The computer picked ${computer}, you lose`)
        }
        if (choice === "Scissors") and (computer === "Rock")
        {
            alert(`You picked ${choice}. The computer picked ${computer}, you lose`)
        }
    }
}