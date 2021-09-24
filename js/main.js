/*----- constants -----*/



/*----- app's state (variables) -----*/
let scores, results, winner;

/*----- cached element references -----*/


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

}

function handleClick() {
  console.log('clicked')
}

