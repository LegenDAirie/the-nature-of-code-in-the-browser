'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  // var ball = GLB.Ball.create({
  //   x: 100,
  //   y: 100,
  //   radius: 20,
  //   color: {r: 50, g: 50, b: 50, a: .2}
  // });

  var balls = [];
  _.times(500, function() {
    var ball = GLB.Ball.createRandom();
    balls.push(ball);
  })

  GLB.simulationLogic = {
    update: function () {
      _.forEach(balls, function(ball) {
        ball.update();
        GLB.Screen_edges.reflective_edges(ball);
      })
    },

    draw: function () {
      _.forEach(balls, function(ball) {
        ball.draw();
      })
    }
  }
})();
