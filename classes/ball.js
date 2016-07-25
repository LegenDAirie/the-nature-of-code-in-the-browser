'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var BALL_PROTOTYPE = {
    update: function(){
      this.velocity = this.velocity.add(this.acceleration);
      this.location = this.location.add(this.velocity);
    },

    draw: function(){
      GLB.context.save();
      GLB.context.translate(this.location.x, this.location.y);

      GLB.Draw.circle({
        x:      0,
        y:      0,
        radius: this.radius,
        color:  this.color
      });

      GLB.context.restore();
    }
  }

  GLB.Ball = {
    create: function({ x, y, radius, velocity, color }){
      var ball = Object.create(BALL_PROTOTYPE);

      ball.location     = GLB.Vector.create({x, y});
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

      return GLB.Ball.create({x, y, velocity, radius});
    }
  }
})();
