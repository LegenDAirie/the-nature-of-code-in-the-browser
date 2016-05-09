'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  GLB.canvas = document.getElementById('canvas');
  GLB.canvas.setAttribute('width', window.innerWidth);
  GLB.canvas.setAttribute('height', window.innerHeight);

  GLB.context = GLB.canvas.getContext('2d');

  var simulation = GLB.Simulation.create({
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
  });
  simulation.start();
})();
