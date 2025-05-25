type Car ={
    make: string,
    model: string,
    year: number,
    electric: () => boolean
}
const tesla: Car = {
    make: 'Tesla',
    model: 'S',
    year: 2025,
    electric: () =>{
        return true
    }
}

const bmw: Car = {
    make: 'BMW',
    model: 'M5',
    year: 2025,
    electric: () =>{
        return false
    }
}

console.log(tesla.electric)
console.log(bmw.electric)