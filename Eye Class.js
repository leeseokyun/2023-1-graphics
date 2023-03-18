let e1, e2, e3;
function setup() {
  createCanvas(600, 400);
  noStroke();
  e1 = new E(250, 16, 120);
  e2 = new E(160, 190, 80);
  e3 = new E(420, 230, 220); //(x좌표, y좌표, 크기)
}
function draw() {
  background(102);
  e1.u(mouseX, mouseY);
  e2.u(mouseX, mouseY);
  e3.u(mouseX, mouseY); //마우스 좌표 따라 가기
  e1.d();
  e2.d();
  e3.d();
}
class E {
  constructor(tx, ty, ts) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0.0;
  }
  u(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  }
  d() {
    push();
    translate(this.x, this.y); //원형의 중심으로 기준점 이동
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(153, 204, 0); //눈동자 색
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2); //눈동자크기 원의 반으로 
    pop();
  }
}
