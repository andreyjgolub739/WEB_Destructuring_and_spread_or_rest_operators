//Завдання 1
let car = {
    name: "Chrysler",
    model: "Cordoba",
    year: 1983
};

let {name, model, year} = car;

console.log(`Ім'я: ${name}, модель: ${model}, рік: ${year}`);

//Завдання 2
function sum (...numbers){
    return numbers.reduce((pastNum, num) => pastNum + num, 0);
}

console.log(sum(1, 2, 3, 4));

//Завдання 3

let person = {
    firstName: "Andrey",
    secondName: "Golub",
    year: 2006
};

let jobInfo = {
    work: "Programmer C++",
    paid: 2000
};

let numbers = {...person, ...jobInfo};
console.log(numbers);