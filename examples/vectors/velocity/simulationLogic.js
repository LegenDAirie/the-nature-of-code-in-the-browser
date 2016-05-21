'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var ball = GLB.Ball.create({
    x: 100,
    y: 100,
    radius: 20,
    color: {r: 50, g: 50, b: 50, a: .2}
  });

  var ball2 = GLB.Ball.createRandom();

  GLB.simulationLogic = {
    update: function () {
      ball2.update();
      GLB.Screen_edges.reflective_edges(ball2)
    },

    draw: function () {
      ball2.draw();
    }
  }
})();
