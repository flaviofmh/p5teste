var stars = [100];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < stars.length; i++) {
    stars[i] = new Star();
  }
}
  
function draw() {
  background(0);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}