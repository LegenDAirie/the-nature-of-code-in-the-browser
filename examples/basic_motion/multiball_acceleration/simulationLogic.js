'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var balls = [];
  var topSpeed = 5;
  var mouse = GLB.Vector.create({x: 0, y: 0});

  _.times(10, function(){
      var ball = GLB.Ball.createRandom();
      balls.push(ball);
  });

  GLB.simulationLogic = {

    init: function(){
      GLB.canvas.addEventListener('mousemove', function(event){
        mouse = GLB.Vector.create({x: event.x, y: event.y});
      });
    },

    update: function(){
      _.forEach(balls, function(ball){
        ball.acceleration = mouse.subtract(ball.location);
        ball.acceleration = ball.acceleration.normalize();
        ball.acceleration = ball.acceleration.multiply(0.1);
        ball.update();
        ball.velocity = ball.velocity.limit(topSpeed);
      });
    },

    draw: function(){
      _.forEach(balls, function(ball){
        ball.draw();
      });
    }
  }
})();
