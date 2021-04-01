const game = new Game();
const player = new Player(1, 9);
let playerDIMG = null;
let playerLIMG = null;
let playerRIMG = null;
let playerUIMG = null;
let treasureIMG = null;
let currentFacing = 'down';



function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload() {
  playerDIMG = loadImage('assets/character-down.png')
  playerLIMG = loadImage('assets/character-left.png')
  playerRIMG = loadImage('assets/character-right.png')
  playerUIMG = loadImage('assets/character-up.png')
  treasureIMG = loadImage('assets/treasure.png')
}

function draw() {
  game.drawGrid();
  switch (currentFacing) {
    case 'up':
      player.draw(playerUIMG);
      break;
    case 'down':
      player.draw(playerDIMG);
      break;
    case 'left':
      player.draw(playerLIMG);
      break;
    case 'right':
      player.draw(playerRIMG);
      break;
  }
  
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      player.moveLeft();
      currentFacing = 'left';
      break;
    case RIGHT_ARROW:
      player.moveRight();
      currentFacing = 'right';
      break;
    case UP_ARROW:
      player.moveUp();
      currentFacing = 'up';
      break;
    case DOWN_ARROW:
      player.moveDown();
      currentFacing = 'down';
      break;
  }


}