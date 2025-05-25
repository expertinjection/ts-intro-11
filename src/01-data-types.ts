// Basic data types - string, number, boolean

const favDish: string = 'Salmon';
const age: number = 25;
const isLive: boolean = false;


let variable; // this is any type
variable = 'Hello';
variable = 25;
console.log(variable); // 25


let city: string;
city = 'Chicago';
city = 'Miami';
console.log(city); // 'Miami'




// Arrays and Objects
const numbers: number[] = [ 1, 2, 3, 4 ];

numbers.push(10);
numbers.shift();

console.log(numbers); // [ 2, 3, 4, 10]


const person: {
  fname: string,
  lname: string,
  age: number,
  fullname: () => void;
} = {
  fname: 'John',
  lname: 'Doe',
  age: 25,
  fullname: function(): void {
    console.log(`${this.fname} ${this.lname}`);
  }
}

console.log(person);

const result5 = person.fullname(); // 'John Doe'

console.log('This is checking void object function', result5);


const math: {
  add: (n1: number, n2: number) => number
} = {
  add: function (n1, n2) {
    return n1 + n2;
  }
}

let result: number = math.add(5, 5);

console.log(result); // 10

// Functions
function printHi(): void {
  console.log('Hi');
}


function getRandomNumber(): number {
  return Math.random();
}

const t: string = 'java'
console.log(t)