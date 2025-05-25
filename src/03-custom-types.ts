type Student = {
    fname: string,
    lname: string,
    program: string,
    registerd: boolean
}

const s1: Student ={
    fname: 'Haitham',
    lname: 'Laith',
    program: 'SDET',
    registerd: true
}

const s2: Student ={
    fname: 'Maray',
    lname: 'Jana',
    program: 'SDET',
    registerd: false
}

const s3: Student ={
    fname: 'alaa',
    lname: 'zico',
    program: 'SDET',
    registerd: true
}



const students: Student[] = [s1, s2, s3]

const numberOfRegisteredStudents: number = students.reduce((acc: number, curr: Student) => {
     if(curr.registerd) acc += 1
     return acc
},0)

console.log(numberOfRegisteredStudents)
