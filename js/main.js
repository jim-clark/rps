/*----- constants -----*/
const rpsLookup = {
  r: {imgPath: 'imgs/rock.png', beats: 's'},
  p: {imgPath: 'imgs/paper.png', beats: 'r'},
  s: {imgPath: 'imgs/scissors.png', beats: 'p'},
};

/*----- app's state (variables) -----*/
let scores, results, winner;

/*----- cached element references -----*/
const pResultEl = document.getElementById('p-result');
const cResultEl = document.getElementById('c-result');

/*----- event listeners -----*/
// call the function named handleClick
// when the btn is clicked
document.querySelector('button')
  .addEventListener('click', handleClick);


/*----- functions -----*/
init();

function init() {
  scores = {
    p: 0,
    c: 0,
    t: 0
  };

  // r = rock, p = paper & s = scissors
  results = {
    p: 'r',
    c: 'r'
  };
  // p = player, c = computer, t = tie, 
  winner = 't';
  render();
}

// Transfer/visualize all state
function render() {
  for (let scoreKey in scores) {
    const scoreEl = document.getElementById(`${scoreKey}-score`);
    scoreEl.innerHTML = scores[scoreKey];
  }
  pResultEl.src = rpsLookup[results.p].imgPath;
  cResultEl.src = rpsLookup[results.c].imgPath;
  pResultEl.style.borderColor = winner === 'p' ? 'grey' : 'white';
  cResultEl.style.borderColor = winner === 'c' ? 'grey' : 'white';
}

// The responsibility of responding to user 
// interaction, is to update all impacted
// state, then call render
function handleClick() {
  // randomly generate results for p & c
  results.p = getRandomRPS();
  results.c = getRandomRPS();
  // determine the winner
  if (results.c === results.p) {
    winner = 't';
  } else if (rpsLookup[results.c].beats === results.p) {
    winner = 'c';
  } else {
    winner = 'p';
  }
  // update the scores object
  scores[winner]++;
  render();
}

function getRandomRPS() {
  const idx = Math.floor(Math.random() * 3);
  return ['r', 'p', 's'][idx];
}

