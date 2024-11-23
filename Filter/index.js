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
    get powerLevel(){
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
    constructor(name, race, form = "Base", technique = "None", powerUsage = 0){
        this.name = name;
        this.race = race;
        this.form = form;
        this.powerUsage = powerUsage;
        this.technique = technique;
    }
    set technique(value){
        if (value == "Kaioken"){
            this._technique = value;
        } else if (value.startsWith("Kaioken x")){
            let multiplierKaioken = Number(value.slice(9));
            if (!isNaN(multiplierKaioken)){
                value = `Kaioken x${multiplierKaioken}`;
                this._technique = value;
            } else if (isNaN(multiplierKaioken)){
                this._technique = "Kaioken";
            }
        } else {
            this._technique = "None";
        }
    } get technique(){
        return this._technique;
    }
    set form(value){
        if (value == "Super Saiyan"){
            this._form = value;
        } else if (value == "Super Saiyan 2"){
            this._form = value;
        } else if (value == "Super Saiyan 3"){
            this._form = value;
        } else {
            this._form = "Base";
        }
    } get form(){
        return this._form;
    }
    set powerUsage(value){
        if (value > 0 && value <= 100){
            this._powerUsage = value;
        } else if (value > 100 || value == 0){
            this._powerUsage = 100;
        } else if (value < 0){
            this._powerUsage = 0;
        }
    } get powerUsage(){
        return this._powerUsage / 100;
    }
    set powerLevel(value){
        this._powerLevel = value;
    }
    get powerLevel(){
        if (this.name == "Goku"){
            this.powerLevel = 3000000 * this.powerUsage;
            if (this.form == "Super Saiyan") this._powerLevel *= 50;
            else if (this.form == "Super Saiyan 2") this._powerLevel *= 100;
            else if (this.form == "Super Saiyan 3") this._powerLevel *= 400;
            if (this.technique == "Kaioken") this._powerLevel *= 2;
            else if (this.technique.startsWith("Kaioken x")){
                let multiplierKaioken = Number(this.technique.slice(9));
                if (!isNaN(multiplierKaioken)) {
                    this._powerLevel *= multiplierKaioken;
                }
            }
        } else if (this.name == "Vegeta"){
            this.powerLevel = 2500000 * this.powerUsage;
            if (this.form == "Super Saiyan") this._powerLevel *= 50;
            else if (this.form == "Super Saiyan 2") this._powerLevel *= 100;
        } else if (this.name == "Picolo"){
            this.powerLevel = 1150000 * this.powerUsage;
        } else if (this.name == "Gohan"){
            this.powerLevel = 200000 * this.powerUsage;
            if (this.form == "Super Saiyan") this._powerLevel *= 50;
            else if (this.form == "Super Saiyan 2") this._powerLevel *= 100;
        } else if (this.name == "Kuririn"){
            this.powerLevel = 75000 * this.powerUsage;
        } else {
            this.powerLevel = 0;
        }
        return this._powerLevel;
    }
}
const freezer = new Freezer("Freezer","Fourth", 1);

const goku = new Characters("Goku", "Saiyan", "Super Saiyan", "Kaioken x2");
const vegeta = new Characters("Vegeta", "Saiyan", "Super Saiyan");
const picolo = new Characters("Picolo", "Namekuseijin");
const gohan = new Characters("Gohan", "Saiyan");
const kuririn = new Characters("Kuririn", "Human");

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



