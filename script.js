constselectionButtons = document.querySelectorAll('[data-selection]')
constfinalColumn =document.querySelector('[data-final-column]')
constcomputerScoreSpan = document.querySelector('[data-computer-score]')
constyourScoreSpan = document.querySelector('[data-your-score]')
constSELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper'
  }
]
functionmakeSelection(selection){
    constcomputerSelection = randomSelection()
    constyourWinner =isWinner(selection,computerSelection)  
    constcomputerWinner = isWinner(computerSelection,selection)
  
  
    addSelectionResult(computerSelection,computerWinner)
  
    addSelectionResult(selection,yourWinner)
  
  
  
    if(yourWinner) incrementScore(yourScoreSpan)
  
    if(computerWinner) incrementScore(computerScoreSpan)
  
  }
  
  
  
  functionincrementScore(scoreSpan){
  
    scoreSpan.innerText= parseInt(scoreSpan.innerText)+ 1
  
  }
  
  
  
  functionaddSelectionResult(selection,winner) {
  
    constdiv = document.createElement('div')
  
    div.innerText= selection.emoji
  
    div.classList.add('result-selection')
  
    if(winner) div.classList.add('winner')
  
    finalColumn.after(div)
  } 
  functionisWinner(selection,opponentSelection) {
      returnselection.beats=== opponentSelection.name
  }
    functionrandomSelection(){
      constrandomIndex =Math.floor(Math.random()* SELECTIONS.length)
    returnSELECTIONS[randomIndex]  
  }
selectionButtons.forEach(selectionButton=> {
  selectionButton.addEventListener('click',e => {
    constselectionName = selectionButton.dataset.selection
    constselection =SELECTIONS.find(selection=> selection.name=== selectionName)
    makeSelection(selection)
  })
})