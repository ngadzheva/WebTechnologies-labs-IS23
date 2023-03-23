const Person = require('./person');

function Student(name, age, fn) {
    Person.call(this, name, age);

    this.fn = fn;

    let _mark;

    this.setMark = mark => _mark = mark;
    this.getMark = () => _mark; 
}

Student.prototype = Object.create(Person.prototype);

const ivan = new Student('Ivan', 22, 77777);
ivan.name;
ivan.age;
ivan.fn;
ivan.greeting();
ivan.info();
ivan.setMark(5);
console.log(ivan.getMark());
console.log(ivan._mark);

Student.prototype.studentInfo = function () {
    console.log(`${this.info()}, ${this.fn}`)
}

ivan.studentInfo();

const gosho = new Person('Gosho', 23);
gosho.studentInfo();