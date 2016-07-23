'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  let middleX = GLB.canvas.width / 2;
  let middleY = GLB.canvas.height / 2;

  let ball1 = GLB.Ball.create({
    x: -50,
    y: 0,
    radius: 10
  });

  let ball2 = GLB.Ball.create({
    x: 50,
    y: 0,
    radius: 10
  });

  let angle = 0;
  let angularVelocity = 0.02;

  GLB.simulationLogic = {

    init: function() {
      window.addEventListener('resize', function() {
        middleX = GLB.canvas.width / 2;
        middleY = GLB.canvas.height / 2;
      });
    },

    update: function() {
      angle = angle + angularVelocity;

    },

    draw: function() {
      GLB.context.save();
      GLB.context.translate(middleX, middleY);
      GLB.context.rotate(angle);
      ball1.draw();
      ball2.draw();

      GLB.Draw.line({
        start: {x: ball1.location.x, y: ball1.location.y},
        end: {x: ball2.location.x, y: ball2.location.y}
      })

      GLB.context.restore();
    },
  };
})();
