type Employee = {
    fullname: string,
    middlename?: string,
    age: number,
   readonly SSN: string
}

const e1: Employee = {
    fullname: 'zara',
    age: 25,
    SSN: '123-12-1234'
}
e1.age = 26
//e1.SSN = '000-00-0000' Cannot assign to 'SSN' because it is a read-only property.

console.log(e1)
