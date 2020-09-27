let p = p5.prototype;
let w = 640;
let h = 480;

function setup() {
  createCanvas(w,h);

  setPlayer();
  //set radar and pod
  //setRadar();
  //setPod();


}

function draw() {
  background(0);
  drawPlayer();
  //drawradar and pod
  //drawRadar();
  //drawPod();

}
