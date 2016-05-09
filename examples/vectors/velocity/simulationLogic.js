'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  GLB.simulationLogic = {
    init: function (simulation) {
      simulation.ball = GLB.Ball.create({
        x: 100,
        y: 100,
        radius: 20
      });
    },

    update: function () {
      this.ball.update();
    },

    draw: function () {
      this.ball.draw();
    }
  }
})();
