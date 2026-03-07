const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const PossibleChoices = document.querySelectorAll('.buttons button')

const userScoreDisplay = document.getElementById('user-score')
const computerScoreDisplay = document.getElementById('computer-score')

const resetButton = document.getElementById("reset")

// audio
const rockHover = document.getElementById("rock-hover")
const rockWin = document.getElementById("rock-win")

const ananyaWinSound = document.getElementById("ananya-win")
const bhaskarWinSound = document.getElementById("bhaskar-win")

const loseSound = document.getElementById("lose-sound")
const drawSound = document.getElementById("draw-sound")
const resetSound = document.getElementById("reset-sound")

let userChoice
let computerChoice
let result

let userScore = 0
let computerScore = 0

PossibleChoices.forEach(possibleChoice =>
possibleChoice.addEventListener('click',(e)=>{

rockHover.play()

userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice

generateComputerChoice()

resultDisplay.innerHTML = "3..."

setTimeout(()=>{
resultDisplay.innerHTML = "2..."
},500)

setTimeout(()=>{
resultDisplay.innerHTML = "1..."
},1000)

setTimeout(()=>{
getResult()
},1500)

}))

function generateComputerChoice(){

const randomNumber = Math.floor(Math.random()*3)+1

if(randomNumber === 1){ computerChoice = 'rock'}
if(randomNumber === 2){ computerChoice = 'scissors'}
if(randomNumber === 3){ computerChoice = 'paper'}

computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){

if(computerChoice === userChoice){
result = 'draw'
}

if(computerChoice === 'rock' && userChoice === 'paper'){
result = 'win'
}

if(computerChoice === 'rock' && userChoice === 'scissors'){
result = 'lose'
}

if(computerChoice === 'scissors' && userChoice === 'rock'){
result = 'win'
}

if(computerChoice === 'scissors' && userChoice === 'paper'){
result = 'lose'
}

if(computerChoice === 'paper' && userChoice === 'rock'){
result = 'lose'
}

if(computerChoice === 'paper' && userChoice === 'scissors'){
result = 'win'
}

if(result === "win"){

userScore++
userScoreDisplay.innerHTML = userScore
resultDisplay.innerHTML = "Ananya Wins Round 🏆"

ananyaWinSound.play()

setTimeout(()=>{
rockWin.play()
},500)

}

if(result === "lose"){

computerScore++
computerScoreDisplay.innerHTML = computerScore
resultDisplay.innerHTML = "Bhaskar Wins Round 👑"

bhaskarWinSound.play()

setTimeout(()=>{
loseSound.play()
},500)

}

if(result === "draw"){

resultDisplay.innerHTML = "Draw 🤝"
drawSound.play()

}

if(userScore === 3){

resultDisplay.innerHTML = "🏆 Ananya reached 3 points! Please Reset Game 🔄"
disableButtons()

}

if(computerScore === 3){

resultDisplay.innerHTML = "👑 Bhaskar reached 3 points! Please Reset Game 🔄"
disableButtons()

}

}

function disableButtons(){

PossibleChoices.forEach(button=>{
button.disabled = true
})

}

resetButton.addEventListener("click", resetGame)

function resetGame(){

resetSound.play()

userScore = 0
computerScore = 0

userScoreDisplay.innerHTML = 0
computerScoreDisplay.innerHTML = 0

userChoiceDisplay.innerHTML = "_"
computerChoiceDisplay.innerHTML = "_"

resultDisplay.innerHTML = "Game Reset 🎮"

PossibleChoices.forEach(button=>{
button.disabled = false
})

}