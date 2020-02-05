//  Will Kreidler
// 	30 January 2020
//  This is a comment
//  The setup function function is called once when your program begins
var boids = []
var mainBoid =[]
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20,);
  loadObjects(650);
}
//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5,80);
  runObjects();

}

function loadObjects(n){
  mainBoid = new Boid(width/2, height/2, random(-1, 1), random(-1, 1), -1);
    for(var i =0; i < n; i++){
      boids[i] = new Boid(random(width), random(height), random(-2, 2), random(-2, 2), i);
  }
}

function runObjects(){
  mainBoid.run();
    for(var i = 0; i < boids.length; i++){
      boids[i].run();
  }

}
