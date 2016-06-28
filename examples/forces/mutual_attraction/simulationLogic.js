'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var balls = [];
  var G = 0.05 //gravitational constant

  _.times(15, function(){
    var ball = GLB.Ball.createRandom();
    ball.velocity = ball.velocity.multiply(0);
    balls.push(ball);
  });


  GLB.simulationLogic = {

    update: function(){
      GLB.Force.everythingAttractsEverything({objects: balls, G});


      _.forEach(balls, function(ball){
        ball.update();
        ball.acceleration = ball.acceleration.multiply(0);
      });
    },

    draw: function(){
      _.forEach(balls, function(ball){
        ball.draw();
      });

    },
  }
})();
