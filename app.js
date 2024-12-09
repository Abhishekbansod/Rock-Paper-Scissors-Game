let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')

let userScorePara = document.querySelector('#user-score')
let computerScorepara = document.querySelector('#comp-score')



// this is for generating computers choice
const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * 3)
    return options[randomIndex]
}



const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = `Game was draw. Play again!`
    msg.style.backgroundColor = "purple"
}



const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        // console.log("You win!");
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`
        msg.style.backgroundColor = "green"
    }
    else{
        // console.log("You lose!");
        compScore++;
        computerScorepara.innerText = compScore
        msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}



const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);

    // generate computer choice by calling method => generateCompChoice
    const computerChoice = generateCompChoice()
    // console.log("computer choice = ", computerChoice);
    

    // condition checking
    if(userChoice === computerChoice){
        // draw game
        drawGame()
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // computer choice => paper, scissors
            userWin = computerChoice === "paper" ? false : true
        }else if(userChoice === "paper"){
            // computer choice => rock, scissors
            userWin = computerChoice === "scissors" ? false : true
        }else{
            // computer choice => rock paper
            userWin = computerChoice === "rock" ? false : true
        }

        showWinner(userWin, userChoice, computerChoice)
    }


}


// this is for generating user's choice 
choices.forEach((choice) => {
    choice.addEventListener('click', () => {

        // getting the id of each individual choice (rock, paper, scissors)
        let userChoice = choice.getAttribute('id')
        // console.log(userChoice);
        playGame(userChoice)
    })
})