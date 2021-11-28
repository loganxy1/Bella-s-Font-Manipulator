function setup(){
    pic = createCapture(VIDEO);
    pic.size(715, 335);
    pic.position(85, 258);

    canvas = createCanvas(490, 342);
    canvas.position(848, 256);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('87ceeb');
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}