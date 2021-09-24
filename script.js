var [px, py, pvx] = [410, 700, 0];

function setup() {
    createCanvas(920, 720);
}

function draw() {
    background(0);

    fill(0, 255, 0);
    rect(px, py, 50, 10);
    px = px - pvx;
}

function keyPressed() {
    switch(keyCode) {
        case 37:
            pvx = 8;
            break;
        case 39:
            pvx = -8;
            break;
    }
}

function keyReleased() {
    switch(keyCode) {
        case 37:
            pvx = 0;
            break;
        case 39:
            pvx = 0;
            break;
    }
}

