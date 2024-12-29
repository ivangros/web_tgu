function pickPropArray(array, property) {
    return array
        .filter(elem => elem.hasOwnProperty(property))
        .map(elem => elem[property]);
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
];

const result1 = pickPropArray(students, 'name');
console.log(result1);

const result2 = pickPropArray(students, 'age');
console.log(result2);