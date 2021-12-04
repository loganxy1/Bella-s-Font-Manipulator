var left = 0;
var right = 0;
var difference = 0;

function setup(){
    pic = createCapture(VIDEO);
    pic.size(715, 335);
    pic.position(85, 258);

    canvas = createCanvas(490, 342);
    canvas.position(848, 256);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        left = results[0].pose.leftWrist.x;
        right = results[0].pose.rightWrist.x;
        difference = floor(left - right);
        console.log("Left Wrist X: "+left+" Right Wrist X: "+right+" Difference: "+difference)
    }
}


function draw(){
    background('87ceeb');

    textSize(difference);
    fill('#00E5FF');
    text('Bella', 50, 400);
}