const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 800;
let gameSpeed = 4;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'arts\\Backgrounds\\image2.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'arts\\Backgrounds\\image22.png';

let x = 0;
let x2 = 0;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer1, x, 0);
    x-=3;
    if (x < -428) {
        ctx.drawImage(backgroundLayer2, canvas.width -x2, 0);
        x2+=3;
    }
    if (x2 >= 1228) {
        x = 0;
        x2 = 0;
    }
    requestAnimationFrame(animate);
}
animate();