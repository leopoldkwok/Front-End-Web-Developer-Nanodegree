// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    this.x = x;
    this.y = y;

    // Speed of the enemy
    this.speed = 200;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = (dt*this.speed) + this.x;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class

var Player = function() {

    this.sprite = 'images/char-boy.png'; // Takes the boy image from the images folder
    this.x = 200; // x axis positioning
    this.y = 385; // y axis positioning

};

// This class requires an update(),

Player.prototype.update = function(dt) {

};

//render() - to display the player on the board and

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// a handleInput() method.

Player.prototype.handleInput = function(input) {

    switch(input) {
        case "down":
            if (this.y < 385) {
                this.y = this.y + 80;
            }
            break;
        case "up":
            this.y = this.y - 80;
            break;
        case "right":
            // allows the player to move right but not off the grid
            if (this.x < 380) {
                this.x = this.x + 90;
            }
            break;
        case "left":
            // allows the player to move left but not off the grid
            if (this.x > 100) {
                this.x = this.x - 90;
            }
            break;
    }

};


// Now instantiate your objects.

var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();

// Place the player object in a variable called player

var player = new Player();

// Method to reset the player's position when it collides with an enemy or finishes the game

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 385;
};


// Place all enemy objects in an array called allEnemies

var allEnemies = []; // initialise an empty array for allEnemies

// var allEnemies = [enemy1, enemy2, enemy3];

// Set random start x positions for the enemies and fixed y -axis positions for the stone walkways
var allEnemies = [
                    new Enemy(-500*Math.random(), 225),
                    new Enemy(-500*Math.random(), 150),
                    new Enemy(-500*Math.random(), 50)
                ];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
