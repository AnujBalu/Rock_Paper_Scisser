const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')

const show1 = document.getElementById('c_scr');
const show2= document.getElementById('d_scr');
const show3 = document.getElementById('y_scr');
var y_scr = 0;
var c_scr = 0;
var d_scr = 0;
show1.innerText= `Computer Score: ${c_scr}`;
show3.innerText= `Your Score: ${y_scr}`;
show2.innerText= `Draw Score: ${d_scr}`;
const SELECTIONS = [
  {
    name: 'rock',
    beats: 'scissors'
  },
  {
    name: 'paper',
    beats: 'rock'
  },
  {
    name: 'scissors',
    beats: 'paper'
  }
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
  
    if (selectionName == "rock"){
    const user = document.getElementById('rock');
    makeSelection(selection,user)
    }
    
    else if (selectionName=="paper"){
      const user = document.getElementById('paper');
      makeSelection(selection,user)
    }
    else if(selectionName=="scissors"){
      const user = document.getElementById('scissors');
      makeSelection(selection,user)
    }
    
    
  })
})

function makeSelection(selection,user) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner,yourWinner,user)

}


function addSelectionResult(c_selection, c_winner,u_winner,user) {
  
 

  if (c_selection.name == "rock"){
    const user1 = document.getElementById('c_rock');
    user1.style.backgroundColor='red';
    user.style.backgroundColor='red';
    setTimeout(() => { user.style.backgroundColor='' }, 1000);
    setTimeout(() => { user1.style.backgroundColor='' }, 1000);
  }
  
  else if (c_selection.name=="paper"){
    const user1 = document.getElementById('c_paper');
    user1.style.backgroundColor='red';
    user.style.backgroundColor='red';
    setTimeout(() => { user.style.backgroundColor='' }, 1000);
    setTimeout(() => { user1.style.backgroundColor='' }, 1000);
  }
  else if(c_selection.name=="scissors"){
    const user1 = document.getElementById('c_scissors');
    user1.style.backgroundColor='red';
    user.style.backgroundColor='red';
    setTimeout(() => { user.style.backgroundColor='' }, 1000);
    setTimeout(() => { user1.style.backgroundColor='' }, 1000);
  }

  if(c_winner){
    c_scr = c_scr+1;
    const resul = document.getElementById('result');
    const words = document.getElementById('win');
    const show = document.getElementById('c_scr');
    setTimeout(() => { resul.style.display='block' }, 100);
    words.innerText='COMPUTER\n WINS';
    show.innerText= `Computer Score: ${c_scr}`;
    setTimeout(() => { resul.style.display='none' }, 1200);


  }
  else if(u_winner){
    y_scr = y_scr+1;
    const resul = document.getElementById('result');
    const words = document.getElementById('win');
    const show = document.getElementById('y_scr');
    setTimeout(() => { resul.style.display='block' }, 100);
    words.innerText='YOU\n WINS';
    show.innerText= `Your Score: ${y_scr}`;
    setTimeout(() => { resul.style.display='none' }, 1200);

  }
  else{
    d_scr = d_scr+1
    const resul = document.getElementById('result');
    const words = document.getElementById('win');
    
    const show = document.getElementById('d_scr');
    setTimeout(() => { resul.style.display='block' }, 100);
    words.innerText='DRAW';
    show.innerText= `Draw Score: ${d_scr}`;
    setTimeout(() => { resul.style.display='none' }, 1200);
  }


}


function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}