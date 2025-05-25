// Union Types

let productPrice: number | string = '19.99';

productPrice = 10;


const data: (string | null) [] = ['John', 'Jane', 'Alex', null]; 


function anyFunc(): any {

}

function concat(arg1: string | number, arg2: string | number): void {
  console.log(arg1, arg2);
}


let var1 = 'Hello';
let var2 = 5;

console.log(var1 + var2);

// Literal Types
let deliveryType: 'Pick up' | 'Delivery';

deliveryType = 'Delivery';


let deliveryStatus: 'Order Received' | 'Packaging' | 'Shipped' | 'On The Way' | 'Completed';

deliveryStatus = 'Shipped';


/*
Write a function that takes a number array as param
returns the sum of numbers

[1, 2, 3] -> 6
*/

const sum = (arr: number[]): number => {
  return arr.reduce((acc: number, curr: number) => acc + curr, 0);
}

const exampleArr: number[] = [ 1, 2, 3 ];

console.log(sum(exampleArr)); // 6

// function sum(arr: number[]): number {
//  return arr.reduce((acc: number, curr: number) => acc + curr, 0);
// }



// Creating Object with TS
const car: {
  make: string,
  model: string,
  year: number | string
} = {
  make: 'Tesla',
  model: 'X',
  year: '2025'
};


const student: { [key: string]: string | number } = {
  fullname: 'John Doe',
  nickname: 'John Wick',
  favTopic: 'CS',
  age: 25
};



// Tuples
let user: [string, string, number];

user = ['John', 'Doe', 25];

console.log('Tuple user =', user);


let user2: (string | number)[];

user2 = [ 1, 2, 3, 'Hello', 'John' ];


const expectedTexts: string[] = ['Product Name', 'Quantity', 'Discount'];