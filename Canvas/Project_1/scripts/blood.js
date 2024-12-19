class Blood {
    static changeFrame = 1;
    static bloodFrame = 0;
    static lastX;

    constructor(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight){
        this.image = image;
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.dx = dx;
        this.dy = dy;
        this.dWidth = dWidth
        this.dHeight = dHeight;
    }
    update(){
        Blood.changeFrame += 0.2;
        if (Blood.changeFrame >= 0 && Blood.changeFrame < 1){
            Blood.bloodFrame = 0;
            this.sx = 4 - CharacterModel.adjustMap;
            this.sy = 4;
            this.dx += 0.6 - CharacterModel.adjustMap;
            this.dy -= 0.6;
            Blood.lastX = this.dx;
        } else if (Blood.changeFrame >= 1 && Blood.changeFrame < 2){
            if (Blood.bloodFrame == 0) this.sx += 288;
            Blood.bloodFrame = 1;
            this.dx += 0.6 - CharacterModel.adjustMap;
            this.dy -= 0.6;
            Blood.lastX = this.dx;
        } else if (Blood.changeFrame >= 2 && Blood.changeFrame < 3){
            if (Blood.bloodFrame == 1) this.sx += 288;
            Blood.bloodFrame = 2;
            this.dx += 0.6 - CharacterModel.adjustMap;
            this.dy -= 0.6;
            Blood.lastX = this.dx;
        } else if (Blood.changeFrame >= 3 && Blood.changeFrame < 4){
            if (Blood.bloodFrame == 2) this.sx += 288;
            Blood.bloodFrame = 3;
            this.dx += 0.6 - CharacterModel.adjustMap;
            this.dy -= 0.6;
            Blood.lastX = this.dx;
        } else if (Blood.changeFrame >= 4 && Blood.changeFrame < 5){
            if (Blood.bloodFrame == 3){ this.sx = 5; this.sy += 288}
            Blood.bloodFrame = 4;
            this.dx += 0.6 - CharacterModel.adjustMap;
            this.dy -= 0.6;
            Blood.lastX = this.dx;
        } else if (Blood.changeFrame >= 5 && Blood.changeFrame < 6){
            if (Blood.bloodFrame == 4) this.sx += 288;
            Blood.bloodFrame = 5;
            this.dx += 0.6 - CharacterModel.adjustMap;
            this.dy -= 0.6;
            Blood.lastX = this.dx;
        } else if (Blood.changeFrame >= 6 && Blood.changeFrame < 7){
            if (Blood.bloodFrame == 5) this.sx += 288;
            Blood.bloodFrame = 6;
            this.dx += 0.6 - CharacterModel.adjustMap;
            this.dy -= 0.6;
            Blood.lastX = this.dx;
        } else if (Blood.changeFrame >= 7 && Blood.changeFrame < 8){
            if (Blood.bloodFrame == 6) this.sx += 288;
            Blood.bloodFrame = 7;
            this.dx += 0.6 - CharacterModel.adjustMap;
            this.dy -= 0.6;
            Blood.lastX = this.dx;
        } else {
            Blood.changeFrame = 0;
            Blood.bloodFrame = 0;
            this.sx = 4 - CharacterModel.adjustMap; 
            this.sy = 4;
            this.dx = Blood.lastX;
            this.dy = 350;
            letdraw = false;
        }
    }
    draw(){
        if (letdraw) ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight,
        this.dx, this.dy, this.dWidth, this.dHeight);
    }
}
let letdraw = true;
//  Images initialization
const bloodSharpness0 = new Image();
bloodSharpness0.src = "../assets/physics/bloodPhysics/bloodSharp0.png";

const bloodObject0 = new Blood(bloodSharpness0, 0, 0, 300, 300, 300, 350, 768, 768);

// Array of Blood Render Objects
let blood_renders = [bloodObject0];

function renderBlood(atkSharpness){
    blood_renders[atkSharpness].draw();
    blood_renders[atkSharpness].update();
}