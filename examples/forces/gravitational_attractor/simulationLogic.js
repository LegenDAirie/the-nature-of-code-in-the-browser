'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var balls = [];

  // var attractor = GLB.Attractor.createRandom();
  var attractor = GLB.Attractor.create({
    x: GLB.canvas.width / 2,
    y: GLB.canvas.height / 2,
    radius: 5,
    mass: 3000,
  });

  _.times(5, function(){
    var ball = GLB.Ball.createRandom();
    balls.push(ball);
  });




  GLB.simulationLogic = {

    update: function(){
      _.forEach(balls, function(ball){

        attractor.applyForce(ball);

        ball.update();
      });
    },

    draw: function(){
      _.forEach(balls, function(ball){
        ball.draw();
      });

      attractor.draw();
    },
  }
})();
