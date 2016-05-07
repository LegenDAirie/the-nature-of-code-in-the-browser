'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var BALL_PROTOTYPE = {
    update: function(){
      this.velocity = this.velocity.add(this.acceleration);
      this.location = this.location.add(this.velocity);
    },

    draw: function(){
      GLB.Draw(this.x, this.y, this.radius, this.color);
    }
  }

  GLB.Ball = {
    create: function(x, y, radius){
      var ball = Object.create(BALL_PROTOTYPE);

      ball.location = GLB.Vector.create(x, y);
      ball.velocity = GLB.Vector.create();
      ball.acceleration = GLB.Vector.create();
      ball.radius = radius || 20;

      return ball;
    }
  }
})();
