const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1920;
const CANVAS_HEIGHT = canvas.height = 1120;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'arts\\Backgrounds\\Layers\\11lay2.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'arts\\Backgrounds\\Layers\\22lay2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'arts\\Backgrounds\\Layers\\44lay2.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'arts\\Backgrounds\\Layers\\66lay2.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'arts\\Backgrounds\\Layers\\11layReversed2.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = 'arts\\Backgrounds\\Layers\\22layReversed2.png';
const backgroundLayer7 = new Image();
backgroundLayer7.src = 'arts\\Backgrounds\\Layers\\44layReversed2.png';
const backgroundLayer8 = new Image();
backgroundLayer8.src = 'arts\\Backgrounds\\Layers\\66layReversed2.png';

const seeleIdleAnimation1 = new Image();
seeleIdleAnimation1.src = 'arts\\SeeleIdle.png';
const seeleIdleAnimation2 = new Image();
seeleIdleAnimation2.src = 'arts\\SeeleIdle2.png';
const seeleIdleAnimation3 = new Image();
seeleIdleAnimation3.src = 'arts\\SeeleIdle3.png';
const seeleIdleAnimation4 = new Image();
seeleIdleAnimation4.src = 'arts\\SeeleIdle4.png';

const seeleIdleAnimation5 = new Image();
seeleIdleAnimation5.src = 'arts\\SeeleIdleReversed.png';
const seeleIdleAnimation6 = new Image();
seeleIdleAnimation6.src = 'arts\\SeeleIdle2Reversed.png';
const seeleIdleAnimation7 = new Image();
seeleIdleAnimation7.src = 'arts\\SeeleIdle3Reversed.png';
const seeleIdleAnimation8 = new Image();
seeleIdleAnimation8.src = 'arts\\SeeleIdle4Reversed.png';

// Imagens animacao corrida
const seeleRunAnimation1 = new Image();
seeleRunAnimation1.src = 'arts\\SeeleRun.png';
const seeleRunAnimation2 = new Image();
seeleRunAnimation2.src = 'arts\\SeeleRun2.png';
const seeleRunAnimation3 = new Image();
seeleRunAnimation3.src = 'arts\\SeeleRun3.png';
const seeleRunAnimation4 = new Image();
seeleRunAnimation4.src = 'arts\\SeeleRun4.png';

// Imagens animacao corrida reversed
const seeleRunAnimation5 = new Image();
seeleRunAnimation5.src = 'arts\\SeeleRunReversed.png';
const seeleRunAnimation6 = new Image();
seeleRunAnimation6.src = 'arts\\SeeleRun2Reversed.png';
const seeleRunAnimation7 = new Image();
seeleRunAnimation7.src = 'arts\\SeeleRun3Reversed.png';
const seeleRunAnimation8 = new Image();
seeleRunAnimation8.src = 'arts\\SeeleRun4Reversed.png';


let characterFrame = 1;
let characterIdle = "inhale";
let keys = {
    a: false,
    d: false,
    w: false
};
let drawImage1 = true;
let drawImage2 = true;
let drawImage3 = true;
let drawImage4 = true;
let drawImage5 = false;
let drawImage6 = false;
let drawImage7 = false;
let drawImage8 = false;

let readRun = false;
let fall = false;

class Seele {
    static allowRun1 = true;
    static allowRun2 = false;
    static allowRun3 = false;
    static allowRun4 = false;
    static allowRun5 = true;
    static allowRun6 = false;
    static allowRun7 = false;
    static allowRun8 = false;

    static speed = 20;
    static axisY = 630;

    static adjustMap = 0;
    static adjustMap2 = 0;

