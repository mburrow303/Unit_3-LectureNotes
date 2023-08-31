/*
!Classes

  - Introduced in 2015
  - a  function that helps us create objects
  - defines a "category" of objects

  New Keywords:
   - class
   - new
   - this 
   - constructor

  Base Structure:
  
  * class names are typically written in PascalCasing
  class NameOfClass {
    constructor(parameter) {
      this.key = parameter
    }

    methodName() {
      ... code goes here
    }
  }
*/

// 1    2  
class Cookie {
  //    3             4  
  constructor(shape, icing, price) {
  // 5    6       7
   this.shape = shape;
   this.icing = icing;
   this.price = price;
  }
}

/*
 * 1. we have our "class" keyword to tell JavaScript what we are making
 * 2. the name of our class, this is how we will refer to this "cookie cutter"
 *     - this is written using PascalCasing so that later in our code, we know it is a class
 * 3. constructor keyword, this is going to make a function that runs when we make a new "instance" of our class. This outlines what key/value pairs we have on our object
 * 4. parameters given to our object when we create (or "instantiate") it
 * 5. "this" keyword. tells our code which "instance" of the class is getting the information provided. when we make a new instance, we want our information attached to "this" copy.
 * 6. the name of the key we are creating for our object
 * 7. the value assigned to that key, this is the parameter being passed through
*/

// Instantiating Classes
let firstCookie = new Cookie();
console.log(firstCookie);
firstCookie.shape = "Triangle";
console.log(firstCookie);

const secondCookie = new Cookie('Square', 'Blue Maple', 12.45, "uh oh");
console.log(secondCookie);

//! without our "new" keyword, we cannot invoke our constructor method, meaning we cannot create a new instance of a class
// const charredCookie = Cookie('Circle', 'Squid Ink', 97);
// console.log(charredCookie);

//? Factory Functions
// we can create functions that will create and give back objects for us, using a class as a blueprint

let reqShape = 'Pizza';
let reqIcing = 'Red Sauce';
let reqPrice = 4.99;

// factory function
function bakeCookie(shape, icing, price) {
  // we *could* modify our parameter if needed
 return new Cookie(shape, icing, price);
}

let requestedCookie = bakeCookie(reqShape, reqIcing, reqPrice);
console.log(requestedCookie);

// side Notes with Jerome
/*
function sideNote() {
  console.log('Wow! what a neat little note.');
}

sideNote('No, this is a rather stupid note.');
*/
// JavaScript simply ignores extra parameters given to functions
// when it is not given a value for a parameter, that value is "undefined"


class StoreInventory {
  constructor(dept) {
    this.department = dept;
    this.items = [];
  }

  // Methods - Function within an Object
  addToInventory(newItem) {
    this.items.push(newItem);
    console.log('New Item Added!');
  }
}

let cookies = new StoreInventory('cookie');
console.log(cookies);

let gingerBread = new Cookie('Person', 'none', 3);

cookies.addToInventory(gingerBread);
cookies.addToInventory(secondCookie);
console.log(cookies);


//? Class Inheritance
// we can have one class inherit properties from another class, and expand upon it's properties and methods

class Car {
  constructor(wheels, engine, passengers) {
    this.wheels = wheels;
    this.engine = engine;
    this.passengers = passengers;
  }

  honkHorn() {
    console.log('Beep Beep');
  }
}

let firstCar = new Car(4, 'v8', 7);
firstCar.honkHorn();
console.log(firstCar.wheels);

// setting up inheritance
class Motorcycle extends Car {
  constructor(wheels, engine, passengers, requiresHelmet, canWheelie) {
    super(wheels, engine, passengers); // act like the constructor in the parent class (Car)
    //* MUST call super constructor, before using "this", even if the super is empty, it must be called first.
    //this.passengers = 0; // this will override the parent class constructor
    this.requiresHelmet = requiresHelmet;
    this.canWheelie = canWheelie;
  }

  doAWheelie() {
    this.canWheelie ? console.log('This bike does a RAD wheelie!') : console.log('This bike does not have the strength to reel back...:(');
  }

  honkHorn() {
    console.log('*malicious revving*');
  }
}

let harley = new Motorcycle(2, 'v6', 2, false, true);
// harley.wheels = 2; // if wheels was left undefined in the above parameters it can be added to in this way
console.log(harley);
harley.honkHorn();
harley.doAWheelie();

//firstCar.doAWheelie(); //? TypeError: firstCar.doAWheelie is not a function
