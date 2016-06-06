'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var title = GLB.Title.create("Acceleration Towards Mouse");
  var ball = GLB.Ball.createRandom();
  var topSpeed = 5;
  var mouse = GLB.Vector.create({x: 0, y: 0});

  GLB.simulationLogic = {

    init: function(){
      GLB.canvas.addEventListener('mousemove', function(event){
        mouse = GLB.Vector.create({x: event.x, y: event.y});
      });
    },

    update: function(){
      ball.acceleration = mouse.subtract(ball.location);
      ball.acceleration = ball.acceleration.normalize();
      ball.acceleration = ball.acceleration.multiply(0.1);
      ball.update();
      ball.velocity = ball.velocity.limit(topSpeed);
    },

    draw: function(){
      ball.draw();
    },

    displayTitle: function(){
      title.display();
    },
  }
})();
