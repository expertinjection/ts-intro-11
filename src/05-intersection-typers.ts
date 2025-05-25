type Mentor = {
    fullname: string,
    numberOfStudents: number
}

type Instructor = {
    fullname: string,
    subjects: string[]
}
type MentorInstructor = Mentor & Instructor


const mentor1: Mentor = {
    fullname: 'olga',
    numberOfStudents: 5
}


const instructor1: Instructor = {
    fullname: 'Burak',
    subjects: ['cypress', 'playwrite']
}

const fullStack: MentorInstructor = {
    fullname: 'Akin',
    subjects: ['JS', 'TS'],
    numberOfStudents: 5
}