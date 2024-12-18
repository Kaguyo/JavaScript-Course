let characterIdle = "inhale";
let readRun = false;
let fall = false;
let keys = {
    a: false,
    d: false,
    w: false,
    l: false
};

let reminder = false;
let toLeft = false;
let grounded = true;
let groundedKey = false;

class Character {
    static characterFrame = 1;
    static allowRun1 = true;
    static allowRun2 = false;
    static allowRun3 = false;
    static allowRun4 = false;
    static allowRun5 = true;
    static allowRun6 = false;
    static allowRun7 = false;
    static allowRun8 = false;

    static Speed = 20;
    static AxisY = 630;
    static AxisX = 200;
    static SpeedModifier = 1;

    static adjustMap = 0;
    static adjustMap2 = 0;

    constructor(image, speed, gameFrame, id, speedModifier = 1){
        this.image = image;
        this.speed = speed;
        this.gameFrame = gameFrame;
        this.id = id;
        this.speedModifier = speedModifier;
    }
    update(){
        if (readRun){
            if (keys.a){
                Character.AxisX -= Character.Speed * Character.SpeedModifier;
                if (Character.AxisX < 60) { Character.AxisX = 60 }
                if (this.id == 1) {
                    this.gameFrame += 0.1 * this.speedModifier * (Character.Speed / 20);
                    if (this.gameFrame >= 2){
                        this.gameFrame = 1;
                        Character.allowRun5 = false;
                        Character.allowRun6 = true;
                    }
                } else if (this.id == 2) {
                    this.gameFrame += 0.07 * this.speedModifier * (Character.Speed / 20);
                    if (this.gameFrame >= 3){
                        this.gameFrame = 2;
                        Character.allowRun6 = false;
                        Character.allowRun7 = true;
                    }
                } else if (this.id == 3) {
                    this.gameFrame += 0.07 * this.speedModifier * (Character.Speed / 20);
                    if (this.gameFrame >= 4){
                        this.gameFrame = 3;
                        Character.allowRun7 = false;
                        Character.allowRun8 = true;
                    }
                } else if (this.id == 4) {
                    this.gameFrame += 0.07 * this.speedModifier * (Character.Speed / 20);
                    if (this.gameFrame >= 5){
                        this.gameFrame = 4;
                        Character.allowRun5 = true;
                        Character.allowRun8 = false;
                    }
                }  
            } else if (keys.d){
                Character.AxisX += Character.Speed * Character.SpeedModifier;
                if (Character.AxisX > 1100) {
                    Character.adjustMap = Character.AxisX - 1100;
                    Character.AxisX = 1100;
                }
                if (this.id == 1) {
                    this.gameFrame += 0.1 * this.speedModifier * (Character.Speed / 20);
                    if (this.gameFrame >= 2){
                        this.gameFrame = 1;
                        Character.allowRun1 = false;
                        Character.allowRun2 = true;
                    }
                } else if (this.id == 2) {
                    this.gameFrame += 0.07 * this.speedModifier * (Character.Speed / 20);
                    if (this.gameFrame >= 3){
                        this.gameFrame = 2;
                        Character.allowRun2 = false;
                        Character.allowRun3 = true;
                    }
                } else if (this.id == 3) {
                    this.gameFrame += 0.07 * this.speedModifier * (Character.Speed / 20);
                    if (this.gameFrame >= 4){
                        this.gameFrame = 3;
                        Character.allowRun3 = false;
                        Character.allowRun4 = true;
                    }
                } else if (this.id == 4) {
                    this.gameFrame += 0.07 * this.speedModifier * (Character.Speed / 20);
                    if (this.gameFrame >= 5){
                        this.gameFrame = 4;
                        Character.allowRun1 = true;
                        Character.allowRun4 = false;
                    }
                }
            }
        } else if (characterIdle == "inhale") {
            this.gameFrame += this.speed;
            if (this.id == 1 && this.gameFrame >= 2) {
                this.gameFrame = 1;
                Character.characterFrame = 2;
            } else if (this.id == 2 && this.gameFrame >= 3) {
                this.gameFrame = 2;
                Character.characterFrame = 3;
            } else if (this.id == 3 && this.gameFrame >= 4) {
                this.gameFrame = 3;
                Character.characterFrame = 4;
            } else if (this.id == 4 && this.gameFrame >= 5) {
                this.gameFrame = 4;
                characterIdle = "exhale";
            }
        } else if (characterIdle == "exhale") {
            this.gameFrame -= this.speed;
            if (this.id == 4 && this.gameFrame <= 3){
                this.gameFrame = 4;
                Character.characterFrame = 3;
            } else if (this.id == 3 && this.gameFrame <= 2) {
                this.gameFrame = 3;
                Character.characterFrame = 2;
            } else if (this.id == 2 && this.gameFrame <= 1) {
                this.gameFrame = 2;
                Character.characterFrame = 1;
            } else if (this.id == 1 && this.gameFrame <= 0) {
                this.gameFrame = 1;
                characterIdle = "inhale";
            }
        } 
    }
    draw(){
        ctx.drawImage(this.image, Character.AxisX, Character.AxisY);
    }
}

const seeleIdleAnimation1 = new Image();
seeleIdleAnimation1.src = '../assets/models/characters/Seele/SeeleIdle.png';
const seeleIdleAnimation2 = new Image();
seeleIdleAnimation2.src = '../assets/models/characters/Seele/SeeleIdle2.png';
const seeleIdleAnimation3 = new Image();
seeleIdleAnimation3.src = '../assets/models/characters/Seele/SeeleIdle3.png';
const seeleIdleAnimation4 = new Image();
seeleIdleAnimation4.src = '../assets/models/characters/Seele/SeeleIdle4.png';

