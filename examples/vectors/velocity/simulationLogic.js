'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var ball = GLB.Ball.create({
    x: 100,
    y: 100,
    radius: 20,
    color: {r: 50, g: 50, b: 50, a: .2}
  });

  // var ball2 = GLB.Ball.createRandom();

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
