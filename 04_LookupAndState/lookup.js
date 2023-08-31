//! Challenge from prior lessons info
/*
? Given the current object:
    * create a function that will take in some string as an input
    * then, depending on what was given as that input, return either:
        * the bio
        * their posts one at a time
        * a string containing each user they are following
        * a response telling them there is no matching information

   Finally, print out one piece of information using the created function
*/

let followedUsers = ["fellow-stan", "n0t4b0t", "definitely_real_human", "xXx_redditor838728734_xXx"];

let socialMediaUser = {
  posts: [
    "LOL just ate some ice cream",
    "something was flying around in my room... hope it isn't a moth",
    "the air has more moisture than my glass of water"
  ],
  following: followedUsers,
  bio: "fun-loving user of this example social media. looking to have a good time, all thoughts posted here are my own"
};

function displayInformation(search) {
 switch(search) {
  case 'bio':
    return socialMediaUser.bio;
    // ? return socialMediaUser['bio'];
    // ? return socialMediaUser[search];
    // break //* not required due to the return statement
 }
}

console.log(displayInformation('bio'));

// if (search === 'bio') {
  // return socialMediaUser.bio;
//  }

//! Lookup Tables

const listGames = (system) => {
  let collection = {
    "Nintendo": ["Duck Hunt", "The Legend of Zelda", "Super Mario Bros.", "Tecmo Bowl"],
    "Super Nintendo": ["Super Mario World", "F-Zero", "Star Fox"],
    "Nintendo 64": ["Super Mario 64", "GoldenEye 007", "Mario Kart 64", "Donkey Kong 64"]
  };

  return collection[system];
};

let myGames = listGames('Nintendo 64');
console.log(myGames);

//* this is NOT a callback function, if it were a callback, we would not be invoking the listGames function
//? console.log(listGames('Nintendo 64'));

const stateAbbreviation = {
  colorado: 'co',
  vermont: 'vt',
  indiana: 'in',
  ohio: 'oh',
  "new york": 'ny'
};

const acronyms = {
  asap: 'as soon as possible', 
  fomo: 'fear of missing out',
  gif: 'graphics interchange format',
  lol: 'laugh out loud'
}

function findIt(dict, search) {
  return dict[search];
}

console.log(findIt(stateAbbreviation, "Indiana"));
console.log(findIt(acronyms, 'gif'));