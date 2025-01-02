let characterIdle = "inhale";
let readRun = false;
let fall = false;
let keys = {
    a: false,
    d: false,
    w: false,
    l: false
};

let DisableMacroJump = false;
let terminouPulo = true;
let reminder = false;
let toLeft = false;

class CharacterModel {
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
    static isGrounded = true;

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
                CharacterModel.AxisX -= CharacterModel.Speed * CharacterModel.SpeedModifier;
                if (CharacterModel.AxisX < 60) { CharacterModel.AxisX = 60 }
                if (this.id == 1) {
                    this.gameFrame += 0.1 * this.speedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 2){
                        this.gameFrame = 1;
                        CharacterModel.allowRun5 = false;
                        CharacterModel.allowRun6 = true;
                    }
                } else if (this.id == 2) {
                    this.gameFrame += 0.07 * this.speedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 3){
                        this.gameFrame = 2;
                        CharacterModel.allowRun6 = false;
                        CharacterModel.allowRun7 = true;
                    }
                } else if (this.id == 3) {
                    this.gameFrame += 0.07 * this.speedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 4){
                        this.gameFrame = 3;
                        CharacterModel.allowRun7 = false;
                        CharacterModel.allowRun8 = true;
                    }
                } else if (this.id == 4) {
                    this.gameFrame += 0.07 * this.speedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 5){
                        this.gameFrame = 4;
                        CharacterModel.allowRun5 = true;
                        CharacterModel.allowRun8 = false;
                    }
                }  
            } else if (keys.d){
                CharacterModel.AxisX += CharacterModel.Speed * CharacterModel.SpeedModifier;
                if (CharacterModel.AxisX > 1100) {
                    CharacterModel.adjustMap = CharacterModel.AxisX - 1100;
                    CharacterModel.AxisX = 1100;
                }
                if (this.id == 1) {
                    this.gameFrame += 0.1 * this.speedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 2){
                        this.gameFrame = 1;
                        CharacterModel.allowRun1 = false;
                        CharacterModel.allowRun2 = true;
                    }
                } else if (this.id == 2) {
                    this.gameFrame += 0.07 * this.speedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 3){
                        this.gameFrame = 2;
                        CharacterModel.allowRun2 = false;
                        CharacterModel.allowRun3 = true;
                    }
                } else if (this.id == 3) {
                    this.gameFrame += 0.07 * this.speedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 4){
                        this.gameFrame = 3;
                        CharacterModel.allowRun3 = false;
                        CharacterModel.allowRun4 = true;
                    }
                } else if (this.id == 4) {
                    this.gameFrame += 0.07 * this.speedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 5){
                        this.gameFrame = 4;
                        CharacterModel.allowRun1 = true;
                        CharacterModel.allowRun4 = false;
                    }
                }
            }
        } else if (characterIdle == "inhale") {
            this.gameFrame += this.speed;
            if (this.id == 1 && this.gameFrame >= 2) {
                this.gameFrame = 1;
                CharacterModel.characterFrame = 2;
            } else if (this.id == 2 && this.gameFrame >= 3) {
                this.gameFrame = 2;
                CharacterModel.characterFrame = 3;
            } else if (this.id == 3 && this.gameFrame >= 4) {
                this.gameFrame = 3;
                CharacterModel.characterFrame = 4;
            } else if (this.id == 4 && this.gameFrame >= 5) {
                this.gameFrame = 4;
                characterIdle = "exhale";
            }
        } else if (characterIdle == "exhale") {
            this.gameFrame -= this.speed;
            if (this.id == 4 && this.gameFrame <= 3){
                this.gameFrame = 4;
                CharacterModel.characterFrame = 3;
            } else if (this.id == 3 && this.gameFrame <= 2) {
                this.gameFrame = 3;
                CharacterModel.characterFrame = 2;
            } else if (this.id == 2 && this.gameFrame <= 1) {
                this.gameFrame = 2;
                CharacterModel.characterFrame = 1;
            } else if (this.id == 1 && this.gameFrame <= 0) {
                this.gameFrame = 1;
                characterIdle = "inhale";
            }
        } 
    }
    draw(){
        ctx.drawImage(this.image, CharacterModel.AxisX, CharacterModel.AxisY);
    }
}

const seeleIdleAnimation1 = new Image();
seeleIdleAnimation1.src = "../assets/models/characters/Seele/SeeleIdle.png";
const seeleIdleAnimation2 = new Image();
seeleIdleAnimation2.src = "../assets/models/characters/Seele/SeeleIdle2.png";
const seeleIdleAnimation3 = new Image();
seeleIdleAnimation3.src = "../assets/models/characters/Seele/SeeleIdle3.png";
const seeleIdleAnimation4 = new Image();
seeleIdleAnimation4.src = "../assets/models/characters/Seele/SeeleIdle4.png";

