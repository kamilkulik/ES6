
/////////////////////////////////////
/// Lecture: let and const
/////////////////////////////////////

// ES5
/*
var name5 = 'Jane Smith';
var age = 23;
name5 = 'Jane Miller';

console.log(name5);


// ES6

const name6 = 'Jane Smith'; // variable that's not gonna change
let age6 = '23'; // variable that's mutable and can change over time
//name6 = 'Jane Miller';
console.log(name6);

// ES5
function driversLicence(passedTest) {
    if (passedTest) {
        console.log(firstName); // in ES5 variables are hoisted to undefined when called before declaration
        var firstName = 'John';
        var yearOfBirth = 1990;
        
    }

    console.log(firstName + ' born in ' + yearOfBirth + ' is now a driver');
}

driversLicence(true);

// ES6

function driversLicence6(passedTest) {

    //console.log(firstName); // we can only use a variable after we declared and defined it
    let firstName;
    const yearOfBirth = 1990; // const has to be declared in parent block for it to work iin child block

    if (passedTest) {
        firstName = 'John';
        
        // let and const variables are block scoped - that means they work only within curly brackets; var is function scoped
    }
    console.log(firstName + ' born in ' + yearOfBirth + ' is now a driver');
}

driversLicence6(true);




let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/
/////////////////////////////////////
/// Lecture: Blocks and IIFEs
/////////////////////////////////////
/*
//ES 6
{
    const a = 1;
    let b = 2;
    var c = 3
}

//console.log(a+b);
console.log(c);

// ES5
(function() {
    var c = 6
    //console.log(c);
})();

//console.log(c);

*/

/////////////////////////////////////
/// Lecture: Strings
/////////////////////////////////////

/*
let firstName = 'john';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}

//template literals


// ES5

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' year old.');

// ES6
// ` this is a backtick. It declares a template literal. Now we can write all variables and strings in one line
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} year old.`);

// STRING METHODS

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j')); // start of string
console.log(n.endsWith('th')); // end of string
console.log(n.includes(' ')); // middle of string
console.log(`${firstName} `.repeat(5));
*/

/////////////////////////////////////
/// Lecture: Arrow functions
/////////////////////////////////////

/*
const years =  [1990, 1965, 1942, 2000];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);

// ES6

let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index +1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el,index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index +1}: ${age}`;
});
console.log(ages6);
*/

/////////////////////////////////////
/// Lecture: Arrow functions 2
/////////////////////////////////////

// arrow functions share the surrounding .this keyword
// arrow functions don't have their own .this keyword, they use the .this keyword of the function they are written in. That means they have a lexical .this variable

// ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();
R*/

// above doesn't work because .this keyword is attached to callback function which points to the window object. clickMe method DOES have access to object's properties, but it's callback function does not

 // ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();
