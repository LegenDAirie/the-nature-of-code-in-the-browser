'use strict';

(function(){
  let GLB = window.GLB = window.GLB || {};

  let middleX = GLB.canvas.width / 2;
  let middleY = GLB.canvas.height / 2;

  const balls = [];

  _.times(10, function() {
    let ball = GLB.Ball.create({
      radius: 15,
      });
    ball.angle = GLB.Vector.create({});
    ball.angleVelocity = GLB.Vector.create({x: _.random(-.05, 0.05), y: _.random(-.05, 0.05)});
    ball.amplitude = GLB.Vector.create({x: _.random(middleX), y: _.random(middleY)});

    balls.push(ball);
  });

  GLB.simulationLogic = {

    init: function() {
      window.addEventListener('resize', function() {
        middleX = GLB.canvas.width / 2;
        middleY = GLB.canvas.height / 2;

        _.each(balls, function(ball) {
          ball.amplitude = GLB.Vector.create({x: _.random(middleX), y: _.random(middleY)});
        });

      });
    },

    update: function() {

      _.each(balls, function(ball){
        ball.angle = ball.angle.add(ball.angleVelocity);

        ball.location.x = middleX + ball.amplitude.x * Math.sin(ball.angle.x)
        ball.location.y = middleY + ball.amplitude.y * Math.sin(ball.angle.y)
      });

    },

    draw: function() {
      _.each(balls, function(ball){

        GLB.Draw.line({
          start: {x: middleX, y: middleY},
          end: {x: ball.location.x, y: ball.location.y}
        })
        ball.draw();
      });
    },
  };
})();
