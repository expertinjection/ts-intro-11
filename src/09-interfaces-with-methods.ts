interface Shape {
    area: () => number,
    preimeter: () => number
}

class Square implements Shape{
    side: number
    constructor(side: number) {
        this.side = side
    }
    area (): number {
        return this.side ** 2
    }
    preimeter (): number {
        return 4 * this.side
    }
}

const square1: Square = new Square(5)

console.log(square1.area())
console.log(square1.preimeter())

