'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var ball = GLB.Ball.createRandom();
  ball.velocity = ball.velocity.multiply(3);

  GLB.simulationLogic = {

    update: function(){
      ball.update();
      GLB.Screen_edges.reflect_off_edges(ball);
    },

    draw: function(){
      ball.draw();
    },
  }
})();
