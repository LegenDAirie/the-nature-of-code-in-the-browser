'use strict';

(function(){
  let GLB = window.GLB = window.GLB || {};

  let angle = 0;
  let angleVelocity = 0.01;
  let amplitude = (GLB.canvas.height / 2) - 15;

  const balls = [];

  const radius = 30;
  const numberOfBallsOnScreen = GLB.canvas.width / (radius / 2);

  let locationX = 0;

  _.times(numberOfBallsOnScreen, function() {
    let ball = GLB.Ball.create({
      x: locationX,
      y: amplitude * Math.sin(angle),
      radius: radius,
      color: {r: 255, g: 127, b: 127, a: 0.2}
    });

    ball.startingAngle = angle;

    balls.push(ball);
    locationX = locationX + (radius / 2);
    angle = angle + 1;
  });


  GLB.simulationLogic = {

    init: function() {
      window.addEventListener('resize', function() {
        amplitude = (GLB.canvas.height / 2) - 15;
      });
    },

    update: function() {

      _.each(balls, function(ball){
        ball.location.y = amplitude * Math.sin(ball.startingAngle + angle) + GLB.canvas.height / 2;
      });

      angle = angle + angleVelocity;
    },

    draw: function() {
      _.each(balls, function(ball){
        ball.draw();
      });
    },
  };
})();
