# TypeScript Reference Guide

## 📘 TypeScript Data Types
TypeScript extends JavaScript by adding types. Here are the major TypeScript data types with examples:

### 1. Primitive Types
- **String**
  ```ts
  let name: string = "Alice";
  ```
- **Number**
  ```ts
  let age: number = 30;
  ```
- **Boolean**
  ```ts
  let isAdmin: boolean = true;
  ```
- **Null & Undefined**
  ```ts
  let u: undefined = undefined;
  let n: null = null;
  ```
- **Symbol & BigInt**
  ```ts
  let sym: symbol = Symbol("id");
  let big: bigint = 12345678901234567890n;
  ```

### 2. Arrays
```ts
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
```

### 3. Tuples
```ts
let tuple: [string, number] = ["John", 25];
```

### 4. Enums
```ts
enum Role { Admin, User, Guest }
let userRole: Role = Role.Admin;
```

### 5. Any
```ts
let data: any = 10;
data = "text";
```

### 6. Unknown
```ts
let value: unknown = 10;
```

### 7. Void
```ts
function logMessage(): void {
  console.log("Logging...");
}
```

### 8. Never
```ts
function throwError(): never {
  throw new Error("Error occurred");
}
```

## 🧰 Functions in TypeScript

### 1. Function with Types
```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### 2. Optional and Default Parameters
```ts
function greet(name: string = "Guest"): string {
  return `Hello, ${name}`;
}
```

### 3. Function Types
```ts
let calculate: (a: number, b: number) => number;
calculate = (x, y) => x + y;
```

## 👤 Interfaces and Types

### 1. Interface
```ts
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Jane",
  age: 32
};
```

### 2. Type Alias
```ts
type Point = {
  x: number;
  y: number;
};

const pt: Point = { x: 10, y: 20 };
```

## 🏗️ Classes
```ts
class Animal {
  constructor(public name: string) {}

  move(distance: number): void {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

const dog = new Animal("Dog");
dog.move(10);
```

## 🔁 Generics
```ts
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello");
```

## ⏳ Promises and Async/Await

### 1. Promise
```ts
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success"), 1000);
});
```

### 2. Async/Await
```ts
async function fetchData(): Promise<void> {
  const result = await promise;
  console.log(result);
}

fetchData();
```

---
This guide helps you understand key TypeScript features with practical syntax and use cases.