const seeleIdleAnimation5 = new Image();
seeleIdleAnimation5.src = "../assets/models/characters/Seele/SeeleIdleReversed.png";
const seeleIdleAnimation6 = new Image();
seeleIdleAnimation6.src = "../assets/models/characters/Seele/SeeleIdle2Reversed.png";
const seeleIdleAnimation7 = new Image();
seeleIdleAnimation7.src = "../assets/models/characters/Seele/SeeleIdle3Reversed.png";
const seeleIdleAnimation8 = new Image();
seeleIdleAnimation8.src = "../assets/models/characters/Seele/SeeleIdle4Reversed.png";

// Imagens animacao corrida
const seeleRunAnimation1 = new Image();
seeleRunAnimation1.src = "../assets/models/characters/Seele/SeeleRun.png";
const seeleRunAnimation2 = new Image();
seeleRunAnimation2.src = "../assets/models/characters/Seele/SeeleRun2.png";
const seeleRunAnimation3 = new Image();
seeleRunAnimation3.src = "../assets/models/characters/Seele/SeeleRun3.png";
const seeleRunAnimation4 = new Image();
seeleRunAnimation4.src = "../assets/models/characters/Seele/SeeleRun4.png";

// Imagens animacao corrida reversed
const seeleRunAnimation5 = new Image();
seeleRunAnimation5.src = "../assets/models/characters/Seele/SeeleRunReversed.png";
const seeleRunAnimation6 = new Image();
seeleRunAnimation6.src = "../assets/models/characters/Seele/SeeleRun2Reversed.png";
const seeleRunAnimation7 = new Image();
seeleRunAnimation7.src = "../assets/models/characters/Seele/SeeleRun3Reversed.png";
const seeleRunAnimation8 = new Image();
seeleRunAnimation8.src = "../assets/models/characters/Seele/SeeleRun4Reversed.png";


const seeleObject1 = new CharacterModel (seeleIdleAnimation1, 0.04, 1, 1);
const seeleObject2 = new CharacterModel (seeleIdleAnimation2, 0.20, 2, 2);
const seeleObject3 = new CharacterModel (seeleIdleAnimation3, 0.18, 3, 3);
const seeleObject4 = new CharacterModel (seeleIdleAnimation4, 0.03, 4, 4);
const seeleObject13 = new CharacterModel (seeleIdleAnimation5, 0.04, 1, 1);
const seeleObject14 = new CharacterModel (seeleIdleAnimation6, 0.20, 2, 2);
const seeleObject15 = new CharacterModel (seeleIdleAnimation7, 0.18, 3, 3);
const seeleObject16 = new CharacterModel (seeleIdleAnimation8, 0.03, 4, 4);

const seeleObject5 = new CharacterModel (seeleRunAnimation1, 10, 1, 1);
const seeleObject6 = new CharacterModel (seeleRunAnimation2, 10, 2, 2);
const seeleObject7 = new CharacterModel (seeleRunAnimation3, 10, 3, 3);
const seeleObject8 = new CharacterModel (seeleRunAnimation4, 10, 4, 4);

const seeleObject9 = new CharacterModel (seeleRunAnimation5, 10, 1, 1);
const seeleObject10 = new CharacterModel (seeleRunAnimation6, 10, 2, 2);
const seeleObject11 = new CharacterModel (seeleRunAnimation7, 10, 3, 3);
const seeleObject12 = new CharacterModel (seeleRunAnimation8, 10, 4, 4);

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
        CharacterModel.adjustMap = 0;
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
        CharacterModel.adjustMap2 = 0;
    }
    //  Jump
    if (e.key === "w" && !CharacterModel.DisableMacroJump){
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
        CharacterModel.adjustMap2 = 0;
    }
    if (e.key === "d" && reminder){
        keys.d = false;
        keys.a = true;
        reminder = false;
    } else if (e.key === "d") {
        keys.d = false;
        toLeft = false;
        if (!keys.l)
        CharacterModel.adjustMap = 0;
    }
    if (e.key === "w"){
        keys.w = false;
        CharacterModel.isGrounded = false;
        CharacterModel.terminouPulo = true;
        if (CharacterModel.AxisY > 580) CharacterModel.DisableMacroJump = false; /* allowing jump instruction
        to be read before character lands the ground for smoother feeling, however it won't jump before landing */
    }
    if (e.key === "l"){
        keys.l = false;
        characterIdle = "inhale";
    }
    if (!keys.d && !keys.a) readRun = false;
});