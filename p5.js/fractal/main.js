var slider;
var angle = 0;

function setup() {
    createCanvas(800, 800);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
} 

function draw() {
    background(51);
    angle = slider.value();
    stroke(255);
    translate(400, height);
    branch(200);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    // stop when length is too small
    if(len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();

       /* push();
        rotate(angle/2);
        branch(len * 0.67);
        pop();*/

        push();
        rotate(-angle/1.5);
        branch(len * 0.67);
        pop();

        /*push();
        rotate(-angle/2);
        branch(len * 0.67);
        pop();*/
    }
}