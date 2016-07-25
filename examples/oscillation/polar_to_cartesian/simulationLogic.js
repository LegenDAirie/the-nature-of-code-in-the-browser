'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  let middleX = GLB.canvas.width / 2;
  let middleY = GLB.canvas.height / 2;

  let angle = 0;
  let trackRadius = 100;

  let ball1 = GLB.Ball.create({
    x: 0,
    y: 0,
    radius: 25
  });


  GLB.simulationLogic = {

    init: function() {
      window.addEventListener('resize', function() {
        middleX = GLB.canvas.width / 2;
        middleY = GLB.canvas.height / 2;
      });
    },

    update: function() {
      angle = angle += 0.02;

      ball1.location.x = middleX + trackRadius * Math.cos(angle);
      ball1.location.y = middleY + trackRadius * Math.sin(angle);
    },

    draw: function() {
      ball1.draw();

      GLB.Draw.line({
        start: {x: middleX, y: middleY},
        end: {x: ball1.location.x, y: ball1.location.y}
      })

      GLB.context.restore();
    },
  };
})();
