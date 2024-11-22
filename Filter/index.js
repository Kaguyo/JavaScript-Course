class Freezer {
    constructor(name = "Freezer", form = "Base", powerModifier = 0){
        this.name = name;
        this.form = form;
        this.powerModifier = powerModifier;
    }
    set powerModifier(value){
        if (value > 0 && value <= 100){
            this._powerModifier = value;
        } else if (value > 100){
            this._powerModifier = 100;
        } else if (value < 0){
            this._powerModifier = 0;
        } else {
            this._powerModifier = null;
        }
    } get powerModifier(){
        return this._powerModifier;
    }
    get powerUsage(){
        if (this.form === "Base"){
            if (this.powerModifier == null) return 100;
            else return this.powerModifier;
        } else if (this.form === "Second") {
            if (this.powerModifier == null) return 100;
            else return this.powerModifier;
        } else if (this.form === "Third") {
            if (this.powerModifier == null) return 100;
            else return this.powerModifier;
        } else if (this.form === "Fourth") {
            if (this.powerModifier == null) return 2.5;
            else return this.powerModifier;
        }
        return 0;
    }
    get powerLevel() {
        if (this.form === "Base") {
            return 530000 * (this.powerUsage / 100);
        } else if (this.form === "Second") {
            return 1060000 * (this.powerUsage / 100);
        } else if (this.form === "Third") {
            return 1590000 * (this.powerUsage / 100);
        } else if (this.form === "Fourth") {
            return 120000000 * (this.powerUsage / 100);
        }
        return 0;
    }
}
class Characters {
    constructor(name, powerLevel, race, form = "Base"){
        this.name = name;
        this.powerLevel = powerLevel;
        this.race = race;
        this.form = form;
    }
}
const freezer = new Freezer("Freezer","Fourth", 10);

const goku = new Characters("Goku", 3000000, "Saiyan");
const vegeta = new Characters("Vegeta", 2500000, "Saiyan");
const picolo = new Characters("Picolo", 1150000, "Namekuseijin");
const gohan = new Characters("Gohan", 200000, "Saiyan");
const kuririn = new Characters("Kuririn", 75000, "Human");

const WarriorsZ = [goku,vegeta,picolo,gohan,kuririn];

function ScoutPower(element){
    const NewList = [];
    element.forEach(Warrior => {
        if (Warrior.powerLevel >= freezer.powerLevel) NewList.push(Warrior);
    });
    return NewList;
}
const PairableWarrior = ScoutPower(WarriorsZ);
console.log("Freezer:");
console.log(`Power Level: ${freezer.powerLevel}`);
console.log(`Power Usage: ${freezer.powerUsage}%`);
console.log("Warriors pairable to Freezer:");
console.log(PairableWarrior);



