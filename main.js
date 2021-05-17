function preload(){
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(100,250);
    video=createCapture(VIDEO);
    video.hide();
    }

function draw(){
    image(video,120,110,400,270);
    let c = color(45, 14, 78);
    fill(c);
    noStroke();
    rect(100, 43, 450, 55);
    rect(100, 393, 450, 55);
    rect(43, 110, 55, 270);
    rect(543, 110, 55, 270);
    let d = color(67,87,255);
    fill(d);
    noStroke();
    circle(70, 70, 100);
    circle(570, 70, 100);
    circle(70, 420, 100);
    circle(570, 420, 100);
}