const seeleIdleAnimation5 = new Image();
seeleIdleAnimation5.src = '../assets/models/characters/Seele/SeeleIdleReversed.png';
const seeleIdleAnimation6 = new Image();
seeleIdleAnimation6.src = '../assets/models/characters/Seele/SeeleIdle2Reversed.png';
const seeleIdleAnimation7 = new Image();
seeleIdleAnimation7.src = '../assets/models/characters/Seele/SeeleIdle3Reversed.png';
const seeleIdleAnimation8 = new Image();
seeleIdleAnimation8.src = '../assets/models/characters/Seele/SeeleIdle4Reversed.png';

// Imagens animacao corrida
const seeleRunAnimation1 = new Image();
seeleRunAnimation1.src = '../assets/models/characters/Seele/SeeleRun.png';
const seeleRunAnimation2 = new Image();
seeleRunAnimation2.src = '../assets/models/characters/Seele/SeeleRun2.png';
const seeleRunAnimation3 = new Image();
seeleRunAnimation3.src = '../assets/models/characters/Seele/SeeleRun3.png';
const seeleRunAnimation4 = new Image();
seeleRunAnimation4.src = '../assets/models/characters/Seele/SeeleRun4.png';

// Imagens animacao corrida reversed
const seeleRunAnimation5 = new Image();
seeleRunAnimation5.src = '../assets/models/characters/Seele/SeeleRunReversed.png';
const seeleRunAnimation6 = new Image();
seeleRunAnimation6.src = '../assets/models/characters/Seele/SeeleRun2Reversed.png';
const seeleRunAnimation7 = new Image();
seeleRunAnimation7.src = '../assets/models/characters/Seele/SeeleRun3Reversed.png';
const seeleRunAnimation8 = new Image();
seeleRunAnimation8.src = '../assets/models/characters/Seele/SeeleRun4Reversed.png';


const seeleObject1 = new Character (seeleIdleAnimation1, 0.04, 1, 1);
const seeleObject2 = new Character (seeleIdleAnimation2, 0.20, 2, 2);
const seeleObject3 = new Character (seeleIdleAnimation3, 0.18, 3, 3);
const seeleObject4 = new Character (seeleIdleAnimation4, 0.03, 4, 4);
const seeleObject13 = new Character (seeleIdleAnimation5, 0.04, 1, 1);
const seeleObject14 = new Character (seeleIdleAnimation6, 0.20, 2, 2);
const seeleObject15 = new Character (seeleIdleAnimation7, 0.18, 3, 3);
const seeleObject16 = new Character (seeleIdleAnimation8, 0.03, 4, 4);

const seeleObject5 = new Character (seeleRunAnimation1, 10, 1, 1);
const seeleObject6 = new Character (seeleRunAnimation2, 10, 2, 2);
const seeleObject7 = new Character (seeleRunAnimation3, 10, 3, 3);
const seeleObject8 = new Character (seeleRunAnimation4, 10, 4, 4);

const seeleObject9 = new Character (seeleRunAnimation5, 10, 1, 1);
const seeleObject10 = new Character (seeleRunAnimation6, 10, 2, 2);
const seeleObject11 = new Character (seeleRunAnimation7, 10, 3, 3);
const seeleObject12 = new Character (seeleRunAnimation8, 10, 4, 4);

const seeleArrayObjectIdle = [
    seeleObject1, 
    seeleObject2, 
    seeleObject3,
    seeleObject4,
    seeleObject13,
    seeleObject14,
    seeleObject15,
    seeleObject16, 
];

const seeleArrayObjectRun = [seeleObject5, seeleObject6, seeleObject7, seeleObject8];
const seeleArrayObjectRunReversed = [seeleObject9, seeleObject10, seeleObject11, seeleObject12];

document.addEventListener("keydown", (e) => {
    //  Run Left
    if (e.key === "a") {
        readRun = true;
        keys.a = true;
        toLeft = true;
        if (keys.d) { 
            keys.d = false;
            reminder = true;
        }
        Character.adjustMap = 0;
    }
    //  Run Right
    if (e.key === "d") {
        readRun = true;
        keys.d = true;
        toLeft = false;
        if (keys.a) { 
            keys.a = false;
            reminder = true;
        }
        Character.adjustMap2 = 0;
    }
    //  Jump
    if (e.key === "w"){
        keys.w = true;
    }
    if (e.key === "l"){
        keys.l = true;
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "a" && reminder){
        keys.a = false;
        keys.d = true;
        reminder = false;
    } else if (e.key === "a") {
        keys.a = false;
        toLeft = true;
        Character.adjustMap2 = 0;
    }
    if (e.key === "d" && reminder){
        keys.d = false;
        keys.a = true;
        reminder = false;
    } else if (e.key === "d") {
        keys.d = false;
        toLeft = false;
        if (!keys.l)
        Character.adjustMap = 0;
    }
    if (e.key === "w"){
        keys.w = false;
        grounded = false;
        if (groundedKey) {
            grounded = true;
        }
    }
    if (e.key === "l"){
        keys.l = false;
        characterIdle = "inhale";
    }
    if (!keys.d && !keys.a) readRun = false;
});