'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var BALL_PROTOTYPE = {
    update: function(){
      this.velocity = this.velocity.add(this.acceleration);
      this.location = this.location.add(this.velocity);
    },

    draw: function(){

      GLB.Draw.circle(this.location.x, this.location.y, this.radius, this.color);
    }
  }

  GLB.Ball = {
    create: function({ x, y, radius, color: { r, g, b, a } }){
      var ball = Object.create(BALL_PROTOTYPE);

      ball.location = GLB.Vector.create({x: x, y: y});
      ball.velocity = GLB.Vector.create({x: 0, y: 0});
      ball.acceleration = GLB.Vector.create({x: 0, y: 0});
      ball.radius = radius || 20;

      ball.color = `rgba(${r}, ${g}, ${b}, ${a})`

      return ball;
    },

    createRandom: function() {
      var ball = Object.create(BALL_PROTOTYPE);

      ball.radius = _.random(10, 40);

      ball.location = GLB.Vector.create({
        x: _.random(ball.radius + 1, window.innerWidth - ball.radius - 1),
        y: _.random(ball.radius + 1, window.innerHeight - ball.radius - 1)
      });

      ball.velocity = GLB.Vector.createRandom();
      ball.acceleration = GLB.Vector.create({x: 0, y: 0});

      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var a = 0.2;
      ball.color = `rgba(${r}, ${g}, ${b}, ${a})`

      return ball;
    }
  }
})();
