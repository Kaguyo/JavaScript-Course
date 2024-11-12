const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1920;
const CANVAS_HEIGHT = canvas.height = 1120;
let gameSpeed = 0;

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

let characterFrame = 1;
let characterIdle = "inhale";
let drawImage1 = true;
let drawImage2 = true;
let drawImage3 = true;
let drawImage4 = true;
let drawImage5 = false;
let drawImage6 = false;
let drawImage7 = false;
let drawImage8 = false;

class Seele {
    constructor(image, speed, gameFrame, id) {
        this.image = image;
        this.speed = speed;
        this.gameFrame = gameFrame;
        this.id = id;
    }
    update() {
        if (characterIdle == "inhale") {
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
                characterFrame = 3;
                characterIdle = "exhale";
            }
        } else {
            this.gameFrame -= this.speed;
            if (this.id == 3 && this.gameFrame <= 2) {
            this.gameFrame = 3;
            characterFrame = 2;
            } else if (this.id == 2 && this.gameFrame <= 1) {
                this.gameFrame = 2;
                characterFrame = 1;
            } else if (this.id == 1 && this.gameFrame <= 0) {
                this.gameFrame = 1;
                characterFrame = 2;
                characterIdle = "inhale";
            }
        }
    }
    draw() {
        ctx.drawImage(this.image, 200, 630); 
    }
}
class Layer {
    constructor(image, speedModifier, id) {
        this.x = CANVAS_WIDTH;
        this.x2 = 0;
        this.width = 1920;
        this.speedModifier = speedModifier;
        this.image = image;
        this.speed = (gameSpeed * speedModifier);
        this.id = id;
    }
    update() {
        this.x += this.speed;
        if (this.x >= 1920) {
            if (this.id == 1) {
                drawImage5 = true;
            } else if (this.id == 2) {
                drawImage6 = true;
            } else if (this.id == 3) {
                drawImage7 = true;
            } else if (this.id == 4) {
                drawImage8 = true;
            } 
        }
        if (this.x >= 3840) {
            if (this.id == 1) {
                drawImage1 = false;
                this.x = 0;
            } else if (this.id == 2) {
                drawImage2 = false;
                this.x = 0;
            } else if (this.id == 3) {
                drawImage3 = false;
                this.x = 0;
            } else if (this.id == 4) {
                drawImage4 = false;
                this.x = 0;
            } 
        }
    }
    updateReversed() {
        this.x2 += this.speed;
        if (this.x2 >= 1920) {
            if (this.id == 5) {
                drawImage1 = true;
            } else if (this.id == 6) {
                drawImage2 = true;
            } else if (this.id == 7) {
                drawImage3 = true;
            } else if (this.id == 8) {
                drawImage4 = true;
            } 
        }
        if (this.x2 >= 3840) {
            if (this.id == 5) {
                drawImage5 = false;
                this.x2 = 0;
            } else if (this.id == 6) {
                drawImage6 = false;
                this.x2 = 0;
            } else if (this.id == 7) {
                drawImage7 = false;
                this.x2 = 0;
            } else if (this.id == 8) {
                drawImage8 = false;
                this.x2 = 0;
            } 
        }
    }
    draw() {
        ctx.drawImage(this.image, canvas.width - this.x, 0);
    }
    drawReversed() {
        if (this.id == 8) {
            ctx.drawImage(this.image, canvas.width - this.x2, 0);
        } else if (this.id == 7) {
            ctx.drawImage(this.image, canvas.width - this.x2, 0);
        } else if (this.id == 6) {
            ctx.drawImage(this.image, canvas.width - this.x2, 0);
        }
        else {
            ctx.drawImage(this.image, canvas.width - this.x2, 0);
        }
    }
}
const seeleObject1 = new Seele (seeleIdleAnimation1, 0.04, 1, 1);
const seeleObject2 = new Seele (seeleIdleAnimation2, 0.20, 2, 2 );
const seeleObject3 = new Seele (seeleIdleAnimation3, 0.18, 3, 3 );
const seeleObject4 = new Seele (seeleIdleAnimation4, 0.03, 4, 4 );

const layer1 = new Layer(backgroundLayer1, 0.2, 1);
const layer2 = new Layer(backgroundLayer2, 0.4, 2);
const layer3 = new Layer(backgroundLayer3, 0.5, 3);
const layer4 = new Layer(backgroundLayer4, 0.8, 4);

const layer5 = new Layer(backgroundLayer5, 0.2, 5);
const layer6 = new Layer(backgroundLayer6, 0.4, 6);
const layer7 = new Layer(backgroundLayer7, 0.5, 7);
const layer8 = new Layer(backgroundLayer8, 0.8, 8);


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    if (drawImage1) {
        layer1.draw();
        layer1.update();
    }
    if (drawImage5) {
        layer5.drawReversed();
        layer5.updateReversed();
    }
    if (drawImage2) {
        layer2.draw();
        layer2.update();
    }
    if (drawImage6) {
        layer6.drawReversed();
        layer6.updateReversed();
    }
    if (drawImage3) {
        layer3.draw();
        layer3.update();
    }
    if (drawImage7) {
        layer7.drawReversed();
        layer7.updateReversed();
    }
    if (drawImage4) {
        layer4.draw();
        layer4.update();
    }
    if (drawImage8) {
        layer8.drawReversed();
        layer8.updateReversed();
    }
    if (characterIdle == "inhale") {
        if (characterFrame == 1) {
            seeleObject1.draw();
            seeleObject1.update();
        } else if (characterFrame == 2) {
            seeleObject2.draw();
            seeleObject2.update();
        } else if (characterFrame == 3) {
            seeleObject3.draw();
            seeleObject3.update();
        } else if (characterFrame == 4) {
            seeleObject4.draw();
            seeleObject4.update();
        }
    } else {
        if (characterFrame == 3) {
            seeleObject3.draw();
            seeleObject3.update();
        } else if (characterFrame == 2) {
            seeleObject2.draw();
            seeleObject2.update();
        } else if (characterFrame == 1) {
            seeleObject1.draw();
            seeleObject1.update();
        }
    }
    requestAnimationFrame(animate);
}
animate();