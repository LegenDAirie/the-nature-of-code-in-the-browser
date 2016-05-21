'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var ball = GLB.Ball.create({
    x: 100,
    y: 100,
    radius: 20
  });

  var ball2 = GLB.Ball.createRandom();

  GLB.simulationLogic = {
    update: function () {
      ball2.update();
      console.log(ball2.location.x);
      GLB.Screen_edges.reflective_edges(ball)
    },

    draw: function () {
      ball2.draw();
    }
  }
})();
