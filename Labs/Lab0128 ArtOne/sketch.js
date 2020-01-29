//  Will Kreidler
// 	30 January 2020
//  This is a comment
//  The setup function function is called once when your program begins
boids = []; //  This array will contain Boid objects
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBoids(100);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20 ,20, 20);
  runBoids()
}

function loadBoids(n){
  for(var i = 0; i < n; i++){
    boids[i] = new Boid (random(width), random(height), random(-7, 7),random(-7, 7));
  }
}

function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}
