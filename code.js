show();
onEvent("up_arrow", "click", function( ) {
  show();
  penUp();
  move(0, -10);
});
onEvent("down_arrow", "click", function( ) {
  show();
  penUp();
  move(0, 10);
});
onEvent("left_arrow", "click", function( ) {
  show();
  penUp();
  move(-10, 0);
});
onEvent("right_arrow", "click", function( ) {
  show();
  penUp();
  move(10, 0);
});
onEvent("square", "click", function( ) {
  penDown();
  penRGB(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
  penWidth(3);
  draw_square();
  penUp();
  hide();
});
onEvent("circle", "click", function( ) {
  penDown();
  penRGB(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
  penWidth(3);
  draw_circle();
  penUp();
  hide();
});
onEvent("triangle", "click", function( ) {
  penDown();
  penRGB(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
  penWidth(3);
  draw_triangle();
  penUp();
  hide();
});
function draw_square() {
  moveForward(getNumber("slider1"));
  turnRight(90);
  moveForward(getNumber("slider1"));
  turnRight(90);
  moveForward(getNumber("slider1"));
  turnRight(90);
  moveForward(getNumber("slider1"));
  turnRight(90);
}
function draw_circle() {
  arcRight(360, getNumber("slider1"));
}
function draw_triangle() {
  turnRight(90);
  moveForward(getNumber("slider1"));
  turnLeft(120);
  moveForward(getNumber("slider1"));
  turnLeft(120);
  moveForward(getNumber("slider1"));
  turnTo(360);
}
onEvent("button1_clear", "click", function( ) {
  show();
  penColor("white");
  dot(1000);
});
