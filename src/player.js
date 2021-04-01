class Player {
    constructor(column, row) {
        this.col = column-1;
        this.row = row-1;
        //this.xPos = this.col*50;
        //this.yPos = this.row*50;
        this.maxUpLef = 0;
        this.maxDownRig = 10;
        this.image = null;
    }
    moveUp() {
        if (this.row <= 9) {
            this.row ++;
            console.log('went up' + this.row);
        }
    }
    moveDown() {
        if (this.row >= 2) {
            this.row --;
            console.log('went down' + this.row);
        }
    }
    moveLeft() {  
        if (this.col <= 9) {
            this.col ++;
            console.log('went left' + this.col);
        }
    }
    moveRight() {
        if(this.col >= 2){
            this.col --;
            console.log('went right' + this.col);
        }
        
    }
    draw(img) {
        this.image = img;
        image(this.image, this.row*50, this.col*50, 50, 50)
    }
    calcPos(){

    }
    
}



// const player = new Player(0,0) // (0,0) = Initial position (col, row)
// player.moveDown() // Increase by 1 the value of player.row
// player.moveDown() // Increase by 1 the value of player.row
// player.moveRight() // Increase by 1 the value of player.col
// console.log(player.col, player.row) // => 1,2