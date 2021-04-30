noseX = 0;
noseY = 0;

function preload(){
    moustache = loadImage('https://i.postimg.cc/nL9BvZN2/Moustache.png');
}

function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-50;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
    image(video, 0, 0, 350, 350);
    image(moustache, noseX, noseY, 100, 40);
}

function save(){
    save("Filter.png");
}