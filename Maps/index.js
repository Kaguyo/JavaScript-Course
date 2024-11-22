const numbers = [1,2,3,4,5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

// ==============================

const students = ["Goku-1", "Vegeta-2", "Gohan-3", "Picolo-4"];
const studentsUpper = students.map(upperCase);
const invertedStudents = students.map(invertStudents);
const invertedStudents2 = students;

function upperCase(element){
    return element.toUpperCase();
}

function invertStudents(element){
    const splittedElements = element.split('-');
    return `ID ${splittedElements[1]}: ${splittedElements[0]}`;
}
function invertArray(Array){
    Array.forEach((element, index) => {
        const splittedElements = element.split('-');
        Array[index] = `ID ${splittedElements[1]}: ${splittedElements[0]}`;
    });
}

console.log(invertedStudents);
console.log(invertedStudents2);

invertArray(invertedStudents2);
console.log(invertedStudents2);