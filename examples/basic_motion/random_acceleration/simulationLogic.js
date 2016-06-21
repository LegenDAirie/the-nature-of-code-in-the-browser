'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var topSpeed = 3;
  var ball  = GLB.Ball.create({
    x: GLB.canvas.width / 2,
    y: GLB.canvas.height / 2,
    radius: 20,
    color: {r: 255, g: 127, b: 127, a: 0.2}
  });



  ball.acceleration = GLB.Vector.createRandom();


  GLB.simulationLogic = {

    update: function(){
      ball.acceleration = GLB.Vector.createRandom();
      ball.update();
      ball.velocity = ball.velocity.limit(topSpeed);

      GLB.Screen_edges.wrap_around_screen(ball);
    },

    draw: function(){
      ball.draw();
    },
  }
})();
