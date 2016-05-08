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
    create: function(x, y, radius){
      var ball = Object.create(BALL_PROTOTYPE);

      ball.location = GLB.Vector.create(x, y);
      ball.velocity = GLB.Vector.create(1, 1);
      ball.acceleration = GLB.Vector.create();
      ball.radius = radius || 20;
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var a = 0.8;
      ball.color = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";

      return ball;
    }
  }
})();
