let x, y;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(220);
  fill(150, 0, 150);
  ellipse(x, y, 50, 50);
  triangle(x-20, y-20, x+20, y+20, x+40, y-20);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x -= 10; // 왼쪽 화살표 키를 누르면 왼쪽으로 이동
  } else if (keyCode === RIGHT_ARROW) {
    x += 10; // 오른쪽 화살표 키를 누르면 오른쪽으로 이동
  } else if (keyCode === UP_ARROW) {
    y -= 10; // 위쪽 화살표 키를 누르면 위로 이동
  } else if (keyCode === DOWN_ARROW) {
    y += 10; // 아래쪽 화살표 키를 누르면 아래로 이동
  }
}