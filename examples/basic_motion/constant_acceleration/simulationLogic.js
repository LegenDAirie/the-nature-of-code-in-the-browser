'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var ball  = GLB.Ball.create({
    x: GLB.canvas.width / 2,
    y: GLB.canvas.height / 2,
    radius: 20,
    color: {r: 255, g: 127, b: 127, a: 0.2}
  });

  var topSpeed = 10;

  ball.acceleration = GLB.Vector.create({x: 0, y: 0.01});
  ball.velocity = GLB.Vector.create({x: 0.2, y: 0});

  GLB.simulationLogic = {

    update: function(){
      ball.update();

      if (ball.velocity.magnitude() > topSpeed){
        ball.velocity = ball.velocity.setMagnitude(topSpeed);
      }

      GLB.Screen_edges.wrap_around_screen(ball);
    },

    draw: function(){
      ball.draw();
    },
  }
})();
