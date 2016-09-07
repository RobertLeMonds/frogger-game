// Enemies our player must avoid
var Enemy = function() {

    this.sprite = 'images/enemy-bug.png';

      //Enemy sprite used
  this.sprite = 'images/enemy-bug.png';

  this.x = x;
  this.y = y;

  //Speed of enemies
  this.speed = Math.floor((Math.random() * 400) + (Math.random() * 50) + (Math.random() * 220) + 50);
};

/*Determines where(x) the enemy sprite ends/resets,
 and what happens when the player collides
*/
Enemy.prototype.update = function(dt) {
  if(this.x <= 1070){
    this.x += this.speed * dt;
  }else{
    this.x = -5;
  }

  if (player.x >= this.x - 30
    && player.x <= this.x + 30
    && player.y >= this.y - 30
    && player.y <= this.y + 30) {
      player.reset('Try Again');
  }
};

//renders enemy sprite
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
