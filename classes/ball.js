'use strict';

// (function() {

  var MAX_SPEED = 4; // pixels per frame
  var MAX_INITIAL_SPEED = 2; // pixels per frame
  var MAX_RADIUS = 50;

  var BALL_PROTOTYPE = {
    /* write any methods that you want all instances to have here */
    /* instance methods */
    move: function(getAcceleration) {
      var acceleration = getAcceleration(this.location)

      this.velocity.x += acceleration.x;
      this.velocity.y += acceleration.y;

      this.limitSpeed();

      this.location.x += this.velocity.x;
      this.location.y += this.velocity.y;
    },

    outOfBounds: function() {
     return (
       this.location.x - this.radius > WIDTH ||
       this.location.x + this.radius < 0 ||
       this.location.y - this.radius > HEIGHT ||
       this.location.y + this.radius < 0
     )
    },

    wrap() {
      var rightOfScreen = this.location.x - this.radius > WIDTH
      var leftOfScreen = this.location.x + this.radius < 0
      var belowScreen = this.location.y - this.radius > HEIGHT
      var aboveScreen = this.location.y + this.radius < 0

      if (rightOfScreen) {
        this.location.x = this.location.x - (WIDTH + 2 * this.radius)
      } else if (leftOfScreen) {
        this.location.x = this.location.x + (WIDTH + 2 * this.radius)
      } else if (belowScreen) {
        this.location.y = this.location.y - (HEIGHT + 2 * this.radius)
      } else if (aboveScreen) {
        this.location.y = this.location.y + (HEIGHT + 2 * this.radius)
      }
    },

    draw: function() {
      shapeMaker.drawCircle(this.location.x, this.location.y, this.radius, this.color);
    },

    limitSpeed: function() {
      var currentSpeed = Vector.magnitude(this.velocity);

      if (currentSpeed > MAX_SPEED) {
        var normalizedVector = Vector.normalize(this.velocity);

        this.velocity.x = normalizedVector.x * MAX_SPEED;
        this.velocity.y = normalizedVector.y * MAX_SPEED;
      }
    }
  }

  var Ball = {
    create: function(location, velocity, radius) {
      var ball = Object.create(BALL_PROTOTYPE);

      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      ball.color = 'rgba(' + r + ', ' + g + ', ' + b + ', 0.2)';

      ball.location = location;
      ball.velocity = velocity;
      ball.acceleration = {x: 0, y: 0}
      ball.radius = radius || 20;

      return ball;
    },
    /* class methods */
    createRandom: function () {
      var location = {
        x: Math.random() * WIDTH,
        y: Math.random() * HEIGHT
      };

      var speed = Math.random() * MAX_INITIAL_SPEED;
      var direction = Math.random() * 2 * Math.PI;
      var velocity = {
        x: speed * Math.cos(direction),
        y: speed * Math.sin(direction)
      };

      var radius = Math.random() * MAX_RADIUS;

      return Ball.create(location, velocity, radius);
    }
  }

// })()
