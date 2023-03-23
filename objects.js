// name = 'Super Global';

const pesho = { name: 'Pesho', age: 22 };
const gosho = { name: 'Gosho', age: 22 };
const ivan = { name: 'Ivan', age: 22, sayHi: () => console.log(`Hi, ${this.name}`) };

function greeting(a = 5, b = 6, c = 7) {

    console.log(`Hello, ${this.name}`);
}

// greeting();

// greeting.call(pesho);
pesho.greeting = greeting;
// pesho.greeting();

// pesho.greeting.call(gosho, 1, 2, 3);
// pesho.greeting.apply(gosho, [1, 2, 3]);

const hello = pesho.greeting.bind(pesho);
hello();

// const sayHi = () => console.log(`Hi, ${this.name}`);
// sayHi();
// sayHi.call(ivan);

ivan.sayHi()