    constructor(image, speed, gameFrame, id, x = 200, speedModifier = 1){
        this.image = image;
        this.speed = speed;
        this.gameFrame = gameFrame;
        this.id = id;
        this.x = x;
        this.speedModifier = speedModifier;
    }
    update(seeleArrayObjectIdle, seeleArrayObjectRunReversed, seeleArrayObjectRun){
        if (readRun) {
            if (keys.a){
                this.x -= Seele.speed * this.speedModifier;
                if (this.x < 60) { this.x = 60 }
                seeleArrayObjectIdle.forEach((object) => {
                    object.x = this.x;
                });
                seeleArrayObjectRunReversed.forEach((object) => {
                    object.x = this.x;
                });
                seeleArrayObjectRun.forEach((object) => {
                    object.x = this.x;
                });
                if (this.id == 1) {
                    this.gameFrame += 0.1 * this.speedModifier * (Seele.speed / 20);
                    if (this.gameFrame >= 2){
                        this.gameFrame = 1;
                        Seele.allowRun5 = false;
                        Seele.allowRun6 = true;
                    }
                } else if (this.id == 2) {
                    this.gameFrame += 0.07 * this.speedModifier * (Seele.speed / 20);
                    if (this.gameFrame >= 3){
                        this.gameFrame = 2;
                        Seele.allowRun6 = false;
                        Seele.allowRun7 = true;
                    }
                } else if (this.id == 3) {
                    this.gameFrame += 0.07 * this.speedModifier * (Seele.speed / 20);
                    if (this.gameFrame >= 4){
                        this.gameFrame = 3;
                        Seele.allowRun7 = false;
                        Seele.allowRun8 = true;
                    }
                } else if (this.id == 4) {
                    this.gameFrame += 0.07 * this.speedModifier * (Seele.speed / 20);
                    if (this.gameFrame >= 5){
                        this.gameFrame = 4;
                        Seele.allowRun5 = true;
                        Seele.allowRun8 = false;
                    }
                }  
            } else if (keys.d){
                this.x += Seele.speed * this.speedModifier;
                if (this.x > 1100) {
                    Seele.adjustMap = this.x - 1100;
                    Layer.x2 += this.x - 1100
                    this.x = 1100;
                }
                seeleArrayObjectIdle.forEach((object) => {
                    object.x = this.x;
                });
                seeleArrayObjectRunReversed.forEach((object) => {
                    object.x = this.x;
                });
                seeleArrayObjectRun.forEach((object) => {
                    object.x = this.x;
                });
                if (this.id == 1) {
                    this.gameFrame += 0.1 * this.speedModifier * (Seele.speed / 20);
                    if (this.gameFrame >= 2){
                        this.gameFrame = 1;
                        Seele.allowRun1 = false;
                        Seele.allowRun2 = true;
                    }
                } else if (this.id == 2) {
                    this.gameFrame += 0.07 * this.speedModifier * (Seele.speed / 20);
                    if (this.gameFrame >= 3){
                        this.gameFrame = 2;
                        Seele.allowRun2 = false;
                        Seele.allowRun3 = true;
                    }
                } else if (this.id == 3) {
                    this.gameFrame += 0.07 * this.speedModifier * (Seele.speed / 20);
                    if (this.gameFrame >= 4){
                        this.gameFrame = 3;
                        Seele.allowRun3 = false;
                        Seele.allowRun4 = true;
                    }
                } else if (this.id == 4) {
                    this.gameFrame += 0.07 * this.speedModifier * (Seele.speed / 20);
                    if (this.gameFrame >= 5){
                        this.gameFrame = 4;
                        Seele.allowRun1 = true;
                        Seele.allowRun4 = false;
                    }
                }
            }
        } else if (characterIdle == "inhale") {
            this.gameFrame += this.speed;
            if (this.id == 1 && this.gameFrame >= 2) {
                this.gameFrame = 1;
                characterFrame = 2;
            } else if (this.id == 2 && this.gameFrame >= 3) {
                this.gameFrame = 2;
                characterFrame = 3;
            } else if (this.id == 3 && this.gameFrame >= 4) {
                this.gameFrame = 3;
                characterFrame = 4;
            } else if (this.id == 4 && this.gameFrame >= 5) {
                this.gameFrame = 4;
                characterIdle = "exhale";
            }
        } else if (characterIdle == "exhale") {
            this.gameFrame -= this.speed;
            if (this.id == 4 && this.gameFrame <= 3){
                this.gameFrame = 4;
                characterFrame = 3;
            } else if (this.id == 3 && this.gameFrame <= 2) {
                this.gameFrame = 3;
                characterFrame = 2;
            } else if (this.id == 2 && this.gameFrame <= 1) {
                this.gameFrame = 2;
                characterFrame = 1;
            } else if (this.id == 1 && this.gameFrame <= 0) {
                this.gameFrame = 1;
                characterIdle = "inhale";
            }
        } 
    }
    draw() {
        ctx.drawImage(this.image, this.x, Seele.axisY);
    }
}
class Layer {
    constructor(image, speedModifier, id, x) {
        this.x = x;
        this.width = 1920;
        this.speedModifier = speedModifier;
        this.image = image;
        this.speed = ( 0 * speedModifier);
        this.id = id;
    }
    static x2 = 0;
    draw(){
        ctx.drawImage(this.image, canvas.width - this.x, 0);
    }
    update(){
        this.x += Seele.adjustMap * this.speedModifier;
        Layer.x2 += Seele.adjustMap 
        if (this.x >= 3840) {
            if (this.id == 1) {
                this.x = 0;
            } else if (this.id == 2) {
                this.x = 0;
            } else if (this.id == 3) {
                this.x = 0;
            } else if (this.id == 4) {
                this.x = 0;
            } else if (this.id == 5) {
                this.x = 0;
            } else if (this.id == 6) {
                this.x = 0;
            } else if (this.id == 7) {
                this.x = 0;
            } else if (this.id == 8) {
                this.x = 0;
            } 
        }
    }
}
const seeleObject1 = new Seele (seeleIdleAnimation1, 0.04, 1, 1);
const seeleObject2 = new Seele (seeleIdleAnimation2, 0.20, 2, 2);
const seeleObject3 = new Seele (seeleIdleAnimation3, 0.18, 3, 3);
const seeleObject4 = new Seele (seeleIdleAnimation4, 0.03, 4, 4);
const seeleObject13 = new Seele (seeleIdleAnimation5, 0.04, 1, 1);
const seeleObject14 = new Seele (seeleIdleAnimation6, 0.20, 2, 2);
const seeleObject15 = new Seele (seeleIdleAnimation7, 0.18, 3, 3);
const seeleObject16 = new Seele (seeleIdleAnimation8, 0.03, 4, 4);

