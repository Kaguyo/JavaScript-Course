class Weapons {
    constructor(Id, Type, Name, BaseAtk, Passive, Renders, Level = 1) {
        this.Id = Id;
        this.Type = Type;
        this.Name = Name;
        this.BaseAtk = BaseAtk;
        this.Passive = Passive;
        this.Renders = Renders;
        this.Level = Level;
    }
}

const ButterflySting = new Weapons(1, "Scythe", "Butterfly-Sting", 23, {}, {});
const MoonSemble = new Weapons(2, "Scrythe", "Crimson-ButterFly's Semblance", 20, {}, {});
