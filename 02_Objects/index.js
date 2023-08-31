/*
- Object Literal
when our values are written within our keys. "Hard-Coded"

*Structure:
keyword objectName = {
  key:value,
}
*/
let marvelHero = {
 fullName: 'Peter Parker',
 codeName: 'Spider-Man',
 age: 17,
 active: true 
};

// dot notation
console.log(marvelHero.codeName);


// ! The Simpsons
const theSimpsons = {
  id: 1,
  est: 1989,
  category: 'animated',
  seasons: {
    'season one': [
      {
        episode_title: 'Simpsons Roasting on an Open Fire',
        aired: '1989-12-17'
      }, 
      {
        episode_title: 'Bart the Genius',
        aired: '1990-01-01'
      }
    ],
    'season two': [],
    'season three': [] 
  },
  currently_running: true
};

// square bracket notation
// ? console.log(theSimpsons['seasons']);
// ? console.log(theSimpsons.seasons);
// let targetSeason = 'season one';
// ? console.log(theSimpsons.seasons['season one']);
// console.log(theSimpsons.seasons.season one); ERROR

// ! CHALLENGE: in the console, using theSimpsons object, print out "Simpsons Roasting on an Open Fire"

console.log(theSimpsons.seasons['season one'][0].episode_title);

// re-assign properties of an object
console.log(theSimpsons.currently_running);
theSimpsons.currently_running = 'of course!';
console.log(theSimpsons.currently_running);

// add a new key to an existing object
// console.log(theSimpsons.characters); //? undefined
theSimpsons.characters = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'];
console.log(theSimpsons.characters); //? see above line

/* CHALLENGE 
 - use an array method to add another character to the character array
 - print out ONLY the characters from theSimpsons object
*/
theSimpsons.characters.push('Flanders'); 
console.log(theSimpsons.characters);
console.log(...theSimpsons.characters);

// Keys of an object
// gives us back an array holding each key name as a string
let keyList = Object.keys(theSimpsons);
console.log('keys', keyList);

// Values of an object
// gives us back an array holding each value from the properties
let valList = Object.values(theSimpsons);
console.log('values:', valList);

// removing a key
console.log('BEFORE:', Object.keys(theSimpsons));
// delete keyword, then use dot notation on the key to remove
delete theSimpsons.currently_running;
console.log('AFTER:', Object.keys(theSimpsons));
console.log(theSimpsons);

// DESTRUCTURING
let [homie, marge] = theSimpsons.characters;
console.log(homie, marge);

// instead of going in order from top to bottom, we can choose specific keys we want from an object
// in a simple Object Destructure, the new variable will be named the same as the key you want to target
// characters = theSimpsons.characters
const {characters, seasons} = theSimpsons;
//*const characters = theSimpsons.characters;
//*const seasons = theSimpsons.seasons;
console.log('destructured characters:', characters);
console.log('destructured seasons:', seasons);

// this syntax will allow us to "rename" our property into a new variable that does not require a shared name
const { est: established} = theSimpsons;

console.log('Established:',established);

// Spread Operator with Object
const simpsonsCharacters = {
  simpsonsHouse: ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'],
  moesTavern: ['Moe', 'Barney'],
  showAge:34
};

const locations = {
  // spread operator to copy information
  // spread operator copies the "value" at the time of use, reference types will act different than value types. so numbers and string will not change retroactively; however arrays and objects will.
  ...simpsonsCharacters,
  dmv:['Patty', 'Selma']
};

simpsonsCharacters.simpsonsHouse[0] = 'Flanders';

console.log(locations);




/*
! Challenge

TODO print out each key/value pair in a given object in one line, they should be formatted as:
  ? firstKey: firstValue, secondKey: secondValue, ... etc

*  ideal output is:
*  'father: Homer, mother: Marge, daugher: Lisa, son: Bart, baby: Maggie'
*/

let simpsonsFamily = {
  father: 'Homer',
  mother: 'Marge',
  daughter: 'Lisa',
  son: 'Bart',
  baby: 'Maggie'
}

let output = [];
//? let concat_output = '';

for (let keyName in simpsonsFamily) {
  //let result = keyName + ':';
  let result = `${keyName}: ${simpsonsFamily[keyName]}`;
  output.push(result);
  //? concat_output += ', ' + result;
}

//? console.log(concat_output.slice(2));
console.log(output.join(', '));

// Notes
/*
 somehow loop over this object:
  for ... in
   - loop over the object and give me back each key

  Object.keys()
   - give me an array containing each key
    - useful because I can use array methods
     - for ... of
     - for ... in
     - forEach()
     - .map() 
     
  Now that I have each 'key:value' printing, I need to combine them.
   concatinate strings
    - somehow store a string which they will all be pushed into
 
   join strings together
    - requires an array
    - will combine each item from the array into a single string 

*/

/*
for (let [key, value] of Object.entries(simpsonsFamily)) {
  //console.log(key, value);
}

console.log(simpsonsFamily);
*/