const seeleObject5 = new Seele (seeleRunAnimation1, 10, 1, 1);
const seeleObject6 = new Seele (seeleRunAnimation2, 10, 2, 2);
const seeleObject7 = new Seele (seeleRunAnimation3, 10, 3, 3);
const seeleObject8 = new Seele (seeleRunAnimation4, 10, 4, 4);

const seeleObject9 = new Seele (seeleRunAnimation5, 10, 1, 1);
const seeleObject10 = new Seele (seeleRunAnimation6, 10, 2, 2);
const seeleObject11 = new Seele (seeleRunAnimation7, 10, 3, 3);
const seeleObject12 = new Seele (seeleRunAnimation8, 10, 4, 4);

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

const layer1 = new Layer(backgroundLayer1, 0.2, 1, CANVAS_WIDTH);
const layer2 = new Layer(backgroundLayer2, 0.4, 2, CANVAS_WIDTH);
const layer3 = new Layer(backgroundLayer3, 0.6, 3, CANVAS_WIDTH);
const layer4 = new Layer(backgroundLayer4, 0.8, 4, CANVAS_WIDTH);

const layer5 = new Layer(backgroundLayer5, 0.2, 5, 0);
const layer6 = new Layer(backgroundLayer6, 0.4, 6, 0);
const layer7 = new Layer(backgroundLayer7, 0.6, 7, 0);
const layer8 = new Layer(backgroundLayer8, 0.8, 8, 0);

const allLayers = [layer1, layer5, layer2, layer6, layer3, layer7, layer4, layer8];
const layers = [layer1, layer2, layer3, layer4];
const layersReversed = [layer5, layer6, layer7, layer8];

