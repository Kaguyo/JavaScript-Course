let drawImage1 = true;
let drawImage2 = true;
let drawImage3 = true;
let drawImage4 = true;
let drawImage5 = false;
let drawImage6 = false;
let drawImage7 = false;
let drawImage8 = false;

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
        this.x += CharacterModel.adjustMap * this.speedModifier;
        if (this.x >= 3840){
            if (this.id == 1){
                this.x = this.x - 3840;
            } else if (this.id == 2){
                this.x = this.x - 3840;
            } else if (this.id == 3){
                this.x = this.x - 3840;
            } else if (this.id == 4){
                this.x = this.x - 3840;
            } else if (this.id == 5){
                this.x = this.x - 3840;
            } else if (this.id == 6){
                this.x = this.x - 3840;
            } else if (this.id == 7){
                this.x = this.x - 3840;
            } else if (this.id == 8){
                this.x = this.x - 3840;
            } 
        }
    }
}

const backgroundLayer1 = new Image();
backgroundLayer1.src = '../assets/layers/11lay2.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = '../assets/layers/22lay2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = '../assets/layers/44lay2.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = '../assets/layers/66lay2.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = '../assets/layers/11layReversed2.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = '../assets/layers/22layReversed2.png';
const backgroundLayer7 = new Image();
backgroundLayer7.src = '../assets/layers/44layReversed2.png';
const backgroundLayer8 = new Image();
backgroundLayer8.src = '../assets/layers/66layReversed2.png';

const layer1 = new Layer(backgroundLayer1, 0.2, 1, 1920);
const layer2 = new Layer(backgroundLayer2, 0.4, 2, 1920);
const layer3 = new Layer(backgroundLayer3, 0.6, 3, 1920);
const layer4 = new Layer(backgroundLayer4, 0.8, 4, 1920);

const layer5 = new Layer(backgroundLayer5, 0.2, 5, 0);
const layer6 = new Layer(backgroundLayer6, 0.4, 6, 0);
const layer7 = new Layer(backgroundLayer7, 0.6, 7, 0);
const layer8 = new Layer(backgroundLayer8, 0.8, 8, 0);

const allLayers = [layer1, layer5, layer2, layer6, layer3, layer7, layer4, layer8];
const layers = [layer1, layer2, layer3, layer4];
const layersReversed = [layer5, layer6, layer7, layer8];