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
        GLB.Screen_edges.reflective_edges(ball);
      })
    },

    draw: function(){
      _.forEach(balls, function(ball){
        ball.draw();
      })
    },

    displayTitle: function(){
      GLB.Draw.title({
        text: "Vector Addition",
        fontSize: "72px",
        fontFamily: "Arial",
        textAlign: "center",
        x: GLB.canvas.width / 2,
        y: GLB.canvas.height / 2,
        color: "rgba(0, 0, 0, 0.6)"
      })
    }
  }
})();
