'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var balls = [];

  _.times(5, function(){
    var ball = GLB.Ball.createRandom();
    balls.push(ball);
  })

  GLB.simulationLogic = {

    update: function(){
      _.forEach(balls, function(ball){
        ball.update();
        GLB.Screen_edges.reflect_off_edges(ball);
      })
    },

    draw: function(){
      _.forEach(balls, function(ball){
        ball.draw();
      })
    },
  }
})();
