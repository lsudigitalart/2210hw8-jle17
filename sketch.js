var openScreen;

var pigHead;
var pigBody;
var pigArms;
var pigFeet;
var pigNoise;

var chickenHead;
var chickenBody;
var chickenArms;
var chickenFeet;
var chickenNoise;

var cowHead;
var cowBody;
var cowArms;
var cowFeet;
var cowNoise;

var horseHead;
var horseBody;
var horseArms;
var horseFeet;
var horseNoise;

var a;  //random arm function
var f;  //random feet function
var b;  //random body function
var h;  //random head function
var n;  //random noise function

function preload(){
  imageMode(CENTER);

  openScreen = loadImage("img/openScreen.png");

  pigHead = loadImage("img/pigHead.png");
  pigBody = loadImage("img/pigBody.png");
  pigArms = loadImage("img/pigArms.png");
  pigFeet = loadImage("img/pigFeet.png");
  pigNoise = loadImage("img/pigNoise.png");

  chickenHead = loadImage("img/chickenHead.png");
  chickenBody = loadImage("img/chickenBody.png");
  chickenArms = loadImage("img/chickenArms.png");
  chickenFeet = loadImage("img/chickenFeet.png");
  chickenNoise = loadImage("img/chickenNoise.png");

  cowHead = loadImage("img/cowHead.png");
  cowBody = loadImage("img/cowBody.png");
  cowArms = loadImage("img/cowArms.png");
  cowFeet = loadImage("img/cowFeet.png");
  cowNoise = loadImage("img/cowNoise.png");

  horseHead = loadImage("img/horseHead.png");
  horseBody = loadImage("img/horseBody.png");
  horseArms = loadImage("img/horseArms.png");
  horseFeet = loadImage("img/horseFeet.png");
  horseNoise = loadImage("img/horseNoise.png");
}

function setup() {
  createCanvas(1325, 1325);
  background(31, 95, 140);
  rectMode(CENTER);
  noStroke();

  image(openScreen, width/2, height/2);

}

function draw(){

}

function mouseReleased(){
  fill(31, 95, 140);

  a = random(4);
  f = random(4);
  b = random(4);
  h = random(4);
  n = random(4);

  println(a, f, b, h, n);

  //random arm functions
  if (a > 0 && a < 1){
    rect(width/2, 650, 1325, 492);
    image(pigArms, width/2, 650);
  }
  if (a > 1 && a < 2){
    rect(width/2, 650, 1325, 492);
    image(chickenArms, width/2, 650);
  }
  if (a > 2 && a < 3){
    rect(width/2, 650, 1325, 492);
    image(cowArms, width/2, 650);
  }
  if (a > 3 && a < 4){
    rect(width/2, 650, 1325, 492);
    image(horseArms, width/2, 650);
  }

  //random feet functions
  if (f > 0 && f < 1){
    rect(width/2, 984, 492, 492);
    image(pigFeet, width/2, 984);
  }
  if (f > 1 && f < 2){
    rect(width/2, 984, 492, 492);
    image(chickenFeet, width/2, 984);
  }
  if (f > 2 && f < 3){
    rect(width/2, 984, 492, 492);
    image(cowFeet, width/2, 984);
  }
  if (f > 3 && f < 4){
    rect(width/2, 984, 492, 492);
    image(horseFeet, width/2, 984);
  }

  //random body functions
  if (b > 0 && b < 1){
    // rect(width/2, 650, 492, 492);
    image(pigBody, width/2, 650);
  }
  if (b > 1 && b < 2){
    // rect(width/2, 650, 492, 492);
    image(chickenBody, width/2, 650);
  }
  if (b > 2 && b < 3){
    // rect(width/2, 650, 492, 492);
    image(cowBody, width/2, 650);
  }
  if (b > 3 && b < 4){
    // rect(width/2, 650, 492, 492);
    image(horseBody, width/2, 650);
  }

  //random head functions
  if (h > 0 && h < 1){
    rect(width/2, 200, 492, 492);
    image(pigHead, width/2, 246);
  }
  if (h > 1 && h < 2){
    rect(width/2, 200, 492, 492);
    image(chickenHead, width/2, 246);
  }
  if (h > 2 && h < 3){
    rect(width/2, 200, 492, 492);
    image(cowHead, width/2, 246);
  }
  if (h > 3 && h < 4){
    rect(width/2, 200, 492, 492);
    image(horseHead, width/2, 246);
  }

  //random noise functions
  if (n > 0 && n < 1){
    rect(1100, 296, 492, 246);
    image(pigNoise, 3*width/4, 246);
  }
  if (n > 1 && n < 2){
    rect(1100, 296, 492, 246);
    image(chickenNoise, 3*width/4, 246);
  }
  if (n > 2 && n < 3){
    rect(1100, 296, 492, 246);
    image(cowNoise, 3*width/4, 246);
  }
  if (n > 3 && n < 4){
    rect(1100, 296, 492, 246);
    image(horseNoise, 3*width/4, 246);
  }

}
