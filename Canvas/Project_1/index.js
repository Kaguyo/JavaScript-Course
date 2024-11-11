const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 800;
let gameSpeed = 10;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'arts\\Backgrounds\\Layers\\11lay.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'arts\\Backgrounds\\Layers\\22lay.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'arts\\Backgrounds\\Layers\\44lay.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'arts\\Backgrounds\\Layers\\66lay.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'arts\\Backgrounds\\Layers\\11layReversed.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = 'arts\\Backgrounds\\Layers\\22layReversed.png';
const backgroundLayer7 = new Image();
backgroundLayer7.src = 'arts\\Backgrounds\\Layers\\44layReversed.png';
const backgroundLayer8 = new Image();
backgroundLayer8.src = 'arts\\Backgrounds\\Layers\\66layReversed.png';

let drawImage1 = true;
let drawImage2 = true;
let drawImage3 = true;
let drawImage4 = true;
let drawImage5 = false;
let drawImage6 = false;
let drawImage7 = false;
let drawImage8 = false;

class Layer {
    constructor(image, speedModifier, id) {
        this.x = 800;
        this.x2 = 0;
        this.width = 1228;
        this.speedModifier = speedModifier;
        this.image = image;
        this.speed = (gameSpeed * speedModifier);
        this.id = id;
    }
    update() {
        this.x += this.speed;
        if (this.x >= 1228 ) {
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
        if (this.x >= 2028) {
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
        if (this.x2 >= 1228) {
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
        if (this.x2 >= 2028) {
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
            ctx.drawImage(this.image, canvas.width - this.x2+4, 0);
        } else if (this.id == 7) {
            ctx.drawImage(this.image, canvas.width - this.x2+3, 0);
        } else if (this.id == 6) {
            ctx.drawImage(this.image, canvas.width - this.x2+4, 0);
        }
        else {
            ctx.drawImage(this.image, canvas.width - this.x2, 0);
        }
    }
}
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
    
    requestAnimationFrame(animate);
}
animate();