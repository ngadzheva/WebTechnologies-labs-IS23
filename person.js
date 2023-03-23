function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greeting = () => {
        console.log(`Hello, ${this.name}`);
    }
}

// const pesho = new Person('Pesho', 22);
// pesho.name = 'Petar';
// pesho.age;
// pesho.greeting();

// const maria = new Person('Maria', 22);
// maria.greeting.call(pesho);

Person.prototype.info = function (){
    return `${this.name}: ${this.age}`;
}

// maria.greeting = function () {
//     console.log(`Good Morning, ${this.name}`)
// }

// maria.greeting();
// pesho.greeting();

// Person.prototype.info = function() {
//     console.log('Info')
// }

// maria.info();
// pesho.info();

module.exports = Person;