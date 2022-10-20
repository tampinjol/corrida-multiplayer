var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];
var fuels, fuelsImg;
var powerCoins, powerCoinsImg;
var obstacles, obstaclesImg1, obstaclesImg2;
var lifeImg;
var blastImg;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  fuelsImg = loadImage("./assets/fuel.png");
  powerCoinsImg = loadImage("./assets/goldCoin.png");
  obstaclesImg1 = loadImage("./assets/obstacle1.png");
  obstaclesImg2 = loadImage("./assets/obstacle2.png");
  lifeImg = loadImage("./assets/life.png")
  blastImg = loadImage("./assets/blast.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderBoard()
    game.end()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
