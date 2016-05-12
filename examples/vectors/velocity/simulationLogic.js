'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var ball = GLB.Ball.create({
    x: 100,
    y: 100,
    radius: 20
  });

  GLB.simulationLogic = {
    update: function () {
      ball.update();
      GLB.Screen_edges.reflective_edges(ball)
    },

    draw: function () {
      ball.draw();
    }
  }
})();
