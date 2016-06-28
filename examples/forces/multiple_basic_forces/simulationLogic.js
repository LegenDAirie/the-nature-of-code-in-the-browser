'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var ball = GLB.Ball.create({
    x: GLB.canvas.width / 2,
    y: GLB.canvas.height / 2,
    color: {r: 255, g: 127, b: 127, a: 0.2}
  });

  var WIND    = GLB.Vector.create({x: 10, y: 0});
  var GRAVITY = GLB.Vector.create({x: 0, y: 0.1});
  var gravity = GRAVITY.multiply(ball.mass);

  GLB.Force.applyForce({object: ball, force: WIND});
  GLB.Force.applyForce({object: ball, force: gravity});

  GLB.simulationLogic = {

    update: function(){
      ball.update();
      GLB.Screen_edges.reflect_off_edges(ball);
    },

    draw: function(){
      ball.draw();
    },
  };
})();
