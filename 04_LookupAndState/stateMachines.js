//! State Machine

// represent each current "state" as well as which "state" you may enter, given your current state
//? this "state" is going to represent a traffic light
let state = {
  // current location: [next valid location list]
  green: ['yellow'],
  yellow: ['red'],
  red: ['green', 'yield'],
  yield: ['red']
};

// starting state
let currentState = 'green';

// function will allow me to change between different light states
function enterState(newState) {
  // start by establishing which state we want to enter (parameter newState)
  // check where we are currently allowed to go -> state[currentState]
  
  //? console.log where we are currently, along with where that current location can go
  let validTransitions = state[currentState];
  //console.log(validTransitions);

  // check if we are even allowed to move to our desired state
  //console.log(newState);
  //console.log(validTransitions.includes(newState)); // .includes() method to check whether our array contains a specific value
  //   if it is a new valid location, we want to move and make note of the change
  if(validTransitions.includes(newState)) { // only if my new state is valid
   currentState = newState;
   console.log(currentState);
  }
  //   otherwise we will not move, and instead warn the user
  else {
    // console.log(`Invalid State: ${currentState} to ${newState}`);
    throw(`Invalid State: ${currentState} to ${newState}`); //* "throw" an error
  }
}

enterState('yellow');
enterState('red');
enterState('yield');
enterState('green'); //! ERROR: see line 36 (throw)
//enterState('pizza party'); //! ERROR

//* if we want currentState to remain controlled, we will have to only change it's value using enterState()

currentState = 'pizza party'; // this will change as a normal variable
console.log(currentState);
