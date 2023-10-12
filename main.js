leftShoulderX=0;
leftShoulderY=0;
function preload() {
agui=loadImage("agui.png")
}

function setup() {
canvas=createCanvas(300,300)
canvas.center();
video=createCapture(VIDEO)
video.hide()
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on("pose",gotResults)

}
function modelLoaded(){
    console.log ("poseNet.inicializado")
 }

 function gotResults(results){
    console.log (results)
    leftShoulderX=results[0].pose.leftShoulder.x-250;
    leftShoulderY=results[0].pose.leftShoulder.y-250;
console.log (leftShoulderX,leftShoulderY);
}

function draw() {
image(video,0,0,300,300)
image(agui,leftShoulderX,leftShoulderY,50,50);

}
function take_snapshot() {
    save("MyAgui.png")   
   }