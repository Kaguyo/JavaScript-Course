const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1920;
const CANVAS_HEIGHT = canvas.height = 1080;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    allLayers.forEach((layer) => {
        layer.draw();
        layer.update();        
    });
    if (keys.l && CharacterModel.AxisY == 630){
        CharacterModel.Speed = 40;
        if (toLeft){
            CharacterModel.AxisX -= CharacterModel.Speed;
            if (CharacterModel.AxisX < 60)
                CharacterModel.AxisX = 60;
        } else if (!toLeft){
            CharacterModel.AxisX += CharacterModel.Speed;
            if (CharacterModel.AxisX > 1100){
                CharacterModel.adjustMap = CharacterModel.AxisX - 1100;
                CharacterModel.AxisX = 1100;
            }
        }
        characterIdle = "none"
    } else if (!keys.l) {
        CharacterModel.Speed = 20;
    }
    // Jump     ================================
    if (keys.w){
        if (grounded) CharacterModel.AxisY -= 27;
        if (CharacterModel.AxisY <= 250){
            CharacterModel.AxisY = 250;
            keys.w = false;
            grounded = false;
        } 
    } else if (CharacterModel.AxisY < 630){
        CharacterModel.AxisY += 17;
        if (CharacterModel.AxisY > 630) CharacterModel.AxisY = 630;
    } if (CharacterModel.AxisY == 630) groundedKey = true;
    // End Jump ================================
    if (readRun && !keys.l){
        if (keys.d){
            seeleArrayObjectRun.forEach((object) => {
                if (object.id == 1 && object.gameFrame < 2 && CharacterModel.allowRun1){
                    object.update();
                    object.draw();
                } else if (object.id == 2 
                && object.gameFrame < 3 
                && object.gameFrame >= 2
                && CharacterModel.allowRun2){
                    object.update();
                    object.draw();
                } else if (object.id == 3
                && object.gameFrame < 4
                && object.gameFrame >= 3
                && CharacterModel.allowRun3){
                    object.update();
                    object.draw();
                } else if (object.id == 4
                && object.gameFrame < 5
                && object.gameFrame >= 4
                && CharacterModel.allowRun4){
                    object.update();
                    object.draw();
                }
            });
        } else if (keys.a){
            seeleArrayObjectRunReversed.forEach((object) => {
                if (object.id == 1 && object.gameFrame < 2 && CharacterModel.allowRun5){
                    object.update();
                    object.draw();
                } else if (object.id == 2 
                && object.gameFrame < 3 
                && object.gameFrame >= 2
                && CharacterModel.allowRun6){
                    object.update();
                    object.draw();
                } else if (object.id == 3 
                && object.gameFrame < 4
                && object.gameFrame >= 3
                && CharacterModel.allowRun7){
                    object.update();
                    object.draw();
                } else if (object.id == 4 
                && object.gameFrame < 5
                && object.gameFrame >= 4
                && CharacterModel.allowRun8){
                    object.update();
                    object.draw();
                }
            });
        }
    
    } else if (characterIdle == "inhale") {
        CharacterModel.allowRun1 = true;
        CharacterModel.allowRun2 = false;
        CharacterModel.allowRun3 = false;
        CharacterModel.allowRun4 = false;
        CharacterModel.allowRun5 = true;
        CharacterModel.allowRun6 = false;
        CharacterModel.allowRun7 = false;
        CharacterModel.allowRun8 = false;

        if (!keys.l) CharacterModel.adjustMap = 0;
        
        if (CharacterModel.characterFrame == 1) {
            if (!toLeft) {
                seeleObject1.draw();
                seeleObject1.update();
                seeleObject13.update();
            } else {
                seeleObject13.draw();
                seeleObject13.update();
                seeleObject1.update();
            }
        } else if (CharacterModel.characterFrame == 2) {
            if (!toLeft) {
                seeleObject2.draw();
                seeleObject2.update();
                seeleObject14.update();
            } else {
                seeleObject14.draw();
                seeleObject14.update();
                seeleObject2.update();
            }
        } else if (CharacterModel.characterFrame == 3) {
            if (!toLeft) {
                seeleObject3.draw();
                seeleObject3.update();
                seeleObject15.update();
            } else {
                seeleObject15.draw();
                seeleObject15.update();
                seeleObject3.update();
            }
        } else if (CharacterModel.characterFrame == 4) {
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
        CharacterModel.allowRun1 = true;
        CharacterModel.allowRun2 = false;
        CharacterModel.allowRun3 = false;
        CharacterModel.allowRun4 = false;
        CharacterModel.allowRun5 = true;
        CharacterModel.allowRun6 = false;
        CharacterModel.allowRun7 = false;
        CharacterModel.allowRun8 = false;

        if (!keys.l)
        CharacterModel.adjustMap = 0;
        if(CharacterModel.characterFrame == 4){
            if (!toLeft) {
                seeleObject4.draw();
                seeleObject4.update();
                seeleObject16.update();
            } else {
                seeleObject16.draw();
                seeleObject16.update();
                seeleObject4.update();
            }
        } else if (CharacterModel.characterFrame == 3) {
            if (!toLeft) {
                seeleObject3.draw();
                seeleObject3.update();
                seeleObject15.update();
            } else {
                seeleObject15.draw();
                seeleObject15.update();
                seeleObject3.update();
            }
        } else if (CharacterModel.characterFrame == 2) {
            if (!toLeft) {
                seeleObject2.draw();
                seeleObject2.update();
                seeleObject14.update();
            } else {
                seeleObject14.draw();
                seeleObject14.update();
                seeleObject2.update();
            }
        } else if (CharacterModel.characterFrame == 1) {
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
    renderBlood(0);
    requestAnimationFrame(animate);
}
animate();