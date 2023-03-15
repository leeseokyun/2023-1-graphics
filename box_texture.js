let img;
function preload(){
  img = loadImage("rb.png");
}
function setup() {
  createCanvas(400, 400,WEBGL);
}
function draw() {
  background(220); //없어도 됨
  rotateX(frameCount * 0.01); //x 좌표로 돌리기 
  rotateY(frameCount * 0.01); //y 좌표로 돌리기
  rotateZ(frameCount * 0.01); //z 좌표로 돌리기
  texture(img); //img 변수 넣기
  box(200); //박스 크기
}
