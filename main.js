musshashX=0;
musshashY=0;
function preload() {
    //downlode4.jpg = loadImage('https://i.postimg.cc/gj6WGYgz/download-4.jpg');
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log('poseNet Is Initialized');
}


function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        musshashX = results[0].pose.musshash.x;
        musshashY = results[0].pose.musshash.y;
        console.log("musshash x = " + musshashX);
        console.log("musshash y = " + musshashY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(downlode(4).jpg, musshashX, musshashY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}