/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => { // clickMe method now shares lexical context of it's surrounding which is the global context. So it shares the global .this keyword
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();
*/
/*
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

*/

// ES6

/*
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => 
        `${this.name} is friends with ${el}`
    );

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends6(friends);
*/

/////////////////////////////////////
/// Lecture: Destructuring
/////////////////////////////////////

// imagine we have an array of data and we want to store its contents in a variable

// ES5

/*
var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6

// ARRAY 
const [name,age] = ['john', 26];

console.log(name);
console.log(age);

// OBJECT

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {firstName, lastName} = obj
console.log(firstName);
console.log(lastName);

// OBJECT + VARIABLE RENAMING

const {firstName: a, lastName: b} = obj;

console.log(a);
console.log(b);
*/

// APPLYING THESE CONCEPTS IN A FUNCTION TO CALCULATE RETIREMENT AGES

/*
function Person(year, name) {
    this.year = year;
    this.name = name;
};

Person.prototype.retirement = function() {
    const now = new Date().getFullYear();
    return 65 - (now - this.year);
}

const john = new Person(1987, 'john');
const amy = new Person(1969, 'amy');
const brad = new Person(2001, 'brad');

function calcRetirement(obj) {
    const now = new Date().getFullYear();
    const retireAge = 65 - (now - obj.year);
    return `${obj.name} will retire in ${retireAge} years`
}
calcRetirement(john)

*/
/*
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65-age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);
*/

/////////////////////////////////////
/// Lecture: Arrays
/////////////////////////////////////
/*
const boxes = document.querySelectorAll('.box'); // querySelectorAll returns a nodes list

// ES5


// converting the nodes list from const boxes to an array
var boxArr = Array.prototype.slice.call(boxes);
// changing color of each box to blue
boxArr.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

console.log(boxArr);


// ES6


const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

*/
// ES5
/*
for (var i = 0; i < boxArr.length; i++) {
    if (boxArr[i].className === 'box blue') {
        continue;
    }

    boxArr[i].textContent = "I changed to blue!";

}


for (const cur of boxesArr6) { // define variable cur and use 'of' to assign it to array of boxesArr6
    if (cur.className.includes('blue'))
    { // className method gets and sets the value of class attribute of the specified element.
        continue;
    }
    cur.textContent = 'I changed to blue!';
}


// ADDITION TO INDEXOF METHOD  - help to find elements in an array
// who from the group is of full age and how old exactly that person is

// ES5

var ages = [12, 17, 8, 21, 14, 11];

MY FIRST SOLUTION
var fullAges = []; // returns an array of indexes of elements greater than 18

for (var i = 0; i < ages.length; i++) {
    if (ages[i] > 18) {
        fullAges.push(ages.indexOf(ages[i]));
    }
}
console.log(fullAges);


var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)])


// ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

*/

/////////////////////////////////////
/// Lecture: Spread operators
/////////////////////////////////////

// They work not only on arrays but any iterable object like node list as well
/*
function addFourAges(a,b,c,d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// passing an array into that function

// ES5

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['Mark', 'John', 'Sally'];
const familyMiller = ['Jane', 'Tom', 'Jason'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

// ... spread operator on a node list

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple')
*/

/////////////////////////////////////
/// Lecture: Rest parameters
/////////////////////////////////////


// USE CASE: rest parameters allow to pass arbitrary parameters into a function and use that function

// NOTATION: '...' as the spread operator, but they work in a completely opposite way

// HOW IT WORKS: takes separate parameters and bunches them up together for function to consume
/*
// ES5

function isFullAge5() {
    // in ES5 if we want to pass an unspecified amount of parameters into the function,  we leave the brackets empty, and then just use the "arguments" keyword / variable; each aexecution context has access to this.
    //console.log(arguments);

    //changing the object into an array:
    var argArr = Array.prototype.slice.call(arguments);

    // loop through the array and calculate if each person is of full age
    argArr.forEach(function(cur){
        console.log((2019-cur) >= 18);
    });
}

//isFullAge5(1990, 2003, 1969);

// ES6

function isFullAge6(...years) {
    years.forEach(cur => console.log((2019-cur) >= 18));
}

isFullAge6(1990, 1969, 2018, 1999);

*/

// ES5
/*
function isFullAge5(limit) {
    var argArr = Array.prototype.slice.call(arguments,1);
    console.log(argArr);

    argArr.forEach(function(cur){
        var year = new Date().getFullYear();
        console.log((year-cur) >= limit);
    });
}

//isFullAge5(21, 1990, 2003, 1969, 2000);

// ES6

function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((new Date().getFullYear()-cur) >= limit));
}

isFullAge6(16, 1969, 2018, 1999);
*/

/////////////////////////////////////
/// Lecture: Default parameters
/////////////////////////////////////

/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName;
    nationality === undefined ? nationality = 'American' : nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
*/

// ES6
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/

/////////////////////////////////////
/// Lecture: Maps
/////////////////////////////////////

// ORIGIN. Very common use of JS objects is to use them as hash maps - we map string keys to arbitrary values

// WHAT IS IT? a MAP is a key value data structure in ES6. We can use anything for the keys

// DIFFERENT BETWEEN OBJECTS AND STRINGS: with objects we are limited to just strings - with #maps we can use whatever we want (primitive values), functions etc
/*
const question = new Map();
question.set('question','What is the official name of the latest JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'That\'s correct');
question.set(false, 'Please try again!');

console.log(question.get('question'));
*/
/*console.log(question.size);

if(question.has(4)) {
    //question.delete(4);
    console.log('item 4 is here')
}
*/
// ARE THEY ITERABLE? YES!! Which means we can loop through them - something that cannot be done with objects

//question.forEach((value, key) => console.log(`This is the ${key} and it's value is set to ${value}`));
/*
for (let [key, value] of question.entries()) {
    //console.log(`This is the ${key} and it's value is set to ${value}`); // priting all of the key & value pairs in the map
    // SELECTING VALUES TO PRINT - only when the KEY is a number
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

// normally we'd have to use the if else statement is we had answers stored in an object but we don't so we can do something else

// COMPARE answer with the input

console.log(question.get(ans === question.get('correct')));
*/
/*

WHY ARE MAPS BETTER THAN OBJECTS?
1. We can use anything as keys: primitives, objects, functions
2. Maps are iterable, meaning we can loop through them, manipulate the data
3. It's easy to get size of the map by using the .size method
4. We can easily add and remove data from the map

*/

/////////////////////////////////////
/// Lecture: CLASSES
/////////////////////////////////////

/*

Classes actually don't add anything new to the language. They just change the way we do prototypal inheritance with JS. Classes make it easier to implement inheritance and to create objects based on blueprints.

In ES5 we call those blueprints function constructors

HOISTING - class definitions are not hoisted. We need to first implement class and then and only then start using them. 
PROPERTIES - there are NONE. We cannot add them to classes, only methods. That's not a problem. Inheriting properties by object instances is not a good practice anyway.

*/


// ES5
/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');
console.log(john5);

john5.calculateAge();

// ES6

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    } // there are no semicolons after curly brackets or anything like that
    // we can then go ahead and add calculateAge method right here in the class
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    // STATIC METHODS - they are attached to the class but are not inherited by class instances

    static greeting() {
        console.log('Hey there!');
    }

}

const john6 = new Person6('John', 1990, 'teacher');
Person6.greeting();
*/


/////////////////////////////////////
/// Lecture: subCLASSES
/////////////////////////////////////

// USE CASE: we use subclasses to implement inheritence between classes

// Inheritence in ES5

/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');
console.log(john5);

john5.calculateAge();

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    // when creating a new Athlete object, new creates a new empty object, calls the Athlete function constructor and set the this keyword to the newly created empty objects. In execution context we're in here, the this keyword points to a newly created empty object. If we want the name, yearOfBirth and job properties set on the newly created Athlete object, we need to call the Person function constructor with the this keyword also set to a newly created Athete constructor.
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

// to create a correct prototype chain, we will use object.create - allows to manually set prototype of the object. We want the prototype of the Athelete to be the prototype of Person

// subclass extends superclass
// CONNECTING TWO FUNCTION CONSTRUCTORS
Athlete5.prototype = Object.create(Person5.prototype);
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
// now the Athlete 5 object inherits prototype of the Person object


// ADDING PROTOTYPE METHODS - this needs to be done after prototype is defined as created out of the Person5 prototype
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
*/

// ES6


// SUPERCLASS:
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    } // there are no semicolons after curly brackets or anything like that
    // we can then go ahead and add calculateAge method right here in the class
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

}

// SUBCLASS:

class Athlete6 extends Person6 {
     // ALL CLASSes need to have constructor method
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedals() {
        this.medals++;
        console.log(this.medals);
    }

}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedals();
johnAthlete6.calculateAge();



/////////////////////////////////////
/// Lecture: CHALLENGE
/////////////////////////////////////

// 
