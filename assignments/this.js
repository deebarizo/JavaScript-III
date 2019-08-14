/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. In the global scope, "this" is the window object.
 
 * 2. When you call a method, "this" is the object left of the preceding dot.
 
 * 3. When an object is instantiated with a constructor function, "this" is the specific instance of the object created by the construction function.
 
 * 4. When the "call" or "apply" method is used, "this" is defined explicitly.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
const sayName = function(name) {
  console.log("Window Binding (this):", this);
  return name;
};
sayName("Dee Barizo");

// Principle 2

// code example for Implicit Binding
const human = {
  greeting: "Hello",
  sayHello: function(name) {
    console.log(
      "Implicit Binding in sayHello method:",
      `${this.greeting}, my name is ${name}`
    );
    console.log("Implicit Binding in sayHello method (this):", this);
  }
};
human.sayHello("Dee");

// Principle 3

// code example for New Binding
function Person(greeter) {
  this.greeting = "Hello";
  this.greeter = greeter;
  this.speak = function() {
    console.log(
      "New Binding in speak method:",
      `${this.greeting}, my name is ${this.greeter}`
    );
    console.log("New Binding in speak method (this):", this);
  };
}

const dee = new Person("Dee");
const frank = new Person("Frank");

dee.speak();
frank.speak();

// Principle 4

// code example for Explicit Binding
function Character(greeter) {
  this.greeting = "Hello";
  this.greeter = greeter;
  this.speak = function() {
    console.log(
      "Explicit Binding in speak method:",
      `${this.greeting}, my name is ${this.greeter}`
    );
    console.log("Explicit Binding in speak method (this):", this);
  };
}

const john = new Character("John");
const steve = new Character("Steve");

john.speak.call(steve);
steve.speak.apply(john);
