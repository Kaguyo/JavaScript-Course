const person = {
    name: "john",
    age: 27
}
console.log(person);

function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}
const Car1 = new Car("Lamborghini", "Aventador", 2024, "Black");
const Car2 = new Car("Lamborghini", "Gallardo", 2024, "Yellow");
console.log(Car1);
console.log(Car2);

class Characters {
    constructor(name, age, elementalType){
        this.name = name;
        this.age = age;
        this.elementalType = elementalType;
    }

    displayCharacter(){
        console.log(`Ninja: ${this.name}, Age: ${this.age}, Element: ${this.elementalType}`)
    }
}

const Ninja1 = new Characters("Naruto", 15, "Wind");
const Ninja2 = new Characters("Sasuke", 15, "Lighting");
const Ninja3 = new Characters("Sakura", 15, "Water");
const Ninja4 = new Characters("Kakashi", 30, "Lighting");

Ninja1.displayCharacter();
Ninja2.displayCharacter();
Ninja3.displayCharacter();
Ninja4.displayCharacter();