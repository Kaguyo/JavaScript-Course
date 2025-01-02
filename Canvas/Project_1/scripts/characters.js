class Characters {
    constructor(Id, Name, Age, Height, Weight, Gender, Weapon, MoveSet, Level = 1,
    Exp = 0, ExpMax = 50){
        this.Id = Id;
        this.Name = Name;
        this.Age = Age;
        this.Height = Height;
        this.Weight = Weight;
        this.Gender = Gender;
        this.Weapon = Weapon;
        this.MoveSet = MoveSet;
        this.Level = Level;
        this.Exp = Exp;
        this.ExpMax = ExpMax;
        this.Hp = this.HpMax;
        this.Atk = this.AtkMax;
        this.Def = this.DefMax;
    } 
    get HpMax(){
        let countDecimal = 0;
        this._HpMax = 0;
        let i = 0;
        if (this.Id == 1 && this.Name == "Seele"){
            for (i; i < this.Level; i++){
                this._HpMax += (30 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;  
            }
        } else if (this.Id == 2 && this.Name == "Keqing"){
            for (i; i < this.Level; i++){
                this._HpMax += (32 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        }
        
        return parseInt(this._HpMax);
    }
    get AtkMax(){
        let countDecimal = 0;
        this._AtkMax = 0;
        let i = 0;
        if (this.Id == 1 && this.Name == "Seele"){
            for (i = 0; i < this.Level; i++){
                this._AtkMax += (9.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;  
            }
        } else if (this.Id == 2 && this.Name == "Keqing"){
            for (i = 0; i < this.Level; i++){
                this._AtkMax += (8.6 * (1 + (countDecimal / 1.15)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        }

        return parseInt(this._AtkMax);
    }
    get DefMax(){
        let countDecimal = 0;
        this._DefMax = 0;
        let i = 0;
        if (this.Id == 1 && this.Name == "Seele"){
            for (i = 0; i < this.Level; i++){
                this._DefMax += (13.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;  
            }
        } else if (this.Id == 2 && this.Name == "Keqing"){
            for (i = 0; i < this.Level; i++){
                this._DefMax += (12.6 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        }

        return parseInt(this._DefMax);
    }
}
let justifyStats = [10,20,30,40,50,53,60,64,70,75,80,85,90,95,100,101,102,103,104,105];

const Seele = new Characters(1, "Seele", 23, "1.75 m", "63 kg", "Female", {}, [], 79);
const Keqing = new Characters(2, "Keqing", 19, "1.67 m", "58 kg", "Female", {}, [], 79)

console.log(Keqing.Atk);
console.log(Seele.Atk);