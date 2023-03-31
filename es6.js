const student = {
    name: 'Student name',
    age: 22,
    fn: 7777
};

const studentMarks = {
    name: 'Name',
    ...student,
    marks: [5, 6, 6]
}

console.log(studentMarks)

const { name, age, fn: facultyNumber, mark = 5 } = student
console.log(name)
console.log(mark)
console.log(facultyNumber)

const numbers = [1, 5, 8, 9]
const moreNumbers = [5, 4, ...numbers, 5, 8]
console.log(moreNumbers)
const [ first, , third ] = numbers

let a = 5;
let b = 8;

// let tempt = a
// a = b
// b = temp

[ b, a ] = [a, b]

function sum(...numbers) {
    const result = numbers.reduce((result, number) => result + number, 0)
    console.log(result)
}

sum(5, 8, 9, 8, 6)