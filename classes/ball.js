'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var BALL_PROTOTYPE = {
    update: function(){
      this.velocity = this.velocity.add(this.acceleration);
      this.location = this.location.add(this.velocity);
    },

    draw: function(){

      GLB.Draw.circle({
        x:      this.location.x,
        y:      this.location.y,
        radius: this.radius,
        color:  this.color
      });
    }
  }

  GLB.Ball = {
    create: function({ x, y, radius, velocity, color }){
      var ball = Object.create(BALL_PROTOTYPE);

      ball.location     = GLB.Vector.create({x: x, y: y});
      ball.velocity     = velocity || GLB.Vector.create({x: 0, y: 0});
      ball.acceleration = GLB.Vector.create({x: 0, y: 0});
      ball.radius       = radius || 20;
      ball.mass         = ball.radius * ball.radius * Math.PI; // volume

      var r = color && color.r || Math.floor(Math.random() * 255);
      var g = color && color.g || Math.floor(Math.random() * 255);
      var b = color && color.b || Math.floor(Math.random() * 255);
      var a = color && color.a || 0.2;

      ball.color = `rgba(${r}, ${g}, ${b}, ${a})`

      return ball;
    },

    createRandom: function(){
      var x        = _.random(0, GLB.canvas.width);
      var y        = _.random(0, GLB.canvas.height);
      var velocity = GLB.Vector.createRandom();
      var radius   = _.random(10, 30);

      // var r = Math.floor(Math.random() * 255);
      // var g = Math.floor(Math.random() * 255);
      // var b = Math.floor(Math.random() * 255);
      // var a = 0.2;

      // var color = {r, g, b, a};

      return GLB.Ball.create({x, y, velocity, radius});
    }
  }
})();
