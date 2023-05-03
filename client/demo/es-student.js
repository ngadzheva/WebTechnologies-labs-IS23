//import Human from '../es6-person';
const Human = require('./es6-person');

class Student extends Human {
    $mark;

    constructor(name, age, fn) {
        super(name, age);

        this.fn = fn;
    }

    setMark(mark) {
        this.$mark = mark;
    }

    getMark() {
        return this.$mark;
    }

    studentInfo() {
        console.log(`${super.info()}, ${this.fn}`)
    }
}

const maria = new Student('Maria', 21, 77777);
maria.setMark(5);
maria.getMark();
maria.studentInfo();
maria.greeting(); 