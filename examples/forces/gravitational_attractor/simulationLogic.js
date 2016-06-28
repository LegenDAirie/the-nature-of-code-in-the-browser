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

  _.times(8, function(){
    var ball = GLB.Ball.createRandom();
    ball.velocity = ball.velocity.multiply(3);
    balls.push(ball);
  });




  GLB.simulationLogic = {

    update: function(){
      _.forEach(balls, function(ball){

        attractor.applyForce({object: ball});

        ball.update();
        ball.acceleration = ball.acceleration.multiply(0);
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