let reminder = false;
let toLeft = false;
let grounded = true;
let groundedKey = false;
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
        Seele.adjustMap = 0;
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
        Seele.adjustMap2 = 0;
    }
    //  Jump
    if (e.key === "w") {
        keys.w = true;
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
        Seele.adjustMap2 = 0;
    }
    if (e.key === "d" && reminder){
        keys.d = false;
        keys.a = true;
        reminder = false;
    } else if (e.key === "d") {
        keys.d = false;
        toLeft = false;
        Seele.adjustMap = 0;
    }
    if (e.key === "w"){
        keys.w = false;
        grounded = false;
        if (groundedKey) {
            grounded = true;
        }
    }
    if (!keys.d && !keys.a) readRun = false;
});

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    allLayers.forEach((layer) => {
        layer.update();
        layer.draw();
    });
    if (keys.w){
        if (grounded) Seele.axisY -= 27;
        if (Seele.axisY <= 250){
            Seele.axisY = 250;
            keys.w = false;
            grounded = false;
        } 
    } else if (Seele.axisY < 630){
        Seele.axisY += 23;
        if (Seele.axisY > 630) Seele.axisY = 630;
    } if (Seele.axisY == 630) groundedKey = true;
    if (readRun){
        if (keys.a){
            seeleArrayObjectRunReversed.forEach((object) => {
                if (object.id == 1 && object.gameFrame < 2 && Seele.allowRun5){
                    object.update(seeleArrayObjectIdle, 
                    seeleArrayObjectRunReversed,
                    seeleArrayObjectRun);
                    object.draw();
                } else if (object.id == 2 
                && object.gameFrame < 3 
                && object.gameFrame >= 2
                && Seele.allowRun6){
                    object.update(seeleArrayObjectIdle, 
                    seeleArrayObjectRunReversed, 
                    seeleArrayObjectRun);
                    object.draw();
                } else if (object.id == 3 
                && object.gameFrame < 4
                && object.gameFrame >= 3
                && Seele.allowRun7){
                    object.update(seeleArrayObjectIdle, 
                    seeleArrayObjectRunReversed, 
                    seeleArrayObjectRun);
                    object.draw();
                } else if (object.id == 4 
                && object.gameFrame < 5
                && object.gameFrame >= 4
                && Seele.allowRun8){
                    object.update(seeleArrayObjectIdle, 
                    seeleArrayObjectRunReversed, 
                    seeleArrayObjectRun);
                    object.draw();
                }
            });
        } else if (keys.d){
            seeleArrayObjectRun.forEach((object) => {
                if (object.id == 1 && object.gameFrame < 2 && Seele.allowRun1){
                    object.update(seeleArrayObjectIdle, 
                    seeleArrayObjectRunReversed, 
                    seeleArrayObjectRun);
                    object.draw();
                } else if (object.id == 2 
                && object.gameFrame < 3 
                && object.gameFrame >= 2
                && Seele.allowRun2){
                    object.update(seeleArrayObjectIdle,
                    seeleArrayObjectRunReversed, 
                    seeleArrayObjectRun);
                    object.draw();
                } else if (object.id == 3
                && object.gameFrame < 4
                && object.gameFrame >= 3
                && Seele.allowRun3){
                    object.update(seeleArrayObjectIdle,
                    seeleArrayObjectRunReversed, 
                    seeleArrayObjectRun);
                    object.draw();
                } else if (object.id == 4
                && object.gameFrame < 5
                && object.gameFrame >= 4
                && Seele.allowRun4){
                    object.update(seeleArrayObjectIdle,
                    seeleArrayObjectRunReversed, 
                    seeleArrayObjectRun);
                    object.draw();
                }
            });
        }
    
    } else if (characterIdle == "inhale") {
        Seele.allowRun1 = true;
        Seele.allowRun2 = false;
        Seele.allowRun3 = false;
        Seele.allowRun4 = false;
        Seele.allowRun5 = true;
        Seele.allowRun6 = false;
        Seele.allowRun7 = false;
        Seele.allowRun8 = false;

        Seele.adjustMap = 0;
        if (characterFrame == 1) {
            if (!toLeft) {
                seeleObject1.draw();
                seeleObject1.update();
                seeleObject13.update();
            } else {
                seeleObject13.draw();
                seeleObject13.update();
                seeleObject1.update();
            }
        } else if (characterFrame == 2) {
            if (!toLeft) {
                seeleObject2.draw();
                seeleObject2.update();
                seeleObject14.update();
            } else {
                seeleObject14.draw();
                seeleObject14.update();
                seeleObject2.update();
            }
        } else if (characterFrame == 3) {
            if (!toLeft) {
                seeleObject3.draw();
                seeleObject3.update();
                seeleObject15.update();
            } else {
                seeleObject15.draw();
                seeleObject15.update();
                seeleObject3.update();
            }
        } else if (characterFrame == 4) {
            if (!toLeft) {
                seeleObject4.draw();
                seeleObject4.update();
                seeleObject16.update();
            } else {
                seeleObject16.draw();
                seeleObject16.update();
                seeleObject4.update();
            }
        }
    } else if (characterIdle == "exhale") {
        Seele.allowRun1 = true;
        Seele.allowRun2 = false;
        Seele.allowRun3 = false;
        Seele.allowRun4 = false;
        Seele.allowRun5 = true;
        Seele.allowRun6 = false;
        Seele.allowRun7 = false;
        Seele.allowRun8 = false;

        Seele.adjustMap = 0;
        if(characterFrame == 4){
            if (!toLeft) {
                seeleObject4.draw();
                seeleObject4.update();
                seeleObject16.update();
            } else {
                seeleObject16.draw();
                seeleObject16.update();
                seeleObject4.update();
            }
        } else if (characterFrame == 3) {
            if (!toLeft) {
                seeleObject3.draw();
                seeleObject3.update();
                seeleObject15.update();
            } else {
                seeleObject15.draw();
                seeleObject15.update();
                seeleObject3.update();
            }
        } else if (characterFrame == 2) {
            if (!toLeft) {
                seeleObject2.draw();
                seeleObject2.update();
                seeleObject14.update();
            } else {
                seeleObject14.draw();
                seeleObject14.update();
                seeleObject2.update();
            }
        } else if (characterFrame == 1) {
            if (!toLeft) {
                seeleObject1.draw();
                seeleObject1.update();
                seeleObject13.update();
            } else {
                seeleObject13.draw();
                seeleObject13.update();
                seeleObject1.update();
            }
        }
    }
    requestAnimationFrame(animate);
}
animate();