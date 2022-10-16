function getComputerChoice() {
    const list =['Rock', 'Paper', 'Scissors'];
    const randomIndex= Math.floor(Math.random()*list.length);
    return list[randomIndex]; 
}
// console.log(getComputerChoice());

function SingleRound(){
    const playerSelection = prompt ("Enter your selection");
    const computerSelection = getComputerChoice;
    const player = playerSelection.toString().toLowerCase();
    const computer = computerSelection.toString().toLowerCase();
    if (player==computer) {
        alert ("It's a draw")
        return "a draw"
    } else if (player=="rock") {
        if (computer=="paper") {
            alert ("You loose! Paper beats rock")
            return "loose"
        } else { //computer==scissors
            alert ("You win! Rock beats scissors")
            return "win"
        }
    } else if (player=="paper") {
        if (computer == "rock") {
            alert ("You win! Paper beats rock")
            return "win"
        } else {//computer == scissors
            alert ("You loose! scissors beat paper")
            return "loose"
        }
    } else if (player=="scissors"){ 
        if (computer=="rock") {
            alert("You loose! Rock beats scissors")
            return "loose"
        } else {//computer==paper
            alert ("You win! Scissors beat paper")
            return "win"
        }
         
    } else {
        alert ("error")
        return "error"
    }
    }       
//console.log(SingleRound()); 

function game(){
    let playerResult = 0;
    let computerResult = 0;
    for (let i = 0; i < 5; i++){
        let result1 = SingleRound();
        if (result1=="win") {
            playerResult++;
            console.log(playerResult)
            console.log(computerResult)
        } else if (result1=="loose") {
            computerResult++
            console.log(playerResult)
            console.log(computerResult)
        } else if (result1=="a draw") {
            //pass
            console.log(playerResult)
            console.log(computerResult)
        } else  { //result1=="error"
            alert ("misspelling")
            console.log(playerResult)
            console.log(computerResult)
        }
    }
    if (playerResult > computerResult) {
        alert ("you win!" + " " + playerResult + " to " + computerResult)
    } else if (computerResult > playerResult) {
        alert ("you loose!" + " " + playerResult + " to " + computerResult)
    } else {
        alert ("it's a draw"+ " " + playerResult + " to " + computerResult)
    }
    }

console.log(game())