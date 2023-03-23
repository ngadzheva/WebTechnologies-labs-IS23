class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hello, ${this.name}`);
    }

    info() {
        return `${this.name}: ${this.age}`;
    }
}

const ivan = new Person('Ivan', 22);
ivan.name;
ivan.age;
ivan.greeting();
ivan.info()

module.exports = Person;