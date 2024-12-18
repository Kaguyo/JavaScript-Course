const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1920;
const CANVAS_HEIGHT = canvas.height = 1120;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    allLayers.forEach((layer) => {
        layer.draw();
        layer.update();        
    });
    if (keys.l && Character.AxisY == 630){
        Character.Speed = 40;
        if (toLeft){
            Character.AxisX -= Character.Speed;
            if (Character.AxisX < 60)
                Character.AxisX = 60;
        } else if (!toLeft){
            Character.AxisX += Character.Speed;
            if (Character.AxisX > 1100){
                Character.adjustMap = Character.AxisX - 1100;
                Character.AxisX = 1100;
            }
        }
        characterIdle = "none"
    } else if (!keys.l) {
        Character.Speed = 20;
    }
    // Jump     ================================
    if (keys.w){
        if (grounded) Character.AxisY -= 27;
        if (Character.AxisY <= 250){
            Character.AxisY = 250;
            keys.w = false;
            grounded = false;
        } 
    } else if (Character.AxisY < 630){
        Character.AxisY += 17;
        if (Character.AxisY > 630) Character.AxisY = 630;
    } if (Character.AxisY == 630) groundedKey = true;
    // End Jump ================================
    if (readRun && !keys.l){
        if (keys.d){
            seeleArrayObjectRun.forEach((object) => {
                if (object.id == 1 && object.gameFrame < 2 && Character.allowRun1){
                    object.update();
                    object.draw();
                } else if (object.id == 2 
                && object.gameFrame < 3 
                && object.gameFrame >= 2
                && Character.allowRun2){
                    object.update();
                    object.draw();
                } else if (object.id == 3
                && object.gameFrame < 4
                && object.gameFrame >= 3
                && Character.allowRun3){
                    object.update();
                    object.draw();
                } else if (object.id == 4
                && object.gameFrame < 5
                && object.gameFrame >= 4
                && Character.allowRun4){
                    object.update();
                    object.draw();
                }
            });
        } else if (keys.a){
            seeleArrayObjectRunReversed.forEach((object) => {
                if (object.id == 1 && object.gameFrame < 2 && Character.allowRun5){
                    object.update();
                    object.draw();
                } else if (object.id == 2 
                && object.gameFrame < 3 
                && object.gameFrame >= 2
                && Character.allowRun6){
                    object.update();
                    object.draw();
                } else if (object.id == 3 
                && object.gameFrame < 4
                && object.gameFrame >= 3
                && Character.allowRun7){
                    object.update();
                    object.draw();
                } else if (object.id == 4 
                && object.gameFrame < 5
                && object.gameFrame >= 4
                && Character.allowRun8){
                    object.update();
                    object.draw();
                }
            });
        }
    
    } else if (characterIdle == "inhale") {
        Character.allowRun1 = true;
        Character.allowRun2 = false;
        Character.allowRun3 = false;
        Character.allowRun4 = false;
        Character.allowRun5 = true;
        Character.allowRun6 = false;
        Character.allowRun7 = false;
        Character.allowRun8 = false;

        if (!keys.l)
        Character.adjustMap = 0;
        if (Character.characterFrame == 1) {
            if (!toLeft) {
                seeleObject1.draw();
                seeleObject1.update();
                seeleObject13.update();
            } else {
                seeleObject13.draw();
                seeleObject13.update();
                seeleObject1.update();
            }
        } else if (Character.characterFrame == 2) {
            if (!toLeft) {
                seeleObject2.draw();
                seeleObject2.update();
                seeleObject14.update();
            } else {
                seeleObject14.draw();
                seeleObject14.update();
                seeleObject2.update();
            }
        } else if (Character.characterFrame == 3) {
            if (!toLeft) {
                seeleObject3.draw();
                seeleObject3.update();
                seeleObject15.update();
            } else {
                seeleObject15.draw();
                seeleObject15.update();
                seeleObject3.update();
            }
        } else if (Character.characterFrame == 4) {
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
        Character.allowRun1 = true;
        Character.allowRun2 = false;
        Character.allowRun3 = false;
        Character.allowRun4 = false;
        Character.allowRun5 = true;
        Character.allowRun6 = false;
        Character.allowRun7 = false;
        Character.allowRun8 = false;

        if (!keys.l)
        Character.adjustMap = 0;
        if(Character.characterFrame == 4){
            if (!toLeft) {
                seeleObject4.draw();
                seeleObject4.update();
                seeleObject16.update();
            } else {
                seeleObject16.draw();
                seeleObject16.update();
                seeleObject4.update();
            }
        } else if (Character.characterFrame == 3) {
            if (!toLeft) {
                seeleObject3.draw();
                seeleObject3.update();
                seeleObject15.update();
            } else {
                seeleObject15.draw();
                seeleObject15.update();
                seeleObject3.update();
            }
        } else if (Character.characterFrame == 2) {
            if (!toLeft) {
                seeleObject2.draw();
                seeleObject2.update();
                seeleObject14.update();
            } else {
                seeleObject14.draw();
                seeleObject14.update();
                seeleObject2.update();
            }
        } else if (Character.characterFrame == 1) {
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