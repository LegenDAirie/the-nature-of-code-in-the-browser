'use strict';

(function(){
  let GLB = window.GLB = window.GLB || {};

  const balls = [];

  _.times(100, function() {
    let ball = GLB.Ball.create({
      x: _.random(GLB.canvas.width / 10, GLB.canvas.width - (GLB.canvas.width / 10)),
      y: _.random(GLB.canvas.height / 10, GLB.canvas.height - (GLB.canvas.height / 10)),
      radius: 5,
      color: {r: 1, g: 1, b: 1, a: 1}
    });

    balls.push(ball);
  });

  GLB.simulationLogic = {

    update: function() {

    },

    draw: function() {
      _.each(balls, function(ball){
        ball.draw();
      });
    },
  };
})();
