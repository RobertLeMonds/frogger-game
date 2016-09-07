/*
Sprite starting spot, and image sprite used.
 */
var Player = function() {
  // What sprite to use
  this.sprite = 'images/char-cat-girl.png';
  // Initial x location
  this.x = 100;
  // Initial y location
  this.y = 400;
};

/*
All enemy variables used.
 */
var Enemy = function(x, y) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

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


//Resets player to x,y coordinates
Player.prototype.reset = function(message) {
  this.x = 100;
  this.y = 400;

  var div = document.createElement('div');

  div.id = 'message';
  div.innerHTML = '<h2>' + message + '</h2>';

  document.body.appendChild(div);

  setTimeout(function() {
    document.body.removeChild(div);
  }, 1000);
};

//renders player sprite
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//This will determine location of player sprite/up, down, left right movement
Player.prototype.update = function() {
  
  if(this.ctlKey === 'left' && this.x > 0){
    this.x = this.x - 100;
    
  } else if(this.ctlKey === 'right' && this.x != 900){
    this.x = this.x + 100;
    
  } else if(this.ctlKey === 'up'){
    this.y = this.y - 85;
    
  } else if (this.ctlKey === 'down' && this.y != 500){
    this.y = this.y + 85;
  }
  this.ctlKey = null;

  //Landing on other side gets congratulations!
  if(this.y < 25){

    this.reset('Very Nice!');
  }
};


//player input
Player.prototype.handleInput = function(e) {
  this.ctlKey = e;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

/** Produces 1 player per game **/
var player = new Player();

/** Enemy array **/
var allEnemies = [];

//Produces # of enemies based on push/new 
(function addEnemies () {


  allEnemies.push(new Enemy(-2, 60));
  allEnemies.push(new Enemy(-3, 100));
  allEnemies.push(new Enemy(-2, 150));
  allEnemies.push(new Enemy(-7, 220));
  allEnemies.push(new Enemy(-2, 300));
}());


//This is for the arrow movement keys.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});