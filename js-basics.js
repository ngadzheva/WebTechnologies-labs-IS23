e = 5;

let b = 2;

const d = 8;

function sum(a, b, c = 7, k = 6) {
    var d = 3;
    var g = 5;

    e += 8;

    console.log(e);
    console.log(d);

    if (e > 10) { 
        let f = 7;
        var ff = 6;
        dd = 5
        console.log(f);
    }

    console.log(ff);

    // console.log(f);

    console.log('The sum is: ', a + b + c + d + e);
}

function sum(d, f, h) {
    console.log(d - f - h)
}
// console.log(g);

sum(1, 8, 5, 7, 9, 5, 6);

// number, string, boolean, undefined


let l = 2;

let asdf = 'asdf';
let test = "test";
let two = `Two: ${l}`;

console.log(two)

console.log(3 === '3')
console.log('1' + 1)
console.log(5 - '2')
console.log(1 + +'2')
console.log(5 - '5jfkdsf')

let z = 6
z = 'asdf'
console.log(z)

let x = 5, v =8; 
var j = 5;

let number;
console.log(number);

// arrays
let arr = [1, 2, 'ghfgjdf', true, undefined];
let arr2 = Array(5, 8, 9, 8)
let numbers = [1, 5, 8, 9];
numbers[0];
numbers[4] = 2;
numbers[6] = 3;
numbers.push(5);
numbers.unshift(4);
numbers.pop();
numbers.shift();
console.log(numbers.slice(2, 5));
numbers.splice(2, 2);
numbers.splice(4, 0, 6)
numbers.splice(2, 1, 8)
numbers[3] = 4
numbers.splice(3, 2, 7, 9)
console.log(numbers)

// objects
let obj = {
    prop: 1,
    prop2: 'asdf',
    prop33: true,
    pp: function () {
        console.log('function in object')
    },
    pp2: {
        p: 1,
        pp: 2
    }
}

console.log(obj.prop2)
console.log(obj['prop'])

let key = 'prop33'
console.log(obj[key])

obj.prop = 6
obj.newprop = 'jdskslda'
console.log(obj.newprop)

console.log(Object.keys(obj))
Object.keys(obj).forEach(function (key) {
    console.log(`${key}: ${obj[key]}`)
})
Object.values(obj).forEach(value => {
    console.log(value)
})
console.log(Object.entries(obj))
Object.entries(obj).forEach((key, value) => console.log(key, value))

const array = [1, 8, 6, 8];
//array = [2, 5]
array[2] = 5;
array[8] = 4;
console.log(array)

const student = {
    name: 'Student Name',
    age: 22
}

student.age = 23
student.fn = '77777';

const object = {
    'first Name': 1,
    1: 3,
    'ppp': {
        p: 1,
        pp: 5
    }
}

const freezedObject = Object.freeze(object);
//object['1'] = 2 -> error
object['ppp'].p = 3

console.log(object['1']);