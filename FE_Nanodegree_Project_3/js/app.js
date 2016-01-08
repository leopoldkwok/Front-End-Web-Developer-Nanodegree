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

    this.x = (dt * this.speed) + this.x;

    // Checks to see if the enemy has collided with the player
    if (player.x < this.x + 75 && player.x > this.x - 75) {
        if (player.y > this.y - 50 && player.y < this.y + 50) {
            player.reset();
        }
    }

    // When the enemies havefinished moving across the grid they will start at the beginning of the grid in random x-positions
    if (this.x > 600) {
        this.x = (-400) * Math.random();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class

var Player = function() {

    this.sprite = 'images/char-boy.png'; // Takes the boy image from the images folder
    this.x = 200; // default x axis position for player
    this.y = 385; // default y axis position for player

};

// This class requires an update(),

Player.prototype.update = function(dt) {
    // no op
};

//render() - to display the player on the board and

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// a handleInput() method.

Player.prototype.handleInput = function(input) {
// use switch statement to determine key pressed and players movement
    switch(input) {
        case "down":
            // allows the player to move down if not at the bottom of the screen
            if (this.y < 380) {
                this.y = this.y + 80;
            }
            break;
        case "up":
            // allows the player to move up and once they reach the other side they will reset back to initial x and y positions
            this.y = this.y - 80;
            if (this.y <= 10) {
                this.reset();
            }
            break;
        case "right":
            // allows the player to move right but not off the grid
            if (this.x < 380) {
                this.x = this.x + 100;
            }
            break;
        case "left":
            // allows the player to move left but not off the grid
            if (this.x > 90) {
                this.x = this.x - 100;
            }
            break;
    }

};


// Now instantiate your objects.

// Place the player object in a variable called player

var player = new Player();

// Method to reset the player's position when it collides with an enemy or finishes the game

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 385;
};


// Place all enemy objects in an array called allEnemies

var allEnemies = []; // initialise an empty array for allEnemies

// Set random start x positions for the enemies and fixed y-axis positions for the stone walkways
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