'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var G = 0.2; //gravitational constant

  var balls = [];

  var attractor = GLB.Attractor.create({
    x: GLB.canvas.width / 2,
    y: GLB.canvas.height / 2,
    radius: 5,
    mass: 3000,
  });

  _.times(8, function(){
    var ball = GLB.Ball.createRandom();
    ball.velocity = ball.velocity.multiply(1);
    balls.push(ball);
  });

  GLB.simulationLogic = {

    update: function(){
      _.forEach(balls, function(ball){

        var attraction = attractor.calculateForce({object: ball, G});

        GLB.Force.applyForce({object: ball, force: attraction});

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
