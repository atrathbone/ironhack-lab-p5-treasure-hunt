class Game {
  
  drawGrid() {
    rect(0, 0, 500, 500);
    stroke('red');
    strokeWeight(4);
    fill(0, 255, 0);
    for (let i = 0; i < 9; i++) {
      let n = i*50+50;
      line(0, n, 500, n);
      line(n, 0, n, 500);
    }
  }
}