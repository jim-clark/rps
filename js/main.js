/*----- constants -----*/
const rpsLookup = {
  r: 'imgs/rock.png',
  p: 'imgs/paper.png',
  s: 'imgs/scissors.png'
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
  pResultEl.src = rpsLookup[results.p];
  cResultEl.src = rpsLookup[results.c];
}

function handleClick() {
  console.log('clicked')